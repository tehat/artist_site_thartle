/**
 * Created by Thomas on 11/22/15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');


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
    var file = req.params[0] || "../public/assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});



module.exports = router;