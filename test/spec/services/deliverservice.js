'use strict';

describe('Service: deliverService', function () {

  // load the service's module
  beforeEach(module('deliverOnTheGoApp'));

  // instantiate service
  var deliverService;
  beforeEach(inject(function (_deliverService_) {
    deliverService = _deliverService_;
  }));

  it('should do something', function () {
    expect(!!deliverService).toBe(true);
  });

});
