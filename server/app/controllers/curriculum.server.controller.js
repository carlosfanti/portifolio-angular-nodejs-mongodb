const db = require('../../config/mongoose');
const Curriculum = db.model('Curriculum');

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
    Curriculum.find().sort('-created').exec().then(
        (curriculuns) => {
            res.status(200).json(curriculuns);
        },
        (err) => {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
    );
};

exports.curriculumByID = function(req, res, next, id) {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        Curriculum.findById(id).exec().then(
            (curriculum) => {
                if (!curriculum) return next(new Error('Failed to load curriculum ' + id));
                req.curriculum = curriculum;
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
    res.status(200).json(req.curriculum);
};
