/// <reference types="Cypress" />

describe('Clase 2', () => {

    it('Pagina', () => {
        cy.visit('https://www.google.com')      
        cy.title().should('eq','Google')  
    })

    it('Buscar', () => {
        cy.get("[name='q']").type("cypress io {enter}")
        cy.wait(3000)
        cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a > h3").click()
    })    

})