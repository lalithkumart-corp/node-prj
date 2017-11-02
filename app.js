var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var ejs = require('ejs')
var port = 8080;

var db = require('./database/main');

app.set('view engine', 'ejs');

app.get('/', function(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(fs.readFileSync("./pages/index.html"));
    response.end();
});

app.use(express.static(__dirname + '/public'));

var io = require('socket.io').listen(app.listen(port));

// io.sockets.on("connection",function(socket){
//     socket.emit("connect");
//     socket.on('fetch-results', function(data){
//         io.sockets.emit('results-fetched');
//     });
// });

io.sockets.on('connection', require('./core/mysocket').socketConnection);

