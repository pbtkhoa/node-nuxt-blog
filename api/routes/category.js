const express = require('express');
const CategoryController = require('./../controllers/CategoryController');
const CreateValidator = require('./../validators/category/CreateValidator');
const UpdateValidator = require('./../validators/category/UpdateValidator');

const router = express.Router();
router.get('/', CategoryController.index);
router.get('/:id', CategoryController.show);
router.put('/:id', ...UpdateValidator, CategoryController.update);
router.delete('/:id', CategoryController.delete);
router.post('/create', ...CreateValidator, CategoryController.create);

module.exports = router;
