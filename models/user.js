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
let userModel = mongoose.Schema({
    username: String,
    password: String,
    name: String,
    studentId: Number,
    email: String
},
{ collection: 'users' });

module.exports = mongoose.model('User', userModel);