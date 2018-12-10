const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "can't be blank"]
    }
  },
  { timestamps: false }
);

module.exports = mongoose.model('Role', RoleSchema);
