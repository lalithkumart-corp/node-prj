app1.directive('studentListDirective1', function(){
    var myLink = function ($scope, element, attrs) {
              function init(){
                  $scope.studentNames = ['Lalith', 'Ravi'];
                  bindEvents();
                  render();
              }
              function bindEvents(){
                $('.click-me-btn').off().on('click', function(e){
                    pushNewItem();
                    render();
                });
              }
              function pushNewItem(){
                   $scope.studentNames.push($.now());
              }
              function render(){
                $('.list-container').html('');
                debugger;
                _.each($scope.studentNames, function(value, index){
                    $('.list-container').append("<li>"+ value +"</li>");
                });
              }
              init();
          }
    return {
        template: '<div class="my-div"><input type="button" value="Update Scope" class="click-me-btn"/><div class="list-container"></div></div>',
        link: myLink
    }
});

app1.directive('studentListDirective2', function(){
     var myController = ['$scope', function ($scope) {
          function init(){
                  debugger;
                  $scope.studentNames = ['Jayachandran', 'Saravanan'];
                  bindEvents();
                  render();
              }
              function bindEvents(){
                $('.click-me-btn2').off().on('click', function(e){
                    pushNewItem();
                    render();
                });
              }
              function pushNewItem(){
                   $scope.studentNames.push($.now());
              }
              function render(){
                $('.item-list-container').html('');
                debugger;
                _.each($scope.studentNames, function(value, index){
                    $('.item-list-container').append("<li>"+ value +"</li>");
                });
              }
              init();
      }];
    return {
        template: '<div class="my-div2"><input type="button" value="Update Scope" class="click-me-btn2"/><div class="item-list-container"></div></div>',
        controller: myController
    }
});
app1.directive('studentListDirective3', function(){
    var aController = function ($scope) {
          function init(){
                  $scope.studentNames = ['Sendhil', 'Gowndamani'];
                  bindEvents();
                  render();
              }
              function bindEvents(){
                $('.click-me-btn3').off().on('click', function(e){
                    pushNewItem();
                    render();
                });
              }
              function pushNewItem(){
                   $scope.studentNames.push($.now());
              }
              function render(){
                $('.super-market-container').html('');
                _.each($scope.studentNames, function(value, index){
                    $('.super-market-container').append("<li>"+ value +"</li>");
                });
              }
              init();
      };
    return {
        restrict : "C",
        template: '<div class="my-div3"><input type="button" value="Update Scope" class="click-me-btn3"/><div class="super-market-container"></div></div>',
        controller: aController
    }
});

app1.directive('studentListDirective4', function(){
    var aController = function ($scope) {
            var $this = this; 
            function init(){
                  $this.studentNames = ['Vadivelu', 'Sherlock Holmes'];
                  bindEvents();
                  render();
              }
              function bindEvents(){
                $('.click-me-btn4').off().on('click', function(e){
                    pushNewItem();
                    render();
                });
              }
              function pushNewItem(){
                   $this.studentNames.push($.now());
              }
              function render(){
                $('.new-actor-container').html('');
                _.each($this.studentNames, function(value, index){
                    $('.new-actor-container').append("<li>"+ value +"</li>");
                });
              }
              init();
      };
    return {
        restrict : "C",
        template: '<div class="my-div4"><input type="button" value="Update my Object" class="click-me-btn4"/><div class="new-actor-container"></div></div>',
        controller: aController
    }
});

app1.directive('studentListDirective5', function(){
    return {
        restrict : "M",
        replace : true,
        template: '<h1>Hi, Hello world!</h1>'
    }
});