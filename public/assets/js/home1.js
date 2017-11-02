var gs = gs || {};
gs.home = {
    init: function(){
        this.initSocket();
        this.bindEvents();
    },
    initSocket: function(){
        var socket = io();
    },
    bindEvents: function(){
        $('.clickme').off().on('click', function(e){
            alert('Clicked me!');
        });
        $('.trigger-api').off().on('click', function(e){
            var data = {};
            $.get('/api/userlist', data, function(data){
            });
        });
    }
}
$(document).ready(function(e){
    gs.home.init();
});