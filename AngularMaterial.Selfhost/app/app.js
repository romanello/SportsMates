
var module = angular.module('myApp', ['ngRoute', 'ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('deep-orange');
  });

module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
     .when('/', {
       templateUrl: 'app/partials/home.html',
       controller: 'HomeController'
     })
    .when('/home', {
        templateUrl: 'app/partials/home.html',
        controller: 'HomeController'
    })
    .when('/profile', {
        templateUrl: 'app/partials/profile.html',
        controller: 'ProfileController'
    })
    .otherwise({ redirectTo: '/' });

  }]);

module.factory('myService', function ($http) {

    var serv = {
     
      project: {},
      repo: {}

    };


    return serv;

});

module.factory('facebookService', function ($q) {
  return {
    getMyLastName: function() {
      var deferred = $q.defer();
      FB.api('/me', {
        fields: 'last_name'
      }, function(response) {
        if (!response || response.error) {
          deferred.reject('Error occured');
        } else {
          deferred.resolve(response);
        }
      });
      return deferred.promise;
    }
  };
});


