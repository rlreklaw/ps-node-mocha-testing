var assert = require('assert');
var authController = require('../../controllers/auth.controller');
var expect = require('chai').expect;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var sinon = require('sinon');

chai.use(chaiAsPromised);
chai.should();

describe('AuthController', function settingUpRoles() {
  beforeEach(function() {
    console.log('running before each');
    authController.setRoles(['user']);
  });
  
  describe('isAuthorized', function() {
    var user = {};
    this.beforeEach(function() {
      user = {
        roles: ['user'],
        isAuthorized: function(neededRole) {
          return this.roles.indexOf(neededRole) >= 0;
        }
      };
      sinon.spy(user, 'isAuthorized');
      authController.setUser(user);
    });

    it('Should return false if not authorized', function() {
      var isAuth = authController.isAuthorized('admin');
      console.log(user.isAuthorized);
      user.isAuthorized.calledOnce.should.be.true;
      expect(isAuth).to.be.false;
    });
    
    it('Should return true if authorized', function() {
      authController.setRoles(['user', 'admin']);
      var isAuth = authController.isAuthorized('admin');
      isAuth.should.be.true;
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
  
  describe('isAuthorizedPromise', function() {
    it('Should return false if not authorized', function() {
      return authController.isAuthorizedPromise('admin').should.eventually.be.false;
    });
  });

  describe.only('getIndex',function() {
    var user = {};
    this.beforeEach(function() {
      user = {
        roles: ['user'],
        isAuthorized: function(neededRole) {
          return this.roles.indexOf(neededRole) >= 0;
        }
      };
    });

    it('should render index if authorized', function() {
      var req = {user: user};
      var isAuth = sinon.stub(user, 'isAuthorized').returns(true);
      var res = {
        render: sinon.spy()
      };

      authController.getIndex(req, res);
      // console.log(res.render);
      isAuth.calledOnce.should.be.true;
      res.render.calledOnce.should.be.true;
      res.render.firstCall.args[0].should.equal('index');
    });

    it('should render error if error is thrown', function() {
      var req = {user: user};
      var isAuth = sinon.stub(user, 'isAuthorized').throws();
      var res = {
        render: sinon.spy()
      };

      authController.getIndex(req, res);
      // console.log(res.render);
      isAuth.calledOnce.should.be.true;
      res.render.calledOnce.should.be.true;
      res.render.firstCall.args[0].should.equal('error');
    });

    it('should render notAuth if user is not authorized', function() {
      var req = {user: user};
      var isAuth = sinon.stub(user, 'isAuthorized').returns(false);
      var res = {
        render: function() {}
      };
      var mock = sinon.mock(res);
      mock.expects('render').once().withExactArgs('notAuth');

      authController.getIndex(req, res);
      // console.log(res.render);
      isAuth.calledOnce.should.be.true;

      mock.verify();
    });
  });
});
