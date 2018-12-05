const User = require('./../models/User');

module.exports = {
  /**
   * List User
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async index(req, res, next) {
    try {
      let users = await User.find().byProtectedField();

      return res.json(users);
    } catch (e) {
      return res.status(404).json({ msg: 'Not Found' });
    }
  },

  /**
   * Get User by Id
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async show(req, res, next) {
    try {
      let id = req.params.id;
      let user = await User.findById(id).byProtectedField();

      return res.json(user);
    } catch (e) {
      return res.status(404).json({ msg: 'User not found!' });
    }
  },

  /**
   * Delete User
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async delete(req, res, next) {
    try {
      let user = await User.findByIdAndRemove(req.params.id);
      if (!user) throw 404;

      return res.json({ msg: 'User was deleted!' });
    } catch (e) {
      return res.status(404).json({ msg: 'User not found!' });
    }
  },

  /**
   * Update User by Id
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async update(req, res, next) {
    try {
      let { body } = req;
      let user = await User.findById(req.params.id);
      user.name = body.name;
      user.setPassword(body.password);
      await user.save();

      return res.json(user.toAuthJSON());
    } catch (e) {
      return res.status(404).json({ msg: 'User not found!' });
    }
  },

  /**
   * Create User
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async create(req, res, next) {
    try {
      let { body } = req;
      let user = new User();
      user.name = body.name;
      user.username = body.username;
      user.email = body.email;
      user.setPassword(body.password);
      await user.save();

      return res.json(user.toAuthJSON());
    } catch (e) {
      return res.status(500).json({ msg: 'Cannot create User' });
    }
  }
};
