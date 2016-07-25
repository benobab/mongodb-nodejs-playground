// Retrieve
var MongoClient = require('mongodb').MongoClient;
var sizeToMatch = process.argv[2];

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  if(err) {
    console.log("Error");
    db.close();
    return;
  }
  db.collection('prices',function(err,collection){
    if(err){
      console.log(err);
      db.close();
      return;
    }
    collection.aggregate([{$match : {size:sizeToMatch}},{$group:{_id:'total',total:{$avg:'$price'}}}]).toArray(function(err,data){
      if(err){
        console.log(err);
        db.close();
        return;
      }
      console.log(Number(data[0]["total"]).toFixed(2));
      db.close();
    });
  });
});