let mongoose = require('mongoose');

// Create a model class
let userModel = mongoose.Schema({
    username: String,
    password: String,
    name: String,
    studentId: Number,
    email: String
},
{ collection: 'users' });

module.exports = mongoose.model('User', userModel);