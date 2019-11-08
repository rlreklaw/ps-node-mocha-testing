function AuthController() {

  var roles;
  function setRoles(role) {
    roles = role;
  }

  function isAuthorized(neeedRole) {
    return roles.indexOf(neeedRole) >=0;
  }

  function isAuthorizedAsync(neededRole, cb) {
    setTimeout(function(){cb(roles.indexOf(neededRole) >= 0)}, 2100);
  }

  return { isAuthorized, isAuthorizedAsync, setRoles };
}

module.exports = AuthController();
