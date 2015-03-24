'use strict';

/**
 * @ngdoc function
 * @name deliverOnTheGoApp.controller:PickuphomeCtrl
 * @description
 * # PickuphomeCtrl
 * Controller of the deliverOnTheGoApp
 */
angular.module('deliverOnTheGoApp')
  .controller('PickuphomeCtrl', function ($scope) {
    $scope.showSearch = true;
    $scope.checkBoxList = {
        liftWeight: '',
        sameDay: '',
      perish:'',
      checks:''
    }
    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };



    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.openPickup = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.openedPickup = true;
    };
    $scope.openDeliver = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.openedDeliver = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
  });
