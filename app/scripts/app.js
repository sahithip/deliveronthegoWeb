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
    'ui.bootstrap',
    'ui.map',
    'ngAutocomplete'
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
        templateUrl: '../views/needdriver.html',
        controller: 'DriverCtrl'
      })
      .when('/pickupHome', {
        templateUrl: 'views/pickuphome.html',
        controller: 'PickuphomeCtrl'
      })
      .when('/deliver', {
        templateUrl: 'views/deliver.html',
        controller: 'DeliverCtrl'
      })
      .when('/deliverHome', {
        templateUrl: 'views/deliverhome.html',
        controller: 'DeliverhomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
