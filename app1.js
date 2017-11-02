var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(req.url);
//     res.end();
// }).listen(8080);


// function handleRequests(req, res) { // handle sending requests and returning responses  
//   res.end('Hello world!'); // return string
// }
// var server = http.createServer(handleRequests); // create the server
// server.listen(8080, function() { // start server and listen on port x
//   console.log('Listening on port 8080');
// });


var express = require('express');
var path = require('path');
var app = express();
var port = 8080;

//var mydb = require('database/db.js');

app.set('view engine', 'ejs');
//app.use(express.static(__dirname+'/public'));

var db = require('./database/db');
/* ROUTING based on url path. Rendering the page with ejs templating engine. 

// route our app
app.get('/', function(req, res) { 
  // res.send('hello worldvcv!');
  console.log(__dirname);

    var drinks = [
        { name: 'Bloody Mary', value: 3 },
        { name: 'Martini', value: 5 },
        { name: 'Scotch', value: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('index', {
        drinks: drinks,
        tagline: tagline
    });

});
app.get('/about', function(req, res) {
  // res.send('hello worldvcv!');
  console.log(__dirname);
  res.sendFile(path.join(__dirname, 'about'));
});*/


app.get('/*', function(req, res){
  var urlPath = req.url;
  //Its requesting for static files
  if(urlPath.indexOf('public') !== -1){
    res.sendFile(__dirname + urlPath);
  }else if(urlPath.indexOf('api') !== -1){
    var myController = urlPath.substr(5); //lenght of '/api' is 5
    res.json({0: 'lalith'});
  }else{
    var matches = urlPath.match(/([a-z-]*[.](v|html))/g) || [];
    if(matches[0] !== '')
      res.sendFile(path.join(__dirname + '/pages/', matches[0]));
    else
      res.send('No Files found in server...');
    }
});

// start the server
app.listen(port, function() {
  console.log('app started...');
});