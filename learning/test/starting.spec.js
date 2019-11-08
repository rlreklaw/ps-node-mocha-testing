var assert = require('assert');
var should = require('chai').should();

describe('Basic Mocah Test', function() {
  it('should deal with objects', function() {
    var obj = {name: 'Robert', gender: 'male'};
    var objB = {name: 'Robert', gender: 'male'};
    obj.should.have.property('name').equal('Robert');
    obj.should.deep.equal(objB);
  });
  it('should allow testing nulls', function() {
    var iAmNull = null;
    // iAmNull.should.not.exist;  // this doesn't do what we want
    should.not.exist(iAmNull);
  });
});
