let mongoose = require('mongoose');

let messageSchema = mongoose.Schema({
    text: String,
    name: String,
    date: Date
});

let Message = mongoose.model('Message', messageSchema);

module.exports = Message;
