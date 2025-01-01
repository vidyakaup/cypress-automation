describe('Automate Registration Form', () => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test
            return false; 
        })
    })

    beforeEach(() => {
      // Visit the registration page
      cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    });
  
    it('should complete the registration form', () => {
      // Fill out the form
      cy.get('input[name="customer.firstName"]').type('Pooja');
      cy.get('input[name="customer.lastName"]').type('Gandi');
      cy.get('input[name="customer.address.street"]').type('123 5th block');
      cy.get('input[name="customer.address.city"]').type(' Test City');
      cy.get('input[name="customer.address.state"]').type('Test state');
      cy.get('input[name="customer.address.zipCode"]').type('1234567');
      cy.get('input[name="customer.phoneNumber"]').type('1234567890');
      cy.get('input[name="customer.ssn"]').type('1234567890')
      cy.get('input[name="customer.username"]').type('test123@test123.com')
      cy.get('input[name="customer.password"]').type('test123@test123')
      cy.get('input[name="repeatedPassword"]').type('test123@test123')     
      cy.get('[colspan="2"] > .button').first().click()
  
     
    });

    it("Verify whether user can get validation message when all field are blank", () =>{

      cy.get('[colspan="2"] > .button').first().click()

      cy.contains('First name is required.').should('be.visible')
      cy.contains('Last name is required.').should('be.visible')
      cy.contains('Address is required.').should('be.visible')
      cy.contains('City is required.').should('be.visible')
      cy.contains('State is required.').should('be.visible')
      cy.contains('Zip Code is required.').should('be.visible')
      cy.contains('Social Security Number is required.').should('be.visible')
      cy.contains('Username is required.').should('be.visible')
      cy.contains('Password is required.').should('be.visible')
      cy.contains('Password confirmation is required.').should('be.visible')

    })

    it("Verify username field with alreday used username", () =>{

      cy.get('input[name="customer.firstName"]').type('Pooja');
      cy.get('input[name="customer.lastName"]').type('Gandi');
      cy.get('input[name="customer.address.street"]').type('123 5th block');
      cy.get('input[name="customer.address.city"]').type(' Test City');
      cy.get('input[name="customer.address.state"]').type('Test state');
      cy.get('input[name="customer.address.zipCode"]').type('1234567');
      cy.get('input[name="customer.phoneNumber"]').type('1');
      cy.get('input[name="customer.ssn"]').type('1234567890')
      cy.get('input[name="customer.username"]').type('test123@test123.com')
      cy.get('input[name="customer.password"]').type('test123@test123')
      cy.get('input[name="repeatedPassword"]').type('test123@test123')     
          
      cy.get('[colspan="2"] > .button').first().click()

      cy.contains('This username already exists.').should('be.visible')

    })

    it("verify password fields", () =>{

      cy.get('input[name="customer.firstName"]').type('Pooja');
      cy.get('input[name="customer.lastName"]').type('Gandi');
      cy.get('input[name="customer.address.street"]').type('123 5th block');
      cy.get('input[name="customer.address.city"]').type(' Test City');
      cy.get('input[name="customer.address.state"]').type('Test state');
      cy.get('input[name="customer.address.zipCode"]').type('1234567');
      cy.get('input[name="customer.phoneNumber"]').type('1');
      cy.get('input[name="customer.ssn"]').type('1234567890')
      cy.get('input[name="customer.username"]').type('test123@test123.com')
      cy.get('input[name="customer.password"]').type('test123@test123')
      cy.get('input[name="repeatedPassword"]').type('test1234@test123')     
          
      cy.get('[colspan="2"] > .button').first().click()

      cy.contains('Passwords did not match').should('be.visible')

    })
  });
  