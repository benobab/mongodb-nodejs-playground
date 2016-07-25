var firstName = process.argv[2];
var lastName = process.argv[3];

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  if(err) {
    console.log("Error");
    db.close();
    return;
  }
  db.collection('docs',function(err,collection){
    if(err){
      console.log(err);
      db.close();
      return;
    }
    var record = {"firstname":firstName,"lastname":lastName};
    //Insert the record here
    collection.insert(record,function(err,data){
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