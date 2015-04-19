'use strict';

describe('Controller: DeliverhomeCtrl', function () {

  // load the controller's module
  beforeEach(module('deliverOnTheGoApp'));

  var DeliverhomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeliverhomeCtrl = $controller('DeliverhomeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
