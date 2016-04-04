var express = require('express');
var passport = require('passport');
var router = express.Router();

/*GET login page*/
router.get('/', function(req, res) {
    res.render('login', {message: req.flash('message')});
});

/*POST to login page*/
router.post('/', passport.authenticate('local',
            { successRedirect: '/event',
              failureRedirect: '/',
              failureFlash: true })
);

/*Log out*/
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/login');
});


module.exports = router;