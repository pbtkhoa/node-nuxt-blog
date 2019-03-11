const { check, validationResult } = require('express-validator/check');

module.exports = [
  [
    check('name')
      .not()
      .isEmpty()
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
