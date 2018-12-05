const passport = require('passport');
const User = require('./../models/User');

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
  },

  /**
   * Login User
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async check(req, res, next) {
    let user = await User.findById(req.payload.id);

    return res.json(user.toAuthJSON());
  }
};
