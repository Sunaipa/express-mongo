const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    userPass: String,
    login: String,
    createdAt: Date,
    roles: [String]
});

module.exports = mongoose.model('users', userSchema);