const config = require('./config');
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
const db = mongoose.createConnection(config.db);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("Mongoose connected");
});

// REQUIRE DOS MODELS
require('../app/models/user.server.model');
require('../app/models/curriculum.server.model');
require('../app/models/contact.server.model');
require('../app/models/post.server.model');

module.exports = db;