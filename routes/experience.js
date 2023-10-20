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

// GET experience pag
router.get('/', function(req, res, next) {
  res.render('experience', { title: 'Experience' });
});

module.exports = router;