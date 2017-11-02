var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var port = 8080;

// var server = require('http').createServer(app);
// var io = require('socket.io')(server);
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/*', function(req, res){
  var urlPath = req.url;
  
  if(urlPath.indexOf('public') !== -1){
    res.sendFile(__dirname + urlPath);
  }else if(urlPath.indexOf('api') !== -1){
    var myController = urlPath.substr(5); //lenght of '/api' is 5
    res.json({0: 'lalith'});
  }else{
    var matches = urlPath.match(/([a-z-]*[.](v|html))/g) || [];
    if(matches[0] !== undefined && matches[0] !== '')
      res.sendFile(path.join(__dirname + '/pages/', matches[0]));
    else if(fs.existsSync(path.join(__dirname + urlPath))){
      res.sendFile(path.join(__dirname + urlPath));
    }else
      res.send('No Files found in server...');
    }
});

io.on('connection', function(socket){
  console.log('a user connected');
});
//io.listen(port);

// start the server
app.listen(port, function() {
  console.log('app started...');
});