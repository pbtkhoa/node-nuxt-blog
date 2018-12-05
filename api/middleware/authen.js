const expressJwt = require('express-jwt');

function getAuthToken(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    return req.headers.authorization.split(' ')[1];
  }
  return null;
}

module.exports = expressJwt({
  secret: process.env.APP_SECRET,
  userProperty: 'payload',
  getToken: getAuthToken
});
