import "@testing-library/cypress/add-commands";

beforeEach(() => {
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
    cy.findByText("Search Results").should("be.visible");

    // Get all search results
    cy.get("#rso")
      .children()
      .last()
      .children()
      .eq(2) // Get 3rd which will be our desired search result
      .within(() => {
        cy.get("a").then(($a) => {
          // get url from href of element
          const url = $a.prop("href");
          // assert that we get the expected url
          expect(url).to.include("https://httpcats.com");
          // send a request and check that the body returned includes
          cy.request(url).its("body").should("include", "HTTP Status Cats");
        });
      });
  });
});
