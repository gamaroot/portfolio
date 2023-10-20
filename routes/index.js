let express = require('express');
let router = express.Router();

// GET home page
router.get(['/', 'home', 'index'], function(req, res, next) {
  res.render('index', { title: 'Home' });
});

module.exports = router;