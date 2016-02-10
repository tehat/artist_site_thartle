/**
 * Created by Thomas on 2/9/16.
 */
var express = require("express");
var router = express.Router();
var path = require('path');
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/artist_site_thartle';

router.get('/archive', function(req, res){
    pg.connect(connectionString, function(err, client){
        client.query("SELECT * FROM archive",

            function(err, result){
                if(err) {
                    console.log("error with inserting data", err);
                    res.send(false);
                } else{
                    res.send(result);
                }
            });
        console.log("images", client.query);
    });

});

router.get('/sculpture', function(req, res){
    pg.connect(connectionString, function(err, client){
        client.query("SELECT * FROM archive  WHERE category_type LIKE 'sculpture'",
            function(err, result){
                if(err) {
                    console.log("error with inserting data", err);
                    res.send(false);
                } else{
                    res.send(result);
                }
            });
        console.log("sculpture object", client.query);
    });
});

router.get('/paintings', function(req, res){
    pg.connect(connectionString, function(err, client){
        client.query("SELECT * FROM archive  WHERE category_type LIKE 'painting'",

            function(err, result){
                if(err) {
                    console.log("error with inserting data", err);
                    res.send(false);
                } else{
                    res.send(result);
                }
            });
        console.log("here now sculpture object", client.query);
    });

});

router.get('/worksonpaper', function(req, res){
    pg.connect(connectionString, function(err, client){
        client.query("SELECT * FROM archive  WHERE category_type LIKE 'paper'",

            function(err, result){
                if(err) {
                    console.log("error with inserting data", err);
                    res.send(false);
                } else{
                    res.send(result);
                }
            });
        console.log("here now sculpture object", client.query);
    });

});

router.get('/installations', function(req, res){
    pg.connect(connectionString, function(err, client){
        client.query("SELECT * FROM archive  WHERE category_type LIKE 'installation'",

            function(err, result){
                if(err) {
                    console.log("error with inserting data", err);
                    res.send(false);
                } else{
                    res.send(result);
                }
            });
        console.log("here now sculpture object", client.query);
    });

});

router.get('furniture', function(req, res){
    pg.connect(connectionString, function(err, client){
        client.query("SELECT * FROM archive  WHERE category_type LIKE 'furniture'",

            function(err, result){
                if(err) {
                    console.log("error with inserting data", err);
                    res.send(false);
                } else{
                    res.send(result);
                }
            });
        console.log("here now sculpture object", client.query);
    });

});

module.exports = router;