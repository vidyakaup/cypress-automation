describe("Checkbox functionality", () => {
    it('Checking the functionality of checkbox', () => {
        cy.visit("https://demo.guru99.com/test/radio.html")

        
        cy.get("#vfb-6-0").should("be.visible")

        //Selecting single checkbox
        cy.get("#vfb-6-0").check().should("be.checked")

        //Unselecting single checkbox
        cy.get("#vfb-6-0").uncheck().should("not.be.checked")

        

        

        //Select 2nd checkbox
        cy.get("#vfb-6-1").check().should("be.checked")

        //Select 3rd checkbox
        cy.get("#vfb-6-2").check().should("be.checked")

        //Select first & last checkbox
        cy.get("input[type='checkbox']").first().check().should("be.checked")
        cy.get("input[type='checkbox']").last().check().should("be.checked")

        //Selecting all checkboxes
        cy.get("input[type='checkbox']").check().should("be.checked")

        //Unselecting all checkboxes
        cy.get("input[type='checkbox']").uncheck().should("not.be.checked")
    });
});