var assert = require('assert');
var authController = require('../../controllers/auth.controller');
var expect = require('chai').expect;

describe('AuthController', function settingUpRoles() {
  beforeEach(function() {
    console.log('running before each');
    authController.setRoles(['user']);
  });
  
describe('isAuthorized', function() {
    it('Should return false if not authorized', function() {
      var isAuth = authController.isAuthorized('admin')
      expect(isAuth).to.be.false;
    });
    it('Should return true if authorized', function() {
      authController.setRoles(['user', 'admin']);
      assert.equal(true, authController.isAuthorized('admin'));
    });
    it('should not allow a get if not authorized');
    it('should allow a get if authorized');
  });
  describe('isAuthorizedAsync', function() {
    it('Should return false if not authorized', function(done) {
      this.timeout(2500);
      authController.isAuthorizedAsync('admin',
        function(isAuth) {
          assert.equal(false, isAuth);
          done();
        });
    });
  });
});
