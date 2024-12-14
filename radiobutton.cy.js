describe("Radio button functionality", () => {
    it('Checking the functionality of Radiobutton', () => {
        cy.visit("https://demo.guru99.com/test/radio.html")

        
        cy.get("#vfb-7-1").should("be.visible")
        cy.get("#vfb-7-2").should("be.visible")
        cy.get("#vfb-7-3").should("be.visible")

       //Selecting radio button
       cy.get("#vfb-7-1").check().should("be.checked")
       cy.get("#vfb-7-2").should("not.be.checked")
       cy.get("#vfb-7-3").should("not.be.checked")

       cy.get("#vfb-7-2").check().should("be.checked")
       cy.get("#vfb-7-1").should("not.be.checked")
       cy.get("#vfb-7-3").should("not.be.checked")

       cy.get("#vfb-7-3").check().should("be.checked")
       cy.get("#vfb-7-1").should("not.be.checked")
       cy.get("#vfb-7-2").should("not.be.checked")
    });
});