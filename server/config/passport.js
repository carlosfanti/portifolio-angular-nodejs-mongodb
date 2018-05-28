// const passport = require('passport');
// const mongoose = require('mongoose');

// module.exports = function(db) {
    // const User = mongoose.model('User');

    // const User = db.model('User');
        
    // passport.serializeUser((user, done) => {
    //     done(null, user.id);
    // });
    // passport.deserializeUser((id, done) => {
    //     User.findOne({
    //         _id: id
    //     }, '-password -salt', (err, user) => {
    //         done(err, user);
    //     });
    // });
    // require('./strategies/local.js')(db);
    // require('./strategies/facebook.js')();
    // require('./strategies/twitter.js')();
    // require('./strategies/google.js')();
// };