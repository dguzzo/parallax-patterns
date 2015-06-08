(function () {
  angular.module('parallax', [])
  .directive('backgrounds', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/backgrounds.html',
      controller: 'BackgroundsController'
    }
  })
  .directive('creditModal', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/credit-modal.html'
    }
  });
})();
