/**
 * Created by Thomas on 11/22/15.
 */
var express = require('express');
var app = express();

var index = require('./routes/index.js');

var bodyParser = require('body-parser');
var path = require('path');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));

app.use('/', index);

app.set("port", (process.env.PORT || 5000));


app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});

module.exports = app;