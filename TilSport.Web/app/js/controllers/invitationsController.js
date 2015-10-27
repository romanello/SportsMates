'use strict';
angular.module('myApp')
  .controller('InvitationsController', function ($scope, $http, $location, $mdDialog) {

    $scope.m = {};
    
    $scope.m.sports = [
      {
        imageUrl: 'app/img/sports/futebol.png',
        sport: 'Football',
        details: 'Sunday at 12:00, Sandnes kunstgress'
      },
      {
        imageUrl: 'app/img/sports/ciclismo-de-estrada.png',
        sport: 'Cycling',
        details: 'Next Saturday at 8:00, from Stavanger center to Egersund'
      }

    ];


  });