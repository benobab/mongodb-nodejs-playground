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
    collection.count({ age : { $gt: Number(ageToBeGreaterThan) } },function(err,count){
      if(err){
        console.log(err);
        db.close();
        return;
      }
      console.log(count);
      db.close();
    });
  });
});