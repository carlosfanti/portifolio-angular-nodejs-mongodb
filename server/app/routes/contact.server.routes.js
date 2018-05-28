const contact = require('../../app/controllers/contact.server.controller');

module.exports = function(app) {
    app.route('/api/contact')
        // .get(contact.list)
        .post(contact.create);

    // app.route('/api/contact/:contactId')
    //     .get(contact.read)
    //     .put(contact.update)
    //     .delete(contact.delete);
        
    // app.param('contactId', contact.contactByID);
};