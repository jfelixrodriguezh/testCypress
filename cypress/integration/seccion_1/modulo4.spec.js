/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe('Use Tab', () => {

    it('Pagina', () => {
        cy.visit('https://demoqa.com/text-box')      
        cy.title().should('eq','ToolsQA')  
    })

    it('Tabular', () => {
        cy.get("#userName").type("Jose").tab().type('Rodriguez').tab().type('jfrodriguez@gmail.com')
        cy.wait(2000)
    })    
 
})