angular.module('parallax')
.controller('BackgroundsController', ["$scope", function($scope) {
  var cycleLength = 4;

  $scope.backgroundCount = 14;

  // http://stackoverflow.com/a/16824944/626369
  $scope.getNumber = function(num) {
    return new Array(num);   
  };

  // determine if we're at a certain part of the cycle. [for determining the DOM components of parallax group]
  $scope.indexCycleMod = function (index, remainder) {
    return ((index + 1) % cycleLength === remainder);
  };
    
}]);
