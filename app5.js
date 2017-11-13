var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var port = 8080;

//-------------WAY-1------------------//
//var io = require('socket.io').listen(app.listen(port));

//-------------WAY-2------------------//
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
app.listen(port);



// START: --------Use of next()--------------
app.get('/', function(request,response, next){
    console.log('Hey, an URl (without any path) is hitted. Ex: http://localhost:8080/ ');
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(fs.readFileSync("./pages/index.html"));
    response.end();
    console.log('-');
    next(); // I am transferring the control to another listener
});

app.get('/', function(request, response){
    console.log('Hey, an URl (without any path) is hitted. Ex: http://localhost:8080/ ');
});

// END: --------Use of next()--------------


//This can be usefull for logger, like my app started.
http.listen(app.get('port'), function(){
    if (process.send) process.send('online');
    console.log('My App started');
});


app.use(express.static(__dirname + '/public'));

io.sockets.on('connection', require('./core/mysocket').socketConnection);