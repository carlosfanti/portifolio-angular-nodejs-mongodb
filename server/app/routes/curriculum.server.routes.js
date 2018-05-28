const curriculum = require('../../app/controllers/curriculum.server.controller');

module.exports = function(app) {
    app.route('/api/curriculum')
        .get(curriculum.list)
        // .post(curriculum.create);

    app.route('/api/curriculum/:curriculumId')
        .get(curriculum.read)
        // .put(curriculum.update)
        // .delete(curriculum.delete);
        
    app.param('curriculumId', curriculum.curriculumByID);
};