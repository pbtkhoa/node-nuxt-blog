/**
 * Library
 */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const router = require('./routes');
const cors = require('./config/cors');
const nuxt = require('./config/nuxt');
const exception = require('./exception');

const app = express();

const port = process.env.API_PORT || 3000;

/**
 * Config Express
 * @desc BodyParser
 * @desc CORS
 * @desc Handle Exception
 */
app.use(bodyParser.json(), cors, exception);

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

/**
 * Import Models
 */
require('./models/User');
require('./models/Category');
require('./models/Post');

require('./config/passport');

/**
 * Router
 */
app.use(process.env.API_PREFIX, router);
app.use(nuxt.render);

// Export the server middleware
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

module.exports = app;
