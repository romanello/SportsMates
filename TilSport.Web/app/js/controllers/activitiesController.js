'use strict';
angular.module('myApp').controller('ActivitiesController', function($scope, $http, $location, $mdDialog) {

    $scope.m = {};
    
    $scope.m.sports = [
      {
        imageUrl: 'app/img/sports/tenis-de-mesa.png',
        sport: 'Table tennis',
        details: 'Tomorrow at 18:00, Kirkegata 8 Stavanger',
        statusIcon: 'done'
      },
      {
        imageUrl: 'app/img/sports/futebol.png',
        sport: 'Football',
        details: 'Saturday at 12:00, Sandnes kunstgress',
        statusIcon: 'warning'
      },
      {
        imageUrl: 'app/img/sports/golfe.png',
        sport: 'Golf',
        details: 'Sunday at 10:00, SolaGK',
        statusIcon: 'critical'
      },
      {
        imageUrl: 'app/img/sports/badminton.png',
        sport: 'Badminton',
        details: '13th November at 19:00, Action Ball',
        statusIcon: 'critical'
      }

    ];


});
