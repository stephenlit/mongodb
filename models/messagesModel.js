const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    title: String,
    author: String,
    body: String,
    comments: [{body: String, date: Date }],
    date: { type: Date, default: Date.now},
}, {
    timestamps: true,
});


module.exports = mongoose.model('Messages', messageSchema);