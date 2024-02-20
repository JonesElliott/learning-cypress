## Learning Cypress

### Running Tests
The Cypress GUI can be launched by running `yarn run cypress open`, select E2E Testing option, then desired browser.

### Tests
#### google-navigation.cy.js
This test does a search on Google for "HTTP Cats", selects the third search result, then asserts the expected page is returned.