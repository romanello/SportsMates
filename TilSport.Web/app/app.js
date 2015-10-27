Error.stackTraceLimit = 50;

var module = angular.module('myApp', ['ngRoute', 'ngMaterial', 'uiGmapgoogle-maps'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('deep-orange');
  }).config(['$mdIconProvider', function ($mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  }]);

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
    }).when('/activities', {
      templateUrl: 'app/partials/activities.html',
      controller: 'ActivitiesController'
    }).when('/invitations', {
      templateUrl: 'app/partials/invitations.html',
      controller: 'InvitationsController'
    }).when('/friends', {
      templateUrl: 'app/partials/friends.html',
      controller: 'FriendsController'
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


