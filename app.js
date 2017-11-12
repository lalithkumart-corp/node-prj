var port = 8080;
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var ejs = require('ejs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var io = require('socket.io').listen(app.listen(port));

var db = require('./database/main'); //sql db
var mdb = require('./database/mongo-main'); //mongo db


app.set('view engine', 'ejs');

app.use(bodyParser());
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(fs.readFileSync("./pages/index.html"));
    response.end();
});

app.all('/docalculation', function(req, res){
    var params = req.body;
    var resultVal = params.firstNumber + params.secondNumber;
    res.setHeader('Content-Type', 'application/json');
    res.send({status: 'success', result: resultVal });
});

app.get('/user', function(req, res){
    console.log();
    var params = req.query;
    if(params.fetch == 'username')
        returnVal = 'Lalith Kumar';
    res.send({status: 'success', result: returnVal});
});

app.post('/user', function(req, res){
    console.log();
    var params = req.body;
    if(params.fetch == 'username')
        returnVal = 'Lalith Kumar';

    res.send({status: 'success', result: returnVal});
});

// io.sockets.on("connection",function(socket){ 
//     socket.emit("connect");
//     socket.on('fetch-results', function(data){
//         io.sockets.emit('results-fetched');
//     });
// });

io.sockets.on('connection', require('./core/mysocket').socketConnection);

