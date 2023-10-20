let express = require('express');
let router = express.Router();

// GET volunteer page
router.get('/', function(req, res, next) {
  res.render('volunteer', { title: 'Volunteer' });
});

module.exports = router;