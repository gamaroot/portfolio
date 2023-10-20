let express = require('express');
let router = express.Router();

// GET education page
router.get('/', function(req, res, next) {
  res.render('education', { title: 'Education' });
});

module.exports = router;