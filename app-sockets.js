/**
 * Socket tutorial
 */

var express = require('express');//Importing Express
var app = express();//Getting App From Express
var fs = require('fs');//Importing File System Module To Access Files
var path = require('path');
const port = 8080;//Creating A Constant For Providing The Port

//Routing Request : http://localhost:port/
app.get('/',function(request,response){  
  response.writeHead(200,{"Content-Type":"text/html"}); //Telling Browser That The File Provided Is A HTML File
  response.write(fs.readFileSync("./pages/index.html")); //Passing HTML To Browser  
  response.end(); //Ending Response
});

app.use(express.static(__dirname + '/public'));//Routing To Public Folder For Any Static Context

console.log("Server Running At:localhost:"+port);

var io = require('socket.io').listen(app.listen(port));//Telling Express+Socket.io App To Listen To Port

io.sockets.on("connection",function(socket){
    socket.emit("Start_Chat");
});