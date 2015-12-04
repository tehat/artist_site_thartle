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
    var id = req.query.currentwork_id;

    console.log(req);
    console.log("Boom test 1", results);




    //SQL Query > SELECT data from table
    pg.connect(connectionString, function(err, currentwork){
        var query = currentwork.query("SELECT title, date_completed, materials, dimensions, image_url" +
            " FROM currentwork WHERE currentwork_id = $1", [id]);

            console.log("Test query", id);

        // Stream results back one row at a time, push into results array
        query.on('row', function(row){
            results.push(row);
            console.log("presenting DB results", row);
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