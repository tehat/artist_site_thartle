/**
 * Created by Thomas on 11/27/15.
 */
var express = require("express");
var router = express.Router();
var path = require('path');
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/artist_site_thartle';


//Get mailing list information
//router.get('/', function(req,res){
//    var results = [];
//    console.log("Boom test 1", results);
//
//    //SQL Query > SELECT data from table
//    pg.connect(connectionString, function(err, client, done){
//        var query = client.query("SELECT mailing_list_id, first_name, last_name, " +
//            "address_street, address_city, address_state, address_zip, email " +
//            "FROM mailing_list " +
//            "ORDER BY first_name ASC");
//
//        // Stream results back one row at a time, push into results array
//        query.on('row', function(row){
//            results.push(row);
//            console.log("presenting DB results", results);
//        });
//
//        // After all data is returned, close connection and return results
//        query.on('end', function(){
//            client.end();
//
//            console.log("More", results);
//
//            return res.json(results);
//             //res.send(results);
//        });
//
//        // Handle Errors
//        if (err) {
//            console.log(err);
//        }
//    });
//});