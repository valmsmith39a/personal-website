var app = angular.module('personalSite');

app.controller('homeCtrl', function($scope, $location, $anchorScroll) {
  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
  }

  $scope.submitContactInfo = function() {
    console.log('contact first name: ', $scope.contact);
    Contact.submit($scope.contact)
    .then(function(res) {
      console.log('successfully sent res is: ', res);
    });
  };
});

app.service('Contact', function($http) {
  this.submit = function(contact) {
    return $http.post('https://mandrillapp.com/api/1.0/messages/send.json', contact);
  };
});