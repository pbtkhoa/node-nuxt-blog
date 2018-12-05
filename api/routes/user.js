const express = require('express');
const authen = require('./../middleware/authen');
const UserController = require('./../controllers/UserController');
const CreateValidator = require('./../validators/user/CreateValidator');
const UpdateValidator = require('./../validators/user/UpdateValidator');

const router = express.Router();
router.get('/', authen, UserController.index);
router.get('/:id', authen, UserController.show);
router.put('/:id', authen, ...UpdateValidator, UserController.update);
router.delete('/:id', authen, UserController.delete);
router.post('/create', ...CreateValidator, UserController.create);

module.exports = router;
