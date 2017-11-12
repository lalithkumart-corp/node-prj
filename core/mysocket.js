var resultModel = require('../api/results');
exports = module.exports;
exports.socketConnection = function(socket){
    socket.emit("connect");
    socket.on('fetch-results', function(data){
        resultModel.getResults(function(myResult){
            socket.emit('results-fetched', myResult);
        });            
    });
    socket.on('do-calculation', function(data){
        console.log(data);
        var result = parseInt(data.arg1) + parseInt(data.arg2);
        socket.emit('calculation-done', {status: 'success', result: result});
    });
};