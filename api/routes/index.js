const express = require('express');
const auth = require('./auth');
const user = require('./user');
const post = require('./post');
const category = require('./category');

const authen = require('./../middleware/authen');
// Midlewares
const router = express.Router();
router.use('/auth', auth);
router.use('/user', user);
router.use('/post', authen, post);
router.use('/category', authen, category);

// Catch error
router.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      msg: 'invalid token...'
    });
  }
});

module.exports = router;
