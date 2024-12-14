describe("Handling alert box", ()=>{

    //Javascript Alert : It have text and Ok button

it("Javascript Alert : It have text and Ok button", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();

    cy.on("window:alert", (t) => {
      expect(t).to.contain("I am a JS Alert");
    });

    //Alert window automatically close by cypress

    //Validate the text
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  //Javascript confirm alert - ok button
  it("Javascript confirm Alert - ok button ", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on("window:confirm", (t) => {
      expect(t).to.contain("I am a JS Confirm");
    });

    //Alert window automatically close by cypress by pressing ok button.

    //Validate the text
    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("Javascript confirm Alert -cancel button", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on("window:confirm", (t) => {
      expect(t).to.contain("I am a JS Confirm");
    });

    //This will click the cancel button
    cy.on("window:confirm", () => false);

    //Validate the text
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  //Javascript Prompt
  it("Javascript Prompt Alert -Set the value in to the field", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Hi !");
    });

    cy.get("button[onclick='jsPrompt()']").click();

    //Validate the text
    cy.get("#result").should("have.text", "You entered: Hi !");
  });

  it("Authenticated alert Approach 1", () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: {
        username: "admin",
        password: "admin",
      },
    });
  
    cy.get("div[class='example'] p").should("have.contain", "Congratulations");
  });

  it("Authenticated alert Approach 2", () => {
    //https://username:password@the-internet.herokuapp.com/basic_auth

    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");

    cy.get("div[class='example'] p").should("have.contain", "Congratulations");
  });

})


