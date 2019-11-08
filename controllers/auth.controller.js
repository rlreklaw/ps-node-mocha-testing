function AuthController() {
  function isAuthorized(roles, neeedRole) {
    return roles.indexOf(neeedRole) >=0;
  }

  function isAuthorizedAsync(roles, neededRole, cb) {
    setTimeout(function(){cb(roles.indexOf(neededRole) >= 0)}, 100);
  }

  return { isAuthorized, isAuthorizedAsync };
}

module.exports = AuthController();
