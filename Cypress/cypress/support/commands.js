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

cypress.commands.add('masuk', (email, password) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get('#user_login').type(email)
    cy.get('#user_password').type(password)
    cy.get('#user_remember_me').click();
    cy.get('#login_form > div.form-actions > input').click();
})

// cypress.commands.add('loginweb', (id, pw) => {
//     cy.clearCookies();
//     cy.clearLocalStorage();
//     cy.get('#user_login').type(id)
//     cy.get('#user_password').type(pw)
//     cy.get('#user_remember_me').click();
//     cy.get('#login_form > div.form-actions > input').click();
// })
