describe("OrangeHRM Demo Form - Data Driven Testing", () => {
    beforeEach(() => {
      cy.visit("https://www.orangehrm.com/hris-hr-software-demo/");

      Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test on certain exceptions
        if (err.message.includes('popover is not a function') || err.message.includes('oldInputs is not defined')) {
          return false; // Returning false prevents Cypress from failing the test
        }
        return true; // Default behavior for other errors
      })
    });
  
    it("Submit the demo form with multiple data sets", () => {
      cy.fixture("orangehrm").then((testData) => {
        testData.forEach((data) => {
          // Fill out the form
          cy.get("#Form_getForm_FullName").clear().type(`${data.firstName} ${data.lastName}`);
          cy.get("#Form_getForm_CompanyName").clear().type(data.company);
         
          cy.get("#Form_getForm_Email").clear().type(data.email);
          cy.get("#Form_getForm_Contact").clear().type(data.phone);
  
          // Select Country
          cy.get("#Form_getForm_Country").select(data.country).should("have.value", data.country);
  
          // Select Number of Employees
          cy.get("#Form_getForm_NoOfEmployees")
            .select(data.numberOfEmployees)
            .should("have.value", data.numberOfEmployees);
            cy.pause()
  
          // Submit the form
          cy.get("#Form_getForm_action_submitForm").click();
  
          // Verify the thank you page or confirmation message
          cy.url().should("include", "/thank-you");
          cy.get("h1").should("contain.text", "Thank you");
  
          // Reload the page for the next data set
          cy.visit("https://www.orangehrm.com/hris-hr-software-demo/");
        });
      });
    });
  });
  