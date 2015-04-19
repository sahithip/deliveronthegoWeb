'use strict';

/**
 * @ngdoc service
 * @name deliverOnTheGoApp.Auth
 * @description
 * # Auth
 * Service in the deliverOnTheGoApp.
 */
angular.module('deliverOnTheGoApp')
  .service('Auth', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var login = function (inputs) {

      return $http.post('http://10.0.0.9:9006/Dotg/rest/home/login', inputs);

    }
    var signup =function (inputs) {
      return $http.post('http://10.0.0.9:9006/Dotg/rest/home/customersignup', inputs);
    }

    var Auth = {
      login : login,
      signup : signup
    }

    return Auth;
  });
