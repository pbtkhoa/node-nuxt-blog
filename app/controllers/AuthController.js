const User = require('./../models/User');
const passport = require('passport');

module.exports = {
  /**
   * Login User
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  login(req, res, next) {
    passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err) return next(err);
      if (info) return res.status(422).json(info);

      return res.json(user.toAuthJSON());
    })(req, res, next);
  }
};
