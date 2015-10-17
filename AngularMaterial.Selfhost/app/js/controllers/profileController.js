'use strict';
angular.module('myApp')
  .controller('ProfileController', function ($scope, $http, $location, $mdDialog) {

    $scope.m = {};
    $scope.header = "Signup";

    $scope.showAlert = function(ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      // Modal dialogs should fully cover application
      // to prevent interaction outside of dialog
      $mdDialog.show(
        $mdDialog.alert()
        .parent(angular.element(document.querySelector('#content'))) // also try #databaseConfigurationTab
        .clickOutsideToClose(true)
        .title('Database Connection')
        .content('A connection was successfully made to the database!')
        .ariaLabel('Alert Dialog Demo')
        .ok('OK')
        .targetEvent(ev)
      );
    };

    $scope.nextTab = function (nextIndex) {
      $scope.m.tabIndex = nextIndex;
    };
  });