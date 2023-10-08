var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/', 'home', 'index'], function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET education page. */
router.get('/education', function(req, res, next) {
  res.render('index', { title: 'Education' });
});

/* GET work experience page. */
router.get('/experience', function(req, res, next) {
  res.render('index', { title: 'Experience' });
});

/* GET volunteer page. */
router.get('/volunteer', function(req, res, next) {
  res.render('index', { title: 'Volunteer' });
});

/* GET services page. */
router.get('/skills', function(req, res, next) {
  res.render('index', { title: 'Skills' });
});

/* GET interests page. */
router.get('/interests', function(req, res, next) {
  res.render('index', { title: 'Interests' });
});

module.exports = router;