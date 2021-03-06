var express = require('express');
var router = express.Router();
var passport = require('../modules/passportConf');

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login'
}));

router.get('/login', function (req, res, next) {
    res.render('login');
});

router.get('/logout', function (req, res, next) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
