const express = require('express');
const UserController = require('./../controllers/UserController');
const CreateValidator = require('./../validators/user/CreateValidator');
const UpdateValidator = require('./../validators/user/UpdateValidator');

const router = express.Router();
router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.put('/:id', ...UpdateValidator, UserController.update);
router.delete('/:id', UserController.delete);
router.post('/create', ...CreateValidator, UserController.create);

module.exports = router;
