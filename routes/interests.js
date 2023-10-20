let express = require('express');
let router = express.Router();

// GET interests page
router.get('/', function(req, res, next) {
  res.render('interests', { title: 'Interests' });
});

module.exports = router;