const db = require('../../config/mongoose');
const User = db.model('User');

const passport = require('passport');

function getErrorMessage(err) {
    let message = '';
    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for (let errName in err.errors) {
            if (err.errors[errName].message){
                message = err.errors[errName].message;
            }
        }
    }
    return message;
};

exports.signup = function(req, res) {
    
    const newUser = new User(req.body);
    newUser.provider = 'local';
    
    newUser.save().then(
        (user) => {
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;
            req.login(user, function(err) {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.json(user);
                }
            });
        },
        (err) => {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
    );
    // user.save((err) => {
    //     if (err) {
    //         return res.status(400).send({
    //             message: getErrorMessage(err)
    //         });
    //     } else {
    //         // Remove sensitive data before login
    //         user.password = undefined;
    //         user.salt = undefined;
    //         req.login(user, function(err) {
    //             if (err) {
    //                 res.status(400).send(err);
    //             } else {
    //                 res.json(user);
    //             }
    //         });
    //     }
    // });
    
};

exports.signin = function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err || !user) {
            res.status(400).send(info);
        } else {
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;
            req.login(user, function(err) {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.json(user);
                }
            });
        }
    })(req, res, next);
};

exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
};

exports.saveOAuthUserProfile = function(req, profile, done) {
    User.findOne({
        provider: profile.provider,
        providerId: profile.providerId
    }, (err, user) => {
        if (err) {
            return done(err);
        } else {
            if (!user) {
                const possibleUsername = profile.username ||
                    ((profile.email) ? profile.email.split('@')[0] : '');
                
                User.findUniqueUsername(possibleUsername, null, (availableUsername) => {
                    const newUser = new User(profile);
                    newUser.username = availableUsername;
                    newUser.save((err) => {
                        if (err) {
                            const message = _this.getErrorMessage(err);
                            req.flash('error', message);
                            return res.redirect('/signup');
                        }
                        
                        return done(err, newUser);
                    });
                });
            } else {
                return done(err, user);
            }
        }
    });
};

exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(401).send({
            message: 'User is not logged in'
        });
    }
    next();
};
