/// <reference types="cypress" />

it('should be the first Google search Test', () => {
    cy.log('Google first Test starts')
    cy.visit('https://google.com')
    cy.get('#L2AGLb > .QS5gu').click({ force: true })
    cy.get('.gLFyf').type('cypress{Enter}')
    cy.log('Google first Test ends')
})

it('should be the second Google search Test', () => {
    cy.log('Google second Test starts')
    cy.visit('https://google.com')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('.gLFyf').type('cypress automation{Enter}')
    cy.log('Google second Test ends')
})
