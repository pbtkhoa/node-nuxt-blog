const mongoose = require('mongoose');
const slug = require('slug');

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "can't be blank"]
    },
    slug: {
      type: String,
      unique: true,
      index: true
    },
    image: String,
    content: String,
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Categories' }]
  },
  { timestamps: true }
);

PostSchema.methods.setSlug = function(postName) {
  this.slug = slug(postName, { lower: true });
};

module.exports = mongoose.model('Post', PostSchema);
