const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
    name: String,
    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      index: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      index: true
    },
    avatar: String,
    salt: String,
    password: String
  },
  { timestamps: true }
);

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.setPassword = function(password) {
  this.salt = bcrypt.genSaltSync();
  this.password = bcrypt.hashSync(password, this.salt);
};

UserSchema.methods.generateJWT = function() {
  let today = new Date();
  let exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      id: this._id,
      username: this.username,
      exp: parseInt(exp.getTime() / 1000)
    },
    config.secret
  );
};

UserSchema.methods.toAuthJSON = function() {
  return {
    name: this.name,
    username: this.username,
    email: this.email,
    avatar: this.avatar,
    token: this.generateJWT()
  };
};

UserSchema.query.byProtectedField = function() {
  return this.select('-password -salt -__v');
};

module.exports = mongoose.model('User', UserSchema);
