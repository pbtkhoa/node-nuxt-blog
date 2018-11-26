/**
 * Library
 */
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const config = require('./app/config');
const router = require('./app/routes');

const app = express();
const port = process.env.API_PORT || 3000;

/**
 * Config Express
 * @desc BodyParser
 * @desc CORS
 * @desc Handle Exception
 */
app.use(bodyParser.json(), config.cors, require('./app/config/exception'));

/**
 * Database Connection
 */
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useCreateIndex: true }
);
if (config.isDev) {
  mongoose.set('debug', true);
}

/**
 * Import Models
 */
require('./app/models/User');

require('./app/config/passport');

/**
 * Router
 */
app.use('/api', router);
// app.use(config.nuxt.render);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

module.exports = app;
