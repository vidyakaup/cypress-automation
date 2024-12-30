import RegForm from '../pages/RegForm';

describe("Page Object Model", function() {

  it("Valid test data", function() {

    const rf = new RegForm();
    rf.visit(); 
    rf.fillFirstName("John")
    rf.fillLastName("Robert")
    rf.selectGender("Male")
    rf.selectHobbies("Reading")
    rf.selectDepartment("MCR")
    rf.fillUsername("john123456")
    rf.fillPwd("Automation@123")
    rf.fillConfPwd("Automation@123")
    rf.fillEmail("john@testauto123.com")
    rf.fillPhone("(415)8265412")
    rf.fillAdditionalInfo("NA")
    rf.submit()
  });

});
