import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1200,
  viewportHeight: 860,
  numTestsKeptInMemory: 10, // Save tests in memory for debugging
  e2e: {
    specPattern: ["**/*.feature", "**/*.cy.ts"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
