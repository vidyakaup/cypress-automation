describe("File Upload Test", () => {
    it("Uploads a file successfully", () => {
        cy.visit("https://the-internet.herokuapp.com/upload");

        const fileName = "cmd.png"

        cy.get("#file-upload").attachFile(fileName); 

        
        cy.get("#file-submit").click();

        
        cy.get("h3").should("have.text", "File Uploaded!");
        cy.get("#uploaded-files").should("contain.text", fileName);
    });
});
