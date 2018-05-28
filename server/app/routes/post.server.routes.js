const post = require('../../app/controllers/post.server.controller');

module.exports = function(app) {
    app.route('/api/post')
        .get(post.list)
        .post(post.create);

    app.route('/api/post/:postId')
        .get(post.read)
    //     .put(post.update)
    //     .delete(post.delete);
        
    app.param('postId', post.postByID);
};