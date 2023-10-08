/**
 * Centennial College
 * Game Programming - COMP229 / Section 004
 * 
 * Assignment 1 - Portfolio Site using Express JS
 * 
 * Author: Carlos da Gama Rocha
 * Student ID: 301257092
 * Date: 08-Oct-2023
 */

// Installed 3rd party packages
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// Routes
let indexRouter = require('./routes/index');

// Express initialization
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // express -e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/home', indexRouter);
app.use('/index', indexRouter);
app.use('/education', indexRouter);
app.use('/experience', indexRouter);
app.use('/services', indexRouter);
app.use('/skills', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
