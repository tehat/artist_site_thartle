/**
 * Created by Thomas on 11/28/15.
 */
var express = require("express");
var router = express.Router();
var path = require('path');
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/artist_site_thartle';

//Get artwork info and image url
router.get('/', function(req,res){
    var results = [];
    console.log(req.query);
    var artworkID = 4;
    console.log("Boom test 1", results);
    console.log(artworkID);
    //SQL Query > SELECT data from table
    pg.connect(connectionString, function(err, artwork){
        var query = artwork.query("SELECT title, date_completed, materials, dimensions, image_url " +
                "FROM artwork WHERE artwork_id = $1", [artworkID]);
                console.log(query);
        // Stream results back one row at a time, push into results array
        query.on('row', function(row){
            results.push(row);
            console.log("presenting DB results", results);
        });

        // After all data is returned, close connection and return results
        query.on('end', function(){
            artwork.end();

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

