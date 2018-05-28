const db = require('../../config/mongoose');
const Post = db.model('Post');

function getErrorMessage (err) {
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

// CRUD

exports.list = function(req, res) {
    Post.find().sort('-created').exec().then(
        (posts) => {
            res.status(200).json(posts);
        },
        (err) => {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
    );
};

exports.postByID = function(req, res, next, id) {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        Post.findById(id).exec().then(
            (post) => {
                if (!post) return next(new Error('Failed to load post ' + id));
                req.post = post;
                next();
            },
            (err) => {
                return next(err);
            }
        );
    } else {
        return next(new Error('invalid Id: ' + id));
    }
};

exports.read = function(req, res) {
    res.status(200).json(req.post);
};

exports.create = function(req, res) {
    const post = new Post(req.body);
    
    post.save().then( 
        (post) => {
            res.status(200).json(post);
        },
        (err) => {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
    );
};