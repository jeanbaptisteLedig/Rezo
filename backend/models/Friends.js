//Friends.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendsSchema = new Schema({
    requester: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    accepted: {
        type: Boolean
    }
}, {timestamps: true});

schema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Friends', FriendsSchema);