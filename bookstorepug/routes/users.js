const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(request, response, next) {
  response.send('respond with a resource');
});


router.get('/signup', function(request, response, next) {
  response.render('signup');
});

router.get('/login', function(request, response, next) {
  response.render('login');
});



module.exports = router;
