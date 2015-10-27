'use strict';
angular.module('myApp')
  .controller('HomeController', function ($scope, $http, $location) {
    
      $scope.message = "Hello, world.";

      $scope.map = { center: { latitude: 58.9674463, longitude: 5.7535666 }, zoom: 14 };
      $scope.options = { scrollwheel: true };
      $scope.coords = [
        { id: 1, latitude: 58.9674463, longitude: 5.7535666, title: 'Basketball today at 20:30' },
        { id: 2, latitude: 58.965566, longitude: 5.744082, title: 'Soccer tomorrow at 21:00' },
        { id: 3, latitude: 58.969069, longitude: 5.756699, title: 'Volleyball next Tuesday at 19:00' },
        { id: 4, latitude: 58.964053, longitude: 5.760481, title: 'Tennis next Sunday at 18:30' }
      ];
  });