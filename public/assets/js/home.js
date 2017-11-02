var gs = gs || {};
var socket;
gs.home = {
    init: function(){
        this.initSocket();
        this.bindEvents();
    },
    initSocket: function(){
        socket = io.connect(window.location.host);
        debugger;
        socket.on('connect', function(){
            console.log('Socket connections accomplished!');
        });
    },
    bindEvents: function(){    
        $('.fetch-and-render').off().on('click', function(e){        
            socket.emit('fetch-results', 'messages');
            socket.on('results-fetched', function(data){
                console.log('Results Fetced : ', data);
                gs.home.renderResults(data[0]);
            });
        });
    },
    renderResults: function(data){
        //var htmlstr = new EJS({url: '../../../views/templates/results.ejs'}).render(data);
        //var htmlstr = ejs.render('<b><%= data.bill_series %></b>', {data: data});
        
        // var htmlstr = ejs.render(myTemplate.results,  {data: data});
        // var htmlstr = ejs.renderFile(myTemplate.results, function(err, data) {
        //     debugger;
        //     console.log(err || data)
        // });
        
        var htmlstr = ejs.render(myTemplate.results, {data: data});
        $('.result-container').html(htmlstr);
    }
}
$(document).ready(function(e){
    gs.home.init();
});