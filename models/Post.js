const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    // Create your data structure here
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

// Posts is the name that will show in your database
module.exports = mongoose.model('Posts', PostSchema); 