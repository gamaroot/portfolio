let express = require('express');
let router = express.Router();

// GET experience pag
router.get('/', function(req, res, next) {
  res.render('experience', { title: 'Experience' });
});

module.exports = router;