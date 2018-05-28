const db = require('../../config/mongoose');
const Contact = db.model('Contact');

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
exports.create = function(req, res) {
    const contact = new Contact(req.body);
    
    contact.save().then( 
        (contact) => {
            res.status(200).json(contact);
        },
        (err) => {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
    );
};

