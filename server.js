var express = require('express');
var ejs = require('ejs');
var bodyParser = require("body-parser");

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017';

var path = require('path');
var object = require('./js/objectForTemplate');

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

// -----global variables-------------------------------------

var dateGlobal ;
var cinemaGlobal;
var cinemaGlobalNum;
var hallGlobal;

var coordsGlobal;

var hallNumGlobal, timeNumGlobal;



// -------------------------------------------------------------

app.post('/book', function (req, res) {
    cinemaGlobal = req.body.cinema;

  var date = req.body.date;
  var cinema = req.body.cinema;

  console.log(date);
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    
    var db = client.db('Cinemaholics');
    var collection = db.collection('dates');
    collection.find({name:date}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");

        // insert template-----------------------------
        if (docs.length == 0){
            dateGlobal = object.template(date);
            MongoClient.connect(url, function(err, client) {
                assert.equal(null, err);
                console.log("Connected successfully to server");
               
                const db = client.db('Cinemaholics');
                const collection = db.collection('dates');
                
                collection.insertOne(object.template(date), function(err, result) {
                    assert.equal(err, null);
                   
                    console.log("Inserted  document into the collection");
                    });
                    client.close();
                  
                });
                var cinemaMassive =object.template(date).cinema;
                var cinemaSend;
                cinemaMassive.forEach(function(item, i, arr) {
                    if (item.name == cinema) {
                        cinemaSend = item;
                        cinemaGlobalNum = i;

                    }
                });
                res.send(cinemaSend);
        } else {
            console.log('exist');
            dateGlobal = docs[0];
            console.log(dateGlobal.cinema[0].halls[1].seanse[0].coordsBook);
            var cinemaSend2;
                docs[0].cinema.forEach(function(item, i, arr) {
                    if (item.name == cinema) {
                        cinemaSend2 = item;
                        cinemaGlobalNum = i;
                    }
                });
           
            res.send(cinemaSend2);
        } 

        //--------------------------------------------------
        
        });
      client.close();

    });

});
app.post('/hall', function (req, res) {

   
    hallNumGlobal = req.body.hallNum;
    
    timeNumGlobal = req.body.timeNum;
    hallGlobal = req.body.hall;
    coordsGlobal = dateGlobal.cinema[cinemaGlobalNum].halls[hallNumGlobal].seanse[timeNumGlobal].coordsBook;

    res.send("0k");
   

 
    
});
app.get('/hall', function (req, res) {
  
 
    coordsJson = JSON.stringify(coordsGlobal);
    
   
    res.render('hall', {
        hall : hallGlobal,
        coords : coordsJson,
        date: dateGlobal.name,
        cinema: cinemaGlobal
        
    });
    
   
    
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

app.post('/hall-send', function (req, res) {
  
var coordsBook = req.body;
console.log(coordsBook);
dateGlobal.cinema[cinemaGlobalNum].halls[hallNumGlobal].seanse[timeNumGlobal].coordsBook = coordsBook;



var newDateCinema = dateGlobal.cinema ;
console.log(newDateCinema);


MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    
    var db = client.db('Cinemaholics');
    var collection = db.collection('dates');
    collection.updateOne({ name : dateGlobal.name }
        , { $set: { cinema : newDateCinema } },
        
        function(err, result) {
        assert.equal(err, null);
        console.log("Updated the document ");
  
      });
      client.close();

});

res.send(newDateCinema);
    
});

app.listen(8080, function () {
    console.log('app running on port ' + 8080);
    // console.log(object.template('k'));
   
});