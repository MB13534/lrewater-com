// next.config.js
require('dotenv').config()
const withImages = require('next-images');
module.exports = withImages(
  {
    env: {
      REACT_APP_MAPBOX_TOKEN: process.env.REACT_APP_MAPBOX_TOKEN,
      DIRECTUS_ENDPOINT: process.env.DIRECTUS_ENDPOINT,
    },
    webpack5: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
  }
);