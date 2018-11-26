const cors = require('./cors');
const nuxt = require('./nuxt');

module.exports = {
  secret: process.env.APP_SECRET,
  isProd: process.env.NODE_ENV === 'prod',
  isDev: process.env.NODE_ENV === 'dev',
  cors,
  nuxt
};
