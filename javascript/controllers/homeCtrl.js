var app = angular.module('personalSite');

app.controller('homeCtrl', function($scope, $location, $anchorScroll) {

   $(function() {
      $('#dropdown-menu').click(function() {
        console.log('clicked')
        let navbarMenu = $('#navbar-collapse-menu');
        navbarMenu.on('click', 'li', null, function() {
          navbarMenu.collapse('hide');
        });
      });

      $('#portfolio-item').click(function() {
        console.log('clicked portfolio')
        $location.hash('projects');
        $anchorScroll();
        let navbarMenu = $('#navbar-collapse-menu');
        navbarMenu.on('click', 'li', null, function() {
          navbarMenu.collapse('hide');
        });
      });
    });

  $scope.scrollTo = function() {
   
  }

  $scope.collapseNavbarMenu = function () {
    /* navbar menu will collapse when click on link in menu */
     
  }
});

app.service('Contact', function($http) {
  this.submit = function(contact) {
    return $http.post('https://mandrillapp.com/api/1.0/messages/send.json', contact);
  };
});

app.directive("ngMobileClick", [function () {
    return function (scope, elem, attrs) {
        elem.bind("touchstart click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            scope.$apply(attrs["ngMobileClick"]);
        });
    }
}])
