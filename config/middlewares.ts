export default [
  {
    name: 'strapi::logger',
    config: {
      level: 'debug',
    },
  },
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    resolve: './src/middlewares/authentication', // Specify the path here
    config: {
      // Add any configuration you might need
    },
  },
  {
    resolve: './src/middlewares/roles', // Specify the path here
    config: {
      // Add any configuration you might need
    },
  },
];
