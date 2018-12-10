const mongoose = require('mongoose');

/**
 * Database Connection
 */
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useCreateIndex: true }
);
if (process.env.NODE_ENV === 'dev') {
  mongoose.set('debug', true);
}

require('./Role');
require('./User');
require('./Category');
require('./Post');

module.exports = mongoose;
