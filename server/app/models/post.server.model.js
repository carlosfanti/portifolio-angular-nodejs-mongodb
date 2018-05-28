const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    url: {
        type: String
    },
    img: {
        type: String
    },
    en: {
        title: {
            type: String
        },
        name: {
            type: String
        },
        content: {
            type: String
        }
    },
    es: {
        title: {
            type: String
        },
        name: {
            type: String
        },
        content: {
            type: String
        } 
    },
    pt: {
        title: {
            type: String
        },
        name: {
            type: String
        },
        content: {
            type: String
        }   
    }
});

mongoose.model('Post', PostSchema);