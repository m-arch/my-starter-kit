var express     = require('express');
var router      = express.Router();
var db          = require('../db');
var errors      = require('../utils/errors.js');
var Q           = require('q');


//Home
router.route('/')
    .get(getHome)   

router.route('/appdata/get')
    .get(getAppData)


function getHome(req, res){
    res.render('home', {});
}

function getAppData(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, name: "world"});
}

//------------------------------ END OF ROUTES ----------------
module.exports = router;
