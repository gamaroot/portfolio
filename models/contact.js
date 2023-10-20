let mongoose = require('mongoose');

// Create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String
},
{ collection: 'contacts' });

module.exports = mongoose.model('Contact', contactModel);