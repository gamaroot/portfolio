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
let mongoose = require('mongoose');
let User = require('../models/user');

const TITLE = 'Login';
const MSG_EXCEPTION = 'Page under maintenance, please come back later.';
const MSG_INVALID_CREDENTIALS = 'Invalid credentials';

// GET login page
router.get('/', function(req, res, next) {
    res.render('login', {
        title: TITLE, 
        savedUsername: req.session.savedUsername,
        savedPassword: req.session.savedPassword
    });
});

// POST authenticate credentials
router.post('/auth', function(req, res, next) {
    try {
        User.findOne({ username: req.body.username, password: req.body.password })
            .then((data) => { 
                if (data) {
                    req.session.loggedin = true;
                    req.session.savedUsername = req.body.username;
                    req.session.savedPassword = req.body.password;

                    res.redirect('/contacts');
                }
                else {
                    req.session.message = MSG_INVALID_CREDENTIALS;
                    res.status(401).redirect('/login');
                }
            });
    } catch (exception) {
        console.error(`Failed to validate credentials: ${exception}`);

        req.session.message = MSG_EXCEPTION;
        res.status(500).redirect('/login');
    }
});

module.exports =  router;