const { User, Role } = require('./../models');

module.exports = async (username, roleName) => {
  try {
    let user = await User.findOne({ username });
    let role = await Role.findOne({ name: roleName });
    if (user && role) {
      user.role = role;
      user.save();
    }
  } catch (e) {
    console.log('Something wrong');
  }
};
