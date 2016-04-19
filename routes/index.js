var express = require('express');
var router = express.Router();
var restrict = require('../modules/restrict');

router.get('/', restrict, function (req, res, next) {
    res.render('index', {title: 'qwe'});
});

module.exports = router;
