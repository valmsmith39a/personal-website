'use strict';

var app = angular.module('personalSite',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {url:'/', templateUrl:'./partials/home.html', controller:'homeCtrl'})
  .state('blog', {url:'/blog', templateUrl:'./partials/blog.html', controller:'blogCtrl'})
  $urlRouterProvider.otherwise('/');
});
