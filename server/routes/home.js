/**
 * Created by Thomas on 11/28/15.
 */
var express = require("express");
var router = express.Router();
var path = require('path');
var pg = require('pg');


router.get('/', function(req, res){
    var file = req.params[0] || 'assets/views/home.html';
    res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;