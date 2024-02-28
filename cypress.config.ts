import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  numTestsKeptInMemory: 10, // Save tests in memory for debugging
  e2e: {
    specPattern: ["**/*.feature", "**/*.cy.ts"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
