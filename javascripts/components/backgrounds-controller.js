angular.module('parallax')
.controller('BackgroundsController', ["$scope", function($scope) {
  $scope.backgroundCount = 14;
  $scope.cycleLength = 4;

  // http://stackoverflow.com/a/16824944/626369
  $scope.getNumber = function(num) {
    return new Array(num);   
  };
  
}]);
