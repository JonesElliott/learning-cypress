import "@testing-library/cypress/add-commands";

beforeEach(() => {
    // Clear all site data to try to have consistent test results
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
});

describe("YouTube Navigation", () => {
    it("Should search YouTube for 'dnd goblins' and check the first video is 'The problem with Goblins in D&D", () => {
        // Navigate to the site tests will run on
        cy.visit("https://www.youtube.com/");

        // cy.visit implicitly waits for the entire page to load before proceeding
        // Ensures that the YouTube logo image is visible to the user
        cy.get('#logo-icon').should("be.visible");

        // Type query and search
        cy.get('#search-input').children().click().type("dnd goblins{enter}").then(() => {
            cy.get('ytd-item-section-renderer.style-scope > :nth-child(3)') // Element containing search results 
                .children()
                .filter('ytd-video-renderer') // Filters for only elements containin video results to avoid ads/sponsored videos
                .first() // Get the first video result
                .should('contain.html', 'ytd-video-renderer') // Assert that we only have the video result elements
                .within(() => {
                    cy.get('#video-title')
                        .children()
                        .eq(1)
                        .should('have.text', 'The problem with Goblins in D&D'); // Assert that we have the video title we expect
                });
        });
    });
});
