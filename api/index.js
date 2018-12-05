/**
 * Library
 */
const express = require('express');
const bodyParser = require('body-parser');
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

require('./models');
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
