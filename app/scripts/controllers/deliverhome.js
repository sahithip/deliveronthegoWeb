'use strict';

/**
 * @ngdoc function
 * @name deliverOnTheGoApp.controller:DeliverhomeCtrl
 * @description
 * # DeliverhomeCtrl
 * Controller of the deliverOnTheGoApp
 */
angular.module('deliverOnTheGoApp')
  .controller('DeliverhomeCtrl', function ($scope, deliverService,$modal) {



    $scope.openPickupReq = function(){

      $scope.deliverinput = {
        userId: ''
      }


      deliverService.deliverRequest(deliverinput).success(function(data, status){
        // transaction data will be here

      }).error(function(res, status){

      })
    }


  });
