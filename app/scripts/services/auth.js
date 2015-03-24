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

      return $http.post('/login', inputs);

    }

    var Auth = {
      login : login
    }

    return Auth;
  });
