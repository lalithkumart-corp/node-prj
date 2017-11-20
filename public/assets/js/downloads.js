var gs = gs || {};
gs.download = {
    init: function(){
        gs.download.bindEvents();
    },
    bindEvents: function(){
        $('.get-zip-file').off().on('click', function(e){
            $.ajax({
                url: '/getzipfile',
                type: 'GET',
                data: {},
                success: function(data){
                    successCallback(data);
                },
                error: function(data){
                    errorCallback(data);
                }
            });
            function successCallback(data){
                debugger;
            }
            function errorCallback(data){
                alert('Error in ajax');
            }
        });
    }
}
$(document).ready(function(e){
    gs.download.init();
});