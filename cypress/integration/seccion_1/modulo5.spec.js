/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe('click', () => {

    it('Pagina', () => {
        cy.visit('https://orangehrm-demo.orangehrmlive.com/auth/login')      
        cy.title().should('eq','OrangeHRM')  
    })

    it('click', () => {
        cy.wait(2000)        
        cy.get('#loginAsButtonGroup > .btn').click()
        cy.wait(500)
        cy.get(':nth-child(1) > .login-as').click()
        cy.wait(1500)
        cy.get('#btnLogin').should("be.visible").click({force:true})

    })    
    
 
})