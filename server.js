var express = require('express');
var ejs = require('ejs');
var bodyParser = require("body-parser");

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017';

var path = require('path');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'ejs');

app.use(express.static("pages"));

app.get('/', function (req, res) {
    res.render('index');
    
    
});
app.get('/book', function (req, res) {
    res.render('book');
    
    
});

app.get('/hall', function (req, res) {
    res.render('hall');
    
    
});

app.post('/', function (req, res) {
  
    var filmName = req.body.filmName;

    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        
        var db = client.db('Cinemaholics');
        var collection = db.collection('films');
        collection.find({name:filmName}).toArray(function(err, docs) {
            assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs[0]);
            res.send(docs[0]);
            });
          client.close();

    });
    
});

app.listen(8080, function () {
    console.log('app running on port ' + 8080);
});