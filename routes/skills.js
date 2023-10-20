let express = require('express');
let router = express.Router();

// GET skills page
router.get('/', function(req, res, next) {
  res.render('skills', { title: 'Skills' });
});

module.exports = router;