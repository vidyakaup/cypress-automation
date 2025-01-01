import HomePage from "../support/pages/bootstrap";

describe("Home Page Form Automation", () => {
  const homePage = new HomePage();

  beforeEach(() => {
    // Visit the webpage
    cy.visit("https://mytestingthoughts.com/Sample/home.html");
  });

  it("should fill out and submit the form successfully", () => {
    // Input data
    const firstName = "John";
    const lastName = "Doe";
    const gender = "Male"; // Options: "male" or "female"
    const hobbies = ["Reading", "Singing"]; // Select as per available options
    const country = "United States";
    const dob = "1990-01-01"; // Adjust format as needed

    // Fill out the form
    homePage.enterFirstName(firstName);
    homePage.enterLastName(lastName);
    homePage.selectGender(gender);
    hobbies.forEach((hobby) => homePage.selectHobby(hobby));
    homePage.selectCountry(country);
    homePage.enterDateOfBirth(dob);

    // Submit the form
    homePage.clickSubmit();

    // Assert successful submission
    cy.url().should("include", "thank-you"); // Example: Adjust based on the actual URL or success message
  });
});
