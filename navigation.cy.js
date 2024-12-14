describe("backward and forward avigation buttons", () =>{

    it("backward forward button test",() =>{
        cy.visit("https://automationpanda.com/2021/12/29/want-to-practice-test-automation-try-these-demo-sites/")
        cy.contains("About").click()
        .go('back')
        cy.wait(200)
        .go('forward')
    })
})