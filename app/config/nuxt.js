const {Nuxt, Builder} = require('nuxt');

// We instantiate Nuxt.js with the options
let config = require('./../../nuxt.config.js');
const nuxt = new Nuxt(config);

// Build only in dev mode
if (config.dev) {
    new Builder(nuxt).build()
        .catch((error) => {
            console.error(error);
            process.exit(1);

        });
}

module.exports = nuxt;
