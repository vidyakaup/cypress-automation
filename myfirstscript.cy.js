
describe('My First Test', () => {
    it('Verify title - positive test', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.title().should('eq', 'OrangeHRM')
    })

    it('Verify title - negative test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('not.eq', 'OrangeHRM12')
      })
  })