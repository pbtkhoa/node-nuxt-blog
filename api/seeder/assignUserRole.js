require('./../models');

const User = require('./../models/User');
const Role = require('./../models/Role');

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
