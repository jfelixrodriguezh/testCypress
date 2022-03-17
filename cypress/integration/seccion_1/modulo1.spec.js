

describe('Clase 1', () => {

    it('Modulo 1', () => {
        cy.visit('https://demoqa.com/text-box')      
        cy.title().should('eq','ToolsQA')  
    })

})