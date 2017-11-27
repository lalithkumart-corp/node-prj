//Need to resturcture codelines based on database connection close as well as other sections.

var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var db;
mongoClient.connect(url, function(err, database) {
  if (err) throw err;
  console.log("Database created!");
  database.collection("stud", function(err, result) {
      result.find().toArray(function(err, items) {
                 console.log(items);
             });

    database.close();
  });
});