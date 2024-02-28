const { defineConfig } = require("cypress");

module.exports = defineConfig({
  numTestsKeptInMemory: 10, // Save tests in memory for debugging
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
