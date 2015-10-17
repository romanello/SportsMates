'use strict';
angular.module('myApp')
  .controller('ApplicationController', function ($scope, $http, $location, $mdSidenav) {
      $scope.toggleSidenav = function (menuId) {
          $mdSidenav(menuId).toggle();
      };
  });

