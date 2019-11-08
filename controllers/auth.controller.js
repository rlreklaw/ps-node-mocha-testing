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
    try {
      if(req.user.isAuthorized('admin')) {
        return res.render('index');
      }
      res.render('notAuth');
      
    } catch (error) {
      res.render('error');
    }
  }

  return { isAuthorized, isAuthorizedAsync, isAuthorizedPromise, setRoles, getIndex, setUser };
}

module.exports = AuthController();
