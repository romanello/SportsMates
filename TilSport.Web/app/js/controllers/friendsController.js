'use strict';
angular.module('myApp')
  .controller('FriendsController', function ($scope, $http, $location, $mdDialog) {

    $scope.m = {};
    
    $scope.m.friends = [
      {
        faceUrl: 'app/img/faces/jt.jpg',
        name: 'Jan Tore',
        lastMessage: 'Are you coming tonight for basket?'
      },
      {
        faceUrl: 'app/img/faces/roman.jpg',
        name: 'Roman',
        lastMessage: 'What do you think about playing golf tomorrow?'
      },
      {
        faceUrl: 'app/img/faces/anna.jpg',
        name: 'Anna',
        lastMessage: 'Where can I find a good yoga club in Storhaug?'
      }

    ];


  });