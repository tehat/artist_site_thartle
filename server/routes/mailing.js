/**
 * Created by Thomas on 11/25/15.
 */
var express = require("express");
var router = express.Router();
var path = require('path');
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/artist_site_thartle';




router.post('/', function(req, res){
    var addMailing = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "address_street": req.body.address_street,
        "address_city": req.body.address_city,
        "address_state": req.body.address_state,
        "address_zip": req.body.address_zip,
        "email": req.body.email
    };
    console.log("get request", addMailing);

    pg.connect(connectionString, function(err, client){
        client.query("INSERT INTO mailing_list" +
            "(first_name, last_name, address_street, address_city, address_state, address_zip, email) " +
            "VALUES ($1, $2, $3, $4, $5, $6, $7)",
            [addMailing.first_name, addMailing.last_name, addMailing.address_street, addMailing.address_city,
                addMailing.address_state, addMailing.address_zip, addMailing.email],
            function(err, result){
                if(err) {
                    console.log("error with inserting data", err);
                    res.send(false);
                }

                res.send(true);
            });
    });

});



module.exports = router;