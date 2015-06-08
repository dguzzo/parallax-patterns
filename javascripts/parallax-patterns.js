(function () {
  angular.module('parallax', [])
  .directive('backgrounds', function ($timeout) {
    return {
      restrict: 'E',
      templateUrl: 'templates/backgrounds.html',
      controller: 'BackgroundsController'
    }
  });
})();