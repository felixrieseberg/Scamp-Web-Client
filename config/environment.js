/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'scamp',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
     
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self'",
      'img-src': "'self' http://placekitten.com",
      'style-src': "'self' 'unsafe-inline'",
      'media-src': "'self'"
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['torii'] = {
    providers: {
      'azure-oauth2': {
        apiKey: '603b6934-f721-47ae-9037-7b1027ef6389',
        redirect_uri: "https://scamp.azurewebsites.net",
        state: "88e491b5-5009-4fa9-8d66-9d61bdb2007e" // For CSRF, should be random & unguessable
      }
    }
  }

  return ENV;
};