/// <reference types="Cypress" />

describe('CC Pay Verification', () => 
{
        Cypress.on('uncaught:exception', (err, runnable) => 
        {
            // returning false here prevents Cypress from 
            // failing the test
            return false
            
        })
        function repeat(){
                cy.get('#welcome-data').click().wait(300)
                .url().should('contain', 'signin.html')
                .get('[name="login"]').type('rsharma@sarvika.com')
                .get('#password').type('password23')
                .get('[value="Login"]').click().wait(300)
                .get(':nth-child(2) > .search-form-btn').click()
                .get('#key').type('TAN0011{enter}').wait(300)
                .url().should('contain', 'storeitem.html')
                cy.contains('Add to Cart').click().wait(300)
                .url().should('contain', 'basket.html')
                .get('#checkoutbtn').click().wait(300)
                .url().should('contain', 'yourinfo.html')
                .get('[value="Continue"]').click().wait(300)
                // .get('.form-group > .btn-teal').click().wait(300)
                .get('#paymentGateway > :nth-child(5) > label').click().wait(900)
                .get('#continueButton').click()
                .get('u > a').click().wait(3000)
cy.window().then((win)=>{
    
})
            }
     
   
   it('CCPAY_Auth_IPN_DNU', function() 
            
    {
        cy.visit('https://www.mypromomall.com/preview/store.html?vid=20201202450')
        repeat()
        cy.get('#name').type('test')
    })
  
     it('CCPAY_Auth_DNU', function() 
  
    {
        cy.visit('https://www.mypromomall.com/preview/store.html?vid=20201202449')
        repeat()
        cy.get('#name').type('test')
          .get('#card').type('4111111111111111')
          .get('#month').select('FEB')
          .get('#year').select('2025')
          .get('input.btn').click().wait(6000)
            .url().should('contain', 'revieworder.html')
            .get('#placeord').click().wait(300)
            .url().should('contain', 'ordercompleted.html')

    }) 

   /*  it('CCPAY_QA_CENPOS_DNU', function() 
  
    {
        cy.visit('https://www.mypromomall.com/preview/store.html?vid=20210303755')
        repeat()
        cy.get('#name').type('test')
        
    }) */
})

