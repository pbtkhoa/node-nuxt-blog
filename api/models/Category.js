const mongoose = require('mongoose');
const slug = require('slug');

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "can't be blank"]
    },
    slug: {
      type: String,
      unique: true,
      index: true
    },
    description: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
  },
  { timestamps: true }
);

CategorySchema.methods.setSlug = function(categoryName) {
  this.slug = slug(categoryName, { lower: true });
};

module.exports = mongoose.model('Category', CategorySchema);
