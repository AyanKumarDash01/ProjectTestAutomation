// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.flipkart.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    env: {
      emailOrMobile: '6291736097',
    },
    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed
      // e.g., for custom plugins or task definitions
    },
  },
});