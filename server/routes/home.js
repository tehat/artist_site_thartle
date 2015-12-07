/**
 * Created by Thomas on 11/28/15.
 */
var express = require("express");
var router = express.Router();
var path = require('path');
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/artist_site_thartle';

    router.post('/', function(req, res){



        pg.connect(connectionString, function(err, client){
            client.query("SELECT * FROM slideshow",

                function(err, result){
                    if(err) {
                        console.log("error with inserting data", err);
                        res.send(false);
                    } else{
                        res.send(result);
                    }


                });
        });

    });

module.exports = router;