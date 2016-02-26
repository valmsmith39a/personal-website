var app = angular.module('personalSite');

app.controller('homeCtrl', function($scope, $location, $anchorScroll) {
  console.log('homeCtrl');
  $scope.scrollTo = function(id) {
    console.log('scrollTo, id: ', id);
    $location.hash(id);
    console.log($location.hash(id));
    $anchorScroll();
  }
});