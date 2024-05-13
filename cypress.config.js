const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'reporters/custom.js',
  projectId: '1wyyda',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});




