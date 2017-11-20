var app1 = angular.module('app1', ['ui.router', 'tutorialModule']);

app1.config(['$urlRouterProvider','$stateProvider', function config($urlRouterProvider,$stateProvider) {
    $urlRouterProvider.otherwise('/tutorial');
    $stateProvider.state('tutorial',{
        url:'/tutorial',
        controller:'tutorialController',
        templateUrl:'assets/templates/tutorial.html',
        sticky: true
    }).state('contactus', {
        url: '/contactus',
        templateUrl:'assets/templates/contactus.html',
        sticky: true
    })
}]);

