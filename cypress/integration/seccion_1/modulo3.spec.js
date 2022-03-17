/// <reference types="Cypress" />

describe('Up Down', () => {

    it('Pagina', () => {
        cy.visit('https://demoqa.com/text-box')      
        cy.title().should('eq','ToolsQA')  
    })

    it('Down', () => {
        cy.get("#userName").type("{pagedown}")
        cy.wait(2000)
    })    

    it('Up', () => {
        cy.get("#userName").type("{pageup}")

    })    
})