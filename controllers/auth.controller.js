function AuthController() {
  function isAuthorized(roles, neeedRole) {
    return roles.indexOf(neeedRole) >=0;
  }
  return {isAuthorized};
}

module.exports = AuthController();
