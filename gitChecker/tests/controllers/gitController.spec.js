var gitController = require('../../controllers/gitController')();
var chai = require('chai');

chai.should();

describe('gitController', function() {
    it.only('should get user and repos from git service', function(done) {
        this.timeout(10000);
        var req = { params: { userId: 'jonathanfmills' } };
        var res = { json: test };

        function test(user) {
            user.login.should.equal('jonathanfmills');
            done();
        }

        gitController.userGet(req, res);
    });
});
