'use strict';

describe('Controller: PickuphomeCtrl', function () {

  // load the controller's module
  beforeEach(module('deliverOnTheGoApp'));

  var PickuphomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PickuphomeCtrl = $controller('PickuphomeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
