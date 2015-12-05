/**
 * Created by Thomas on 11/28/15.
 */
var express = require("express");
var router = express.Router();
var path = require('path');
var pg = require('pg');


router.get('/', function(req,res){

    var results = [];

    console.log(req.query);

    var slides = {};

    //SQL Query > SELECT data from table
    pg.connect(connectionString, function(err, data){
        var query = data.query("SELECT title, image_url" +
            "FROM slideshow WHERE slideshow_id = $1, $2, $3, $4, $5", [slides]);

        // Stream results back one row at a time, push into results array
        query.on('row', function(row){
            results.push(row);
            console.log("presenting DB results", results);
        });

        // After all data is returned, close connection and return results
        query.on('end', function(){
            currentwork.end();

            console.log("More", results);

            return res.json(results);
            //res.send(results);
        });

        // Handle Errors
        if (err) {
            console.log(err);
        }
    });
});

module.exports = router;