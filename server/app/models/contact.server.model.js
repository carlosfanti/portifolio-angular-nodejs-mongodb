const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: {
        type: String,
        required: 'Name cannot be blank'
    },
    email: {
        type: String,
        required: 'Email cannot be blank',
        match: /.+\@.+\..+/
    },
    content: {
        type: String,
        required: 'Content cannot be blank'
    }
});

mongoose.model('Contact', ContactSchema);