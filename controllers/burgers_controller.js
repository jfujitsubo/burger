var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');


router.get('/', function (req, res) {
    res.redirect('/index');
  });

router.get('/index', function(req, res) {
    burgers.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', function(req, res) {
    burgers.insertOne(['burger_name'], [req.body.burger_name], function(data){
        res.redirect('/index')
    });
});

router.post('/burgers/eat/:id', function(req, res) {
    burgers.updateOne({devoured: true}, 'id = ' + req.params.id, function(data) {
        res.redirect('/index')
    });
});

module.exports = router;