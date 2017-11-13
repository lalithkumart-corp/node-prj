var app1 = angular.module('app1', []);
app1.directive('studentListDirective1', function(){
    return {
        template: '<h1>Hi, Hello world!</h1>'
    }
});
app1.directive('studentListDirective2', function(){
    return {
        template: '<h1>Hi, Hello world!</h1>'
    }
});
app1.directive('studentListDirective3', function(){
    return {
        restrict : "C",
        template: '<h1>Hi, Hello world!</h1>'
    }
});
app1.directive('studentListDirective4', function(){
    return {
        restrict : "M",
        replace : true,
        template: '<h1>Hi, Hello world!</h1>'
    }
});
app1.controller('ctrl1', function($scope){
    $scope.header = false;
    $scope.arrList = ['carbon', 'density'];
    $scope.students = [
        {
            name: 'lalith',
            project: 'knovel',
            role: 'Development',
            experience: '2'
        },
        {
            name: 'kumar',
            project: 'phoenix',
            role: 'Manager',
            experience: '1.5'
        }
    ];
});