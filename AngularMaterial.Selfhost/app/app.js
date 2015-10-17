
angular.module('myApp', ['ngRoute','ngMaterial'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('deep-orange');
    });

angular.module('myApp').
  config(['$routeProvider', function ($routeProvider) {
    $routeProvider
     .when('/', {
       templateUrl: 'app/partials/home.html',
       controller: 'HomeController'
     })
    .when('/home', {
        templateUrl: 'app/partials/home.html',
        controller: 'HomeController'
    })
    .when('/signup', {
        templateUrl: 'app/partials/profile.html',
        controller: 'ProfileController'
    })
    .otherwise({ redirectTo: '/' });

  }]);

angular.module('myApp')
  .factory('myService', function ($http) {

    var serv = {
     
      project: {},
      repo: {}

    };


    return serv;

  });