describe("Handling Mouse actions", () => {


    it("Mouse Actions: Mouse Hover", () => {

        cy.visit("https://demo.opencart.com/")

        cy.get("a[href='https://demo.opencart.com/en-gb/catalog/desktops/mac']").should("not.be.visible")

        cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger("mouseover").click()
        cy.get("a[href='https://demo.opencart.com/en-gb/catalog/desktops/mac']").should("be.visible").click()
       
    })

    it("Mouse Actions: Right click", () => {

        // Method 1
        cy.visit("https://www.softwaretestingmentor.com/automation-practice-page-right-click-demo/")

        cy.get('[style="text-align: center;"] > h2').trigger("contextmenu", {force: true })
        cy.get('#customContextMenu').invoke('css', 'display', 'block')
        cy.get("a[href='https://www.linkedin.com/company/rcvacademy']").should("be.visible")

        //Method 2
       
        cy.get('[style="text-align: center;"] > h2').rightclick()
         cy.get("a[href='https://www.linkedin.com/company/rcvacademy']").should("be.visible")
        
    })

    it("Mouse Actions: Double click", () => {

        // Method 1
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")

        cy.frameLoaded("#iframeResult")

        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger("dblclick")
        cy.iframe("#iframeResult").find("#field2").should("have.value", "Hello World!")

        //apporach 2

        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe("#iframeResult").find("#field2").should("have.value", "Hello World!")
                
    })

    it("Mouse actions: scrolling the page", () =>{

        cy.visit("https://flagpedia.net/index")
        cy.get("a[href='/india']").scrollIntoView({duration: 2000})
        cy.get("a[href='/india']").should("be.visible")

        cy.get("a[href='/albania']").scrollIntoView({duration: 2000})
        cy.get("a[href='/albania']").should("be.visible")

        cy.get("[class='footer']").scrollIntoView({duration:2000})
    })

    it("Mouse actions: focus", () =>{
        cy.visit("https://vinothqaacademy.com/")

        cy.get("a[href='https://vinothqaacademy.com/']").first().focus()
        cy.get("a[href='https://vinothqaacademy.com/']").first().should("have.focus")
    })

    it("Mouse actions: click", () =>{
        cy.visit("https://vinothqaacademy.com/")

        cy.get(".header_main_menu_wrapper > .collapse > .header-menu > .menu-item-6372 > :nth-child(1)").trigger("mouseover")
        cy.get(".menu-item-6373").first().trigger("mouseover", { force: true })
        cy.get("a[href='https://vinothqaacademy.com/demo-site/']").then((el) => {
            // Log to see if the element is hidden
            console.log(el);
          })
          .first().click({ force: true });
    })

    it("Mouse actions: tabs", () =>{
        cy.visit("https://vinothqaacademy.com/")

        cy.get("a[href='https://vinothqaacademy.com/demo-site/']").first()
        .invoke("removeAttr", "target")
        .click({force:true})

        cy.url().should("include", "/demo-site")
        cy.get(".header_main_menu_wrapper > .collapse > .header-menu > .menu-item-6372 > :nth-child(1)").should("be.visible")
    })
})