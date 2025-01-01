context("Page Resposive Test", () =>{
    it("Browserstack page", () =>{
        cy.visit("https://www.browserstack.com/")
       cy.contains("App & Browser Testing Made Easy").should("be.visible")
    })
   
    it("Browserstack page using iphone-x", () =>{
   
       cy.viewport('iphone-6')   
      cy.visit("https://www.browserstack.com/")
       cy.contains("App & Browser Testing Made Easy").should("be.visible")
   
   
    })
   
    it("Browserstack page using iphone-3", () =>{
   
       cy.viewport('iphone-3')   
       cy.visit("https://www.browserstack.com/")
       cy.contains("App & Browser Testing Made Easy").should("be.visible")
   
   
    })
   
    it("Browserstack page using Macbook 13", () =>{
   
       cy.viewport('macbook-13')   
       cy.visit("https://www.browserstack.com/")
       cy.contains("App & Browser Testing Made Easy").should("be.visible")
   
   
    })
   
   })