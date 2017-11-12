var gs = gs || {};
var socket;
gs.home = {
    init: function(){
        this.initSocket();
        this.bindEvents();
    },
    initSocket: function(){
        socket = io.connect(window.location.host);
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
        $('.submit-btn').off().on('click', function(e){
            var tt = {
                arg1: $('.an-arg1').val(),
                arg2: $('.an-arg2').val()
            };
            socket.emit('do-calculation', tt);
            socket.on('calculation-done', function(data){
                $('.myresult').html(data.result);
            });
        });

        $('.get-user-name').off().on('click', function(e){
            $.ajax({
                url: '/user',
                type: 'GET',
                data: {fetch: 'username'},
                success: function(data){
                    successCallback(data);
                },
                error: function(data){
                    errorCallback(data);
                }
            });
            function successCallback(data){
                $('.res-user-name').html(data.result);
            }
            function errorCallback(data){
                alert('Error in ajax');
            }
        });

        $('.get-user-name-post').off().on('click', function(e){
            $.ajax({
                url: '/user',
                type: 'POST',
                data: {fetch: 'username'},
                success: function(data){
                    successCallback(data);
                },
                error: function(data){
                    errorCallback(data);
                }
            });
            function successCallback(data){
                $('.res-user-name-post').html(data.result);
            }
            function errorCallback(data){
                alert('Error in ajax');
            }
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