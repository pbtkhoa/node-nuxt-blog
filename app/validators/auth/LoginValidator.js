const { check, validationResult } = require('express-validator/check');

module.exports = [
  [
    check('username')
      .not()
      .isEmpty()
      .isLength({ min: 4, max: 10 }),
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
