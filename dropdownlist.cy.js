describe("Dropdown list", () => {
    it('Dropdown with select', () => {
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")

        // for single select dropdown lists
        cy.get("select[id=dropdowm-menu-1]")
        .select("JAVA")
        .should("have.value","java")

        cy.get("select[id=dropdowm-menu-1]")
        .select("C#")
        .should("have.value","c#")

        cy.get("select[id=dropdowm-menu-1]")
        .select("Python")
        .should("have.value","python")

        cy.get("select[id=dropdowm-menu-1]")
        .select("SQL")
        .should("have.value","sql")


        // selecting 2 dropdown list 

        cy.get("select[id=dropdowm-menu-1]")
        .select("C#")
        .should("have.value","c#")

        cy.get("select[id=dropdowm-menu-2]")
        .select("TestNG")
        .should("have.value","testng")


        // selecting 3 dropdown list 

        cy.get("select[id=dropdowm-menu-1]")
        .select("C#")
        .should("have.value","c#")

        cy.get("select[id=dropdowm-menu-2]")
        .select("TestNG")
        .should("have.value","testng")

        cy.get("select[id=dropdowm-menu-3]")
        .select("JavaScript")
        .should("have.value","javascript")


        // checkbox functionality

        cy.get("input[value='option-1']").should("be.visible")

        //Selecting single checkbox
        cy.get("input[value='option-1']").check().should("be.checked")

        //Unselecting single checkbox
        cy.get("input[value='option-1']").uncheck().should("not.be.checked")

               

        //Select 2nd checkbox
        cy.get("input[value='option-2']").check().should("be.checked")
        cy.get("input[value='option-2']").uncheck().should("not.be.checked")

        //Select 3rd checkbox
        cy.get("input[value='option-3']").check().should("be.checked")
        cy.get("input[value='option-3']").uncheck().should("not.be.checked")

        //Select 4th checkbox
        cy.get("input[value='option-4']").check().should("be.checked")

        //Select first & last checkbox
        cy.get("input[type='checkbox']").first().check().should("be.checked")
        cy.get("input[type='checkbox']").last().check().should("be.checked")



        // radio functionality

        cy.get("input[value='green']").should("be.visible")
        cy.get("input[value='blue']").should("be.visible")
        cy.get("input[value='yellow']").should("be.visible")
        cy.get("input[value='orange']").should("be.visible")
        cy.get("input[value='purple']").should("be.visible")


       //Selecting radio button
       cy.get("input[value='green']").check().should("be.checked")
       cy.get("input[value='blue']").should("not.be.checked")
       cy.get("input[value='yellow']").should("not.be.checked")
       cy.get("input[value='orange']").should("not.be.checked")
       cy.get("input[value='purple']").should("not.be.checked")

       cy.get("input[value='blue']").check().should("be.checked")
       cy.get("input[value='green']").should("not.be.checked")
       cy.get("input[value='yellow']").should("not.be.checked")
       cy.get("input[value='orange']").should("not.be.checked")
       cy.get("input[value='purple']").should("not.be.checked")

       cy.get("input[value='yellow']").check().should("be.checked")
       cy.get("input[value='green']").should("not.be.checked")
       cy.get("input[value='blue']").should("not.be.checked")
       cy.get("input[value='orange']").should("not.be.checked")
       cy.get("input[value='purple']").should("not.be.checked")

       cy.get("input[value='orange']").check().should("be.checked")
       cy.get("input[value='green']").should("not.be.checked")
       cy.get("input[value='blue']").should("not.be.checked")
       cy.get("input[value='yellow']").should("not.be.checked")
       cy.get("input[value='purple']").should("not.be.checked")

       cy.get("input[value='purple']").check().should("be.checked")
       cy.get("input[value='green']").should("not.be.checked")
       cy.get("input[value='blue']").should("not.be.checked")
       cy.get("input[value='yellow']").should("not.be.checked")
       cy.get("input[value='orange']").should("not.be.checked")
    });
});