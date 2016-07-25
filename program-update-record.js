var dbName = process.argv[2];

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/"+dbName, function(err, db) {
  if(err) {
    console.log("Error");
    db.close();
    return;
  }
  db.collection('users',function(err,collection){
    if(err){
      console.log(err);
      db.close();
      return;
    }
    //Insert the record here
    collection.update({name: "Tina"},{$set:{age:40}},function(err,data){
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