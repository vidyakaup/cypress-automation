describe('CSSLocators', ()=>{

it("CSSLocator", () =>{


  cy.visit("https://www.meesho.com/")

  cy.get("input[placeholder='Try Saree, Kurti or Search by Product Code']").type("T-shirts for kids")
  cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)").click()
  
})


})