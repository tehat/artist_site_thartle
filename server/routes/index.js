/**
 * Created by Thomas on 11/22/15.
 */
var express = require('express');
var router = express.Router();

var path = require('path');
//var bodyParser = require('body-parser');
//
//var pg = require('pg');
//var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/artist_site_thartle';

var home = require('./home');
var current = require('./current');
var archive = require('./archive');
var mailing = require('./mailing');
var contact = require('./contact');


router.use('/home', home);
router.use('/current', current);
router.use('/archive', archive);
router.use('/mailing', mailing);
router.use('/contact', contact);


router.get("/*", function(req,res){
    var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});



module.exports = router;