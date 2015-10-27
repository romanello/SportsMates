'use strict';
angular.module('myApp')
  .controller('ApplicationController', function($scope, $http, $location, $mdSidenav, $route) {
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };

    $scope.isActive = function (path) {
      if ($route.current && $route.current && $route.current.loadedTemplateUrl) {
        return $route.current.loadedTemplateUrl.indexOf(path) != -1;
      }
      return false;
    };
  });