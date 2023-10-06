// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-delete-downloads-folder').addCustomCommand();

Cypress.Commands.add('subValues', (a, b) => { return a - b });

Cypress.Commands.add('clickButton', (buttonId) => {
    cy.get('button').contains(buttonId).click();
  });

Cypress.Commands.add("userInput", (searchTxt) => {
    //to input search text in Google and perform search
    cy.get("input[type='text']").type(searchTxt);
    cy.contains("Google Search").click();
 });
 