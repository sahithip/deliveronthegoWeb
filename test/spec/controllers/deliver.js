'use strict';

describe('Controller: DeliverCtrl', function () {

  // load the controller's module
  beforeEach(module('deliverOnTheGoApp'));

  var DeliverCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeliverCtrl = $controller('DeliverCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
