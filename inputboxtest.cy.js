describe("test script for form fields", () =>{
    it("submitting registration form", () =>{

        cy.visit("https://demo.textboxtechnology.com/")

        //test input fieds
        cy.get('#wpforms-44-field_1').type('test', {force:true})
        cy.get("#wpforms-44-field_1-last").type("automation", {force:true})
        cy.get("#wpforms-44-field_2").type("testautomation@qaoncloud.com", {force:true});
        
        //test checkbox

        cy.get("#wpforms-44-field_3 Input")
        .check(["Gold - $399.95"], {force: true})


        cy.get("#wpforms-44-field_4 Input")
        .check(["Hockey"], {force: true})

        cy.get("#wpforms-44-field_5 Input")
        .check(["No"], {force: true})

        //dropdownlist

        cy.get("#wpforms-44-field_8")
        .select("Testing", {force: true})

        cy.get("#wpforms-44-field_9")
        .select("Armenia", {force: true})

        cy.get("#wpforms-44-field_6_1")
        .check({force: true})

        cy.get("#wpforms-44-field_7").type('hello', {force:true})

        cy.get("#wpforms-44-field_11")
        .select("Second Choice", {force: true})

        // button
        cy.get("#wpforms-submit-44").click({force: true});
        

        //verify success message
        cy.get("#wpforms-confirmation-44 ").should("contain.text","Thanks for contacting us! We will be in touch with you shortly.")
    })
})