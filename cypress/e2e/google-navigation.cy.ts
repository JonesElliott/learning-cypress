import "@testing-library/cypress/add-commands";

beforeEach(() => {
  // Clear all site data to try to have consistent test results
  cy.clearAllSessionStorage();
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
});

describe("Google Navigation", () => {
  it("Should search Google for 'HTTP Cats' and click the third search result", () => {
    // Navigate to the site tests will run on
    cy.visit("https://www.google.com/");

    // cy.visit implicitly waits for the entire page to load before proceeding
    // Ensures that the Google logo image is visible to the user
    cy.get('[alt="Google"]').should("be.visible");

    // Type query and search
    cy.get('[aria-label="Search"]').click().type("HTTP Cats{enter}");

    // Ensures that the search results are visible to the user
    cy.get("#search > div > h1").should("be.visible");

    // Get all search results
    cy.get("#rso")
      .children()
      .last()
      .children()
      .eq(1) // First result is in a separate container, this grabs the 3rd result displayed to the user
      .within(() => {
        cy.get("a")
          .invoke("attr", "href")
          .should("include", "https://httpcats.com/"); // Asserts we are getting the expected website

        cy.get("a").click();
        // cy.origin() allows us to visit domains of a different origin in a single test
        cy.origin("https://httpcats.com/204", () => {
          cy.get("body")
            .find("h1")
            .should("have.text", "HTTP Status Cats")
            .and("be.visible");
        });
      });
  });
});
