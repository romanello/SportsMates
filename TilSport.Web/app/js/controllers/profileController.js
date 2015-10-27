'use strict';
angular.module('myApp')
  .controller('ProfileController', function($scope, $http, $location, $mdDialog) {

    $scope.m = {};
    
    $scope.nextTab = function(nextIndex) {
      $scope.m.tabIndex = nextIndex;
    };

    $scope.showSportDialog = function (ev) {
      $mdDialog.show({
        controller: 'SportDialogController',
        templateUrl: 'app/partials/sportDialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
      .then(function (answer) {
        $scope.status = 'Information was saved.';
      }, function () {
        $scope.status = 'You cancelled the dialog.';
      });
    };

    $scope.m.days = [];
    for (var i = 1; i < 32; i++) {
      $scope.m.days.push(i);
    }

    $scope.m.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    $scope.m.years = [];
    for (i = 2014; i > 1914; i--) {
      $scope.m.years.push(i);
    }
    
    $scope.m.sports = [
      {
        imageUrl: 'app/img/sports/basquetebol.png',
        sport: 'Basketball',
        skill: 'Intermediate level'
      },
      {
        imageUrl: 'app/img/sports/futebol.png',
        sport: 'Football',
        skill: 'Professional level'
      },
      {
        imageUrl: 'app/img/sports/tenis.png',
        sport: 'Tennis',
        skill: 'Beginner level'
      }
    ];

    $scope.m.schedule = [
      {
        dayOfWeek: 'Monday',
        available: 'evening',
      },
      {
        dayOfWeek: 'Tuesday',
        available: 'not',
      },
      {
        dayOfWeek: 'Wednesday',
        available: 'evening',
      },
      {
        dayOfWeek: 'Thursday',
        available: 'not',
      },
      {
        dayOfWeek: 'Friday',
        available: 'not',
      },
      {
        dayOfWeek: 'Saturday',
        available: 'allDay',
      },
      {
        dayOfWeek: 'Sunday',
        available: 'allDay',
      }

    ];

  });

  function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
      $mdDialog.hide();
    };
    $scope.cancel = function () {
      $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
      $mdDialog.hide(answer);
    };
  }