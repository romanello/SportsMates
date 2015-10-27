'use strict';
angular.module('myApp')
  .controller('SportDialogController', function($scope, $http, $location, $mdDialog) {

    $scope.m = {};

    $scope.m.sports = [
      {
        id: 1,
        icon: 'baseball4.svg',
        name: 'Baseball',
      },
      {
        id: 2,
        icon: 'basket.svg',
        name: 'Basketball',
      },
      {
        id: 3,
        icon: 'bowling.svg',
        name: 'Bowling',
      },
      {
        id: 4,
        icon: 'exercising.svg',
        name: 'Fitness',
      },
      {
        id: 5,
        icon: 'footing.svg',
        name: 'Walking',
      },
      {
        id: 6,
        icon: 'glove.svg',
        name: 'Boxing',
      }, {
        id: 7,
        icon: 'golfer.svg',
        name: 'Golf',
      }, {
        id: 8,
        icon: 'hockey.svg',
        name: 'Hockey',
      }, {
        id: 9,
        icon: 'pocker.svg',
        name: 'Pocker',
      }, {
        id: 10,
        icon: 'racket.svg',
        name: 'Table tennis',
      }, {
        id: 11,
        icon: 'riding.svg',
        name: 'Cycling',
      }, {
        id: 12,
        icon: 'rings.svg',
        name: 'Athletics',
      }, {
        id: 13,
        icon: 'wind1.svg',
        name: 'Sailing',
      }, {
        id: 14,
        icon: 'silhouette1.svg',
        name: 'Swimming',
      }, {
        id: 15,
        icon: 'soccer5.svg',
        name: 'Soccer',
      }, {
        id: 16,
        icon: 'sportive.svg',
        name: 'Heavy lifting',
      }, {
        id: 17,
        icon: 'sports11.svg',
        name: 'Badminton',
      }, {
        id: 18,
        icon: 'sports12.svg',
        name: 'Skating',
      }, {
        id: 19,
        icon: 'tennis3.svg',
        name: 'Tennis',
      }
    ];

    $scope.querySearch = function(query) {
      var results = query ? _.filter($scope.m.sports, filterSports) : $scope.m.sports;
      //var deferred;
      //if (self.simulateQuery) {
      //  deferred = $q.defer();
      //  $timeout(function() { deferred.resolve(results); }, Math.random() * 1000, false);
      //  return deferred.promise;
      //} else {
      //  return results;
      //}
      return results; 
      
      function filterSports(sport) {
          return (angular.lowercase(sport.name).indexOf(angular.lowercase(query)) >= 0);
      }
    };
    
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.save = function() {
      $mdDialog.cancel('save');
    };

  });
