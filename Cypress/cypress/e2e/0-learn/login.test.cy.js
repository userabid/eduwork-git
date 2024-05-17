/// <reference types="cypress" />

//Demo Test
describe('Login Test Website Zero Bank', () => {

    beforeEach(() => {
        //Access Login
        cy.visit('http://zero.webappsecurity.com/', {timeout: 10000})
      
      })

    it('Open Website', () => {
        cy.get('body > div.wrapper > div.navbar.navbar-fixed-top > div > div > a').should('have.text','Zero Bank')
                
    });

    it('Login Test', () => {
        
        cy.get('#signin_button').contains('Signin').click()
        cy.get('#user_login').type('username')
        cy.get('input[name="user_password"]').type('password')
        cy.get('#user_remember_me').click()
        cy.get('#login_form > div.form-actions > input').click()

        cy.get('body > div.wrapper > div.navbar.navbar-fixed-top > div > div > a').should('have.text','Zero Bank')
        

        //

    })
  })