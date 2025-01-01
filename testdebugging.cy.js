describe("Verify browesr Stack homepage", () =>{

    //Using Cypress cy.log() 
 it("Verify browser stack logo is visible or not", () => {

    cy.visit('https://www.browserstack.com/')

    cy.get('.bstack-mm-logo > img').should('be.visible')

    cy.log("Navigate to home page")

    
 })

 //Using console.log() in Cypress

 it("Using console.log()", () => {

    cy.visit('https://www.browserstack.com/')

    cy.task('log', 'This is a console log: Navigated to home page');

 })

 //Debug Cypress with .debug() option

 it("Using .debug()", () => {

    cy.visit('https://www.browserstack.com/')

    cy.get(".sign-in-link > .bstack-mm-link").first().debug().click()

 })


  //Debug Cypress with .pause() option

  it("Using .debug()", () => {

    cy.visit('https://www.browserstack.com/').pause()

    cy.get(".sign-in-link > .bstack-mm-link").first().click()

 })

})