var connection = require('../database/main')

exports = module.exports;

exports.getResults = function(callback){
    connection.query('SELECT * FROM billseries',function(err,rows){
        if(err) throw err;
       // console.log('Data received from Db:\n');
        console.log(rows);
        callback(rows);
    });
};