var dbName = process.argv[2];
var collectionName = process.argv[3];
var idToRemove = process.argv[4];

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/"+dbName, function(err, db) {
  if(err) {
    console.log("Error");
    db.close();
    return;
  }
  db.collection(collectionName,function(err,collection){
    if(err){
      console.log(err);
      db.close();
      return;
    }
    //Update the record here
    collection.remove({_id: idToRemove},function(err,data){
       if(err){
          console.log(err);
          db.close();
          return;
        }
        console.log(JSON.stringify(data));
        db.close();
    });
  });
});