/**
 * @desc: 
 *      - 'DIRECTIVE' + 'LINKS'
 *      - Directive identifier = 'ELEMENT' directive
 *      - working with 'SCOPE' variable (scope is commonly shared)    
 */
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
                _.each($scope.studentNames, function(value, index){
                    $('.list-container').append("<li>"+ value +"</li>");
                });
              }
              init();
          }
    return {
        template: '<div class="my-div"><input type="button" value="Update Scope" class="click-me-btn"/><span>(List from $scope.studentNames)</span><div class="list-container"></div></div>',
        link: myLink
    }
});

/**
 * @desc: 
 *      - 'DIRECTIVE' + 'CONTROLLER'
 *      - Directive identifier = 'ATTRIBUTE' directive
 *      - working with 'SCOPE' variable (scope is commonly shared)    
 */
app1.directive('studentListDirective2', function(){
     var myController = ['$scope', function ($scope) {
          function init(){
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
                _.each($scope.studentNames, function(value, index){
                    $('.item-list-container').append("<li>"+ value +"</li>");
                });
              }
              init();
      }];
    return {
        template: '<div class="my-div2"><input type="button" value="Update Scope" class="click-me-btn2"/><span>(List from $scope.studentNames)</span><div class="item-list-container"></div></div>',
        controller: myController
    }
});

/**
 * @desc: 
 *      - 'DIRECTIVE' + 'CONTROLLER'
 *      - Directive identifier = 'CLASS' directive
 *      - working with 'SCOPE' variable (scope is commonly shared)    
 */
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
        template: '<div class="my-div3"><input type="button" value="Update Scope" class="click-me-btn3"/><span>(List from $scope.studentNames)</span><div class="super-market-container"></div></div>',
        controller: aController
    }
});

/**
 * @desc: 
 *      - 'DIRECTIVE' + 'CONTROLLER'
 *      - Directive identifier = 'CLASS' directive
 *      - working with its own variable   
 *      - 
 */
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
        template: '<div class="my-div4"><input type="button" value="Update my Object" class="click-me-btn4"/><span>(List from my own controller...ie, Local Object inside controller)</span><div class="new-actor-container"></div></div>',
        controller: aController
    }
});


/**
 * @desc: 
 *      - 'DIRECTIVE' + 'CONTROLLER'
 *      - Directive identifier = 'CLASS' directive
 *      - working with a 'FACTORY' from outside    
 */
app1.directive('studentListDirective5', function(){
    var aController = function ($scope, studentDataFac) {
            function init(){
                  bindEvents();
                  render();
              }
              function bindEvents(){
                $('.click-me-btn5').off().on('click', function(e){
                    pushNewItem();
                    render();
                });
              }
              function pushNewItem(){
                   studentDataFac.addStudent($.now());
              }
              function render(){
                $('.new-students-container').html('');
                var lists = studentDataFac.getStudents();
                _.each(lists, function(value, index){
                    $('.new-students-container').append("<li>"+ value +"</li>");
                });
              }
              init();
      };
    return {
        restrict : "C",
        template: '<div class="my-div5"><input type="button" value="Update my Object" class="click-me-btn5"/><span>(List from factory named "studentDataFac")</span><div class="new-students-container"></div></div>',
        controller: aController
    }
});

/**
 * @desc: 
 *      - 'DIRECTIVE' + 'CONTROLLER'
 *      - Directive identifier = 'CLASS' directive
 *      - working with a 'FACTORY' from outside    
 */
app1.directive('studentListDirective6', function(){
    var aController = function ($scope, studentDataFac) {
            function init(){
                  bindEvents();
                  render();
              }
              function bindEvents(){
                $('.click-me-btn6').off().on('click', function(e){
                    pushNewItem();
                    render();
                });
              }
              function pushNewItem(){
                   studentDataFac.addStudent($.now());
              }
              function render(){
                $('.again-students-container').html('');
                var lists = studentDataFac.getStudents();
                _.each(lists, function(value, index){
                    $('.again-students-container').append("<li>"+ value +"</li>");
                });
              }
              init();
      };
    return {
        restrict : "C",
        template: '<div class="my-div6"><input type="button" value="Update my Object" class="click-me-btn6"/><span>(List from factory named "studentDataFac")</span><div class="again-students-container"></div></div>',
        controller: aController
    }
});


/**
 * @desc: 
 *      - 'DIRECTIVE'
 *      - Directive identifier = 'COMMENTS' directive
 */
app1.directive('studentListDirective7', function(){
    return {
        restrict : "M",
        replace : true,
        template: '<h1>Hi, Hello world!</h1>'
    }
});