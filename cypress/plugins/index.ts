import cucumber from "cypress-cucumber-preprocessor";

export default (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): void => {
  on("file:preprocessor", cucumber());
};
