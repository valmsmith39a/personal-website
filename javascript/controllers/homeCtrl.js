var app = angular.module('personalSite');

app.controller('homeCtrl', function($scope, $location, $anchorScroll) {

  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
  }

  $scope.collapseNavbarMenu = function () {
    console.log('in collapse menu')
    /* navbar menu will collapse when click on link in menu */
    $(function() {
      let navbarMenu = $('#navbar-collapse-menu');

      navbarMenu.on('click', 'a', null, function() {
        navbarMenu.collapse('hide');
      });
    });
  }

});

app.service('Contact', function($http) {
  this.submit = function(contact) {
    return $http.post('https://mandrillapp.com/api/1.0/messages/send.json', contact);
  };
});
