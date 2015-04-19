'use strict';

/**
 * @ngdoc service
 * @name deliverOnTheGoApp.deliverService
 * @description
 * # deliverService
 * Service in the deliverOnTheGoApp.
 */
angular.module('deliverOnTheGoApp')
  .service('deliverService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var deliverRequest = function(inputs){
      return $http.get('/deliverRequest', inputs); //FIXME: change url to service url
    }

    var deliverService = {
      deliverRequest : deliverRequest
    }

    return deliverService;
  });
