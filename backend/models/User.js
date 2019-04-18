// User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    friends: [
        { type: mongoose.Schema.ObjectId, ref: 'User' }
    ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;