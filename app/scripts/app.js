'use strict';

/**
 * @ngdoc overview
 * @name deliverOnTheGoApp
 * @description
 * # deliverOnTheGoApp
 *
 * Main module of the application.
 */
angular
  .module('deliverOnTheGoApp', [
    'ngCookies',
    'ngRoute',
    'duScroll',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/driver', {
        templateUrl: 'views/driver.html',
        controller: 'DriverCtrl'
      })
      .when('/pickupHome', {
        templateUrl: 'views/pickuphome.html',
        controller: 'PickuphomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
