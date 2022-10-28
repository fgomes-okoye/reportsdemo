it('My first Test', () => {
    cy.log('First test starts')
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#uname').type('test')
    cy.get('#pwd').type('test')
    cy.get('[type="submit"]').click()
    cy.log('Login First Test ends')
})
