var mongoDB = require('mongodb');
var mongoose = require('mongoose');


var dbHost = 'mongodb://localhost:27017/lalith-database';
mongoose.connect(dbHost);

var skillCollection = mongoose.model('skills', new mongoose.Schema({}));

skillCollection.find({}, function(err, result){
    console.log('Got collection data...!');
    if(err)
        throw err;
    console.log(result);
});