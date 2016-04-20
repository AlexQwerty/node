var express = require('express');
var router = express.Router();
var isAuthenticated = require('../modules/isAuthenticated');

router.get('/', isAuthenticated, function (req, res, next) {
    res.render('index', {title: 'Index'});
});

module.exports = router;
