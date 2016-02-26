var app = angular.module('personalSite');

app.controller('homeCtrl', function($scope, $location, $anchorScroll) {
  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
  }
});