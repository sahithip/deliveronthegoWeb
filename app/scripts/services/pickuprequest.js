'use strict';

/**
 * @ngdoc service
 * @name deliverOnTheGoApp.pickuprequest
 * @description
 * # pickuprequest
 * Service in the deliverOnTheGoApp.
 */
angular.module('deliverOnTheGoApp')
  .service('pickuprequest', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var pickuprequest = function(inputs){
      return $http.post('http://10.0.0.9:9006/Dotg/rest/home/findDrivers', inputs); //FIXME: change url to service url
    }

    var pickuprequest = {
      pickuprequest : pickuprequest
    }

    return pickuprequest;
  });
