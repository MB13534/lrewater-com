const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

function checkAccessToken(issuer, audience) {
  return jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${issuer}/.well-known/jwks.json`,
    }),

    // Validate the audience and the issuer.
    audience: audience,
    issuer: `https://${issuer}/`,
    algorithms: ["RS256"],
  });
}

function checkPermission(providedPermissions) {
  return (req, res, next) => {
    console.log(req.user);
    const { permissions } = req.user;
    const permissionsArray = providedPermissions.map(permission => {
      if (permissions.includes(permission)) {
        return true;
      }
      return false;
    });
    if (!permissionsArray.includes(false)) return next();
    res.status(403).send();
  };
}

module.exports = {
  checkAccessToken,
  checkPermission,
};
