const express = require('express');
const authen = require('./../middleware/authen');
const AuthController = require('./../controllers/AuthController');
const LoginValidator = require('./../validators/auth/LoginValidator');

const router = express.Router();
router.post('/login', ...LoginValidator, AuthController.login);
router.get('/check', authen, AuthController.check);

module.exports = router;
