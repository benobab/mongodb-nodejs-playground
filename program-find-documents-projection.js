// Retrieve
var MongoClient = require('mongodb').MongoClient;
var ageToBeGreaterThan = process.argv[2];

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  if(err) {
    console.log("Error");
    db.close();
    return;
  }
  db.collection('parrots',function(err,collection){
    if(err){
      console.log(err);
      db.close();
      return;
    }
    collection.find({ age : { $gt: Number(ageToBeGreaterThan) } },{age:1,name:1,_id:0})
    .toArray(function(err,documents){
      if(err){
        console.log(err);
        db.close();
        return;
      }
      console.log(documents);
      db.close();
    });
  });
});