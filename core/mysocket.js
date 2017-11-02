var resultModel = require('../api/results');
exports = module.exports;
exports.socketConnection = function(socket){
    socket.emit("connect");
    socket.on('fetch-results', function(data){
        resultModel.getResults(function(myResult){
            socket.emit('results-fetched', myResult);
        });            
    });
};