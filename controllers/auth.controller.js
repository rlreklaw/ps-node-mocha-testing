function AuthController() {

  var roles;
  var user;

  function setRoles(role) {
    roles = role;
  }

  function setUser(inUser) {
    user = inUser;
  }

  function isAuthorized(neeedRole) {
    if(user) {
      return user.isAuthorized(neeedRole);
    }
  }

  function isAuthorizedAsync(neededRole, cb) {
    setTimeout(function(){cb(roles.indexOf(neededRole) >= 0)}, 2100);
  }

  function isAuthorizedPromise(neededRole, cb) {
    return new Promise(function(resolve) {
      setTimeout(function(){resolve(roles.indexOf(neededRole) >= 0)}, 100);

    });
  }

  function getIndex(req, res) {
    res.render('index');
  }

  return { isAuthorized, isAuthorizedAsync, isAuthorizedPromise, setRoles, getIndex, setUser };
}

module.exports = AuthController();
