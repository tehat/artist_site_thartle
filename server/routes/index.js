/**
 * Created by Thomas on 11/22/15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');


var home = require('./home');
var archive = require('./archive');
//var sculpture = require('./sculpture');
//var paintings = require('./paintings');
//var worksonpaper = require('./worksonpaper');
//var installations = require('./installations');
//var furniture = require('./furniture');
var mailing = require('./mailing');
var contact = require('./contact');


router.use('/home', home);
router.use('/archive', archive);
//router.use('/sculpture', sculpture);
//router.use('/paintings', paintings);
//router.use('/worksonpaper', worksonpaper);
//router.use('/installations', installations);
//router.use('/furniture', furniture);
router.use('/mailing', mailing);
router.use('/contact', contact);


router.get("/", function(req,res){
    //var file = req.params[0] || "../public/assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", "assets/views/index.html"));
});



module.exports = router;