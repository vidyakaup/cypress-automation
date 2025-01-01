describe("Testing Popup Window", () =>{
 
    beforeEach( () =>{

        cy.visit("https://vinothqaacademy.com/alert-and-popup/")
    })

    it("Handling Alerts Box - Method 1", () =>{
        cy.get("button[name='alertbox']").click()

        cy.on("window:alert", alertText =>{

            expect(alertText).to.eql("I am an alert box!")
        })
    })

    it("Handling ALerts - using cy.stub()method", () =>{

        const fn = cy.stub()

        cy.on("window:alert", fn)

        cy.get("button[name='alertbox']").click().then ( () =>{

            expect(fn.getCall(0)).to.be.calledWithExactly("I am an alert box!")
            
        })

    })

    it("Handling confirmation alert box method 1", () => {

        cy.get("button[name = 'confirmalertbox']").click()

        cy.on("window:confirm", confirmTxt => {

            expect(confirmTxt).to.eql("Confirm pop up with OK and Cancel button")

          return false // return true
            
        })
    })

    it("Handling confirmation alert box method 2", () => {

        const stub = cy.stub()

        stub.onFirstCall().returns(true)

        cy.on("window:confirm", stub)

        cy.get("button[name = 'confirmalertbox']").click().then ( () =>{

            expect(stub.getCall(0)).to.be.calledWithExactly("Confirm pop up with OK and Cancel button")
            
        })

        
    })

    it("Handling prompt alerts", () =>{

        cy.window().then (win =>{

            const stub = cy.stub(win, "prompt")
            stub.returns("Yes")
            cy.get("button[name ='promptalertbox1234']").click()
        })
    })

    /*it.only("Handling custom hidden alerts", () =>{

        cy.visit("https://the-internet.herokuapp.com/basic_auth", {

            auth: {
                username: "admin",
                password: "admin",
              },

        })
        
    })*/
 it("Handling popup window", () =>{

    cy.get("button[name = 'confirmalertbox']").click()
    cy.contains("OK").click()//cy.contains ("Cancel")


 })

 it("Handling window popup", () => {

    const pop_url = "https://www.youtube.com/@QABoxLetsTest"
 })


 

})