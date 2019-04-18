// Post.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema({
    body: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    id_user: {
        type: String
    },
});

module.exports = mongoose.model('Post', Post);