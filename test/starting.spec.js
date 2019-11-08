var assert = require('assert');
// no require should in this File.  
// It gets added to Object.prototype in the other spec for entire test execution.

describe('Basic Mocah Test', function() {
  it('should deal with objects', function() {
    var obj = {name: 'Robert', gender: 'male'};
    var objB = {name: 'Robert', gender: 'male'};
    obj.should.have.property('name').equal('Robert');
    obj.should.deep.equal(objB);
  });
});
