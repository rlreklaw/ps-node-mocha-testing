var assert = require('assert');

describe('Basic Mocah Test', function() {
  it('should deal with objects', function() {
    var obj = {name: 'Robert', gender: 'male'};
    obj.should.have.property('name').equal('Robert');
  });
});
