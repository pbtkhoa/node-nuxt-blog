const { Category } = require('./../models');
const logger = require('./../utils/logger');

module.exports = {
  /**
   * List Category
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async index(req, res, next) {
    try {
      let categories = await Category.find();

      return res.json(categories);
    } catch (e) {
      return res.status(404).json({ msg: 'Not Found' });
    }
  },

  /**
   * Get Category by Id
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async show(req, res, next) {
    try {
      let id = req.params.id;
      let category = await Category.findById(id);

      return res.json(category);
    } catch (e) {
      return res.status(404).json({ msg: 'Category not found!' });
    }
  },

  /**
   * Delete Category
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async delete(req, res, next) {
    try {
      let category = await Category.findByIdAndRemove(req.params.id);
      if (!category) throw 404;

      return res.json({ msg: 'Category was deleted!' });
    } catch (e) {
      return res.status(404).json({ msg: 'Category not found!' });
    }
  },

  /**
   * Update Category by Id
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async update(req, res, next) {
    try {
      let { body } = req;
      let category = await Category.findById(req.params.id);
      category.name = body.name;
      category.description = body.description;
      category.setSlug(body.name);
      await category.save();

      return res.json(category);
    } catch (e) {
      return res.status(404).json({ msg: 'Category not found!' });
    }
  },

  /**
   * Create Category
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async create(req, res, next) {
    try {
      let { body } = req;
      let category = new Category();
      category.name = body.name;
      category.description = body.description;
      category.setSlug(body.name);
      await category.save();

      return res.json(category);
    } catch (e) {
      logger.info(e);
      return res.status(500).json({ msg: 'Cannot create Category' });
    }
  }
};
