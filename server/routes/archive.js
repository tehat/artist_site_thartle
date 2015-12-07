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

    var artwork = {};

    console.log("Boom test 1", results);
    console.log(artwork);

    //SQL Query > SELECT data from table
    pg.connect(connectionString, function(err, data){
        var query = data.query("SELECT title, date_completed, materials, dimensions, image_url " +
                "FROM artwork WHERE artwork_id = $1, $2, $3, $4, $5" [artwork]);

                console.log(query);
                console.log(artwork);

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

//"title": req.query.title,
//    "date_completed": req.query.date_completed,
//    "materials": req.query.materials,
//    "dimensions": req.query.dimensions,
//    "image_url": req.query.image_url