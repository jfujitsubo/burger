var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

router.get('/', function(req, res) {
    burgers.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

router.post('/burgers', function(req, res) {
    burgers.insertOne([
        'burger_name'
    ], [
        req.body.burger_name
    ], function(data) {
        res.redirect('/');
    });
});

router.put('/burgers/:id', function(req, res) {
    var condition = 'id + ' + req.params.id;

    burgers.updateOne({
        devoured: true
    }, condition, function(data) {
        res.redirect('/');
    });
});

module.exports = router;