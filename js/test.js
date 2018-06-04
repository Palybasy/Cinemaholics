const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db('Cinemaholics');
  const collection = db.collection('dates');
  
  collection.insertOne([
      

   ], function(err, result) {
    console.log("Inserted  documents into the collection");
    });
    client.close();
  
});

