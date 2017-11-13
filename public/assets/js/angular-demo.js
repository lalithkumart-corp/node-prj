var app1 = angular.module('app1', []);
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