'use strict';

describe('Service: pickuprequest', function () {

  // load the service's module
  beforeEach(module('deliverOnTheGoApp'));

  // instantiate service
  var pickuprequest;
  beforeEach(inject(function (_pickuprequest_) {
    pickuprequest = _pickuprequest_;
  }));

  it('should do something', function () {
    expect(!!pickuprequest).toBe(true);
  });

});
