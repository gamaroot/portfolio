/**
 * Centennial College
 * Game Programming - COMP229 / Section 004
 * 
 * Assignment 2 - Portfolio Site using Express JS
 * 
 * Author: Carlos da Gama Rocha
 * Student ID: 301257092
 * Date: 20-Oct-2023
 */

let mongoose = require('mongoose');

// Create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String
},
{ collection: 'contacts' });

module.exports = mongoose.model('Contact', contactModel);