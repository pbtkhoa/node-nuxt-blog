const { check, validationResult } = require('express-validator/check');
const User = require('./../../models/User');

module.exports = [
  [
    check('name')
      .not()
      .isEmpty()
      .isLength({ min: 4, max: 20 }),
    check('username')
      .not()
      .isEmpty()
      .isLength({ min: 4, max: 10 })
      .custom(value =>
        User.find({ username: value }).then(user => {
          if (user) {
            return Promise.reject('Username already in use');
          }
        })
      ),
    check('email')
      .exists()
      .isEmail()
      .custom(value =>
        User.find({ email: value }).then(user => {
          if (user) {
            return Promise.reject('E-mail already in use');
          }
        })
      ),
    check('password')
      .not()
      .isEmpty()
      .isLength({ min: 6, max: 20 })
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res
      .status(422)
      .json({ errors: errors.array({ onlyFirstError: true }) });
  }
];
