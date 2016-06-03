var app = angular.module('personalSite');

app.controller('homeCtrl', function($scope, $location, $anchorScroll) {

  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
  }

  $scope.collapseNavbarMenu = function () {
    console.log('in collapse navbar menu');
  }

  $scope.submitContactInfo = function () {};
});

app.service('Contact', function($http) {
  this.submit = function(contact) {
    return $http.post('https://mandrillapp.com/api/1.0/messages/send.json', contact);
  };
});
