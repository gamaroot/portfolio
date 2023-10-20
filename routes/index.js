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

let express = require('express');
let router = express.Router();

// GET home page
router.get(['/', 'home', 'index'], function(req, res, next) {
  res.render('index', { title: 'Home' });
});

module.exports = router;