const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

function getAuthToken(req) {
  return req.query.token;
}

module.exports = expressJwt({
  secret: process.env.APP_SECRET,
  userProperty: 'payload',
  getToken: getAuthToken
});
