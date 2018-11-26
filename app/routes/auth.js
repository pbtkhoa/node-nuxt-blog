const express = require('express');
const AuthController = require('./../controllers/AuthController');
const LoginValidator = require('./../validators/auth/LoginValidator');

const router = express.Router();
router.post('/login', ...LoginValidator, AuthController.login);

module.exports = router;
