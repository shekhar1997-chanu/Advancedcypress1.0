/*
Types: 
1.Implicit assertions -Built n assertions
should
and
2.Explicit assertions
expect - it used in BDD type 
assert -It is used in TDD type 
*/

describe('Assertions Demo',()=>{

    it('implicit assertions',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')


        //Trick: In above cy.url().should used multiple times, Instead of using rpeated we can use as below mention
        cy.url().should('include','orangehrmlive')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')

        //we can use 'and' key word instead "should"
        cy.url().should('include','orangehrmlive')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')

        //Negative Assertions
        cy.url().should('not.include','greenhrmlive')
        cy.url().should('not.contain','greenhrm')
        cy.url().should('not.eq','https://opensource-demo.greenhrmlive.com/web/index.php/auth/login')


        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')


        cy.get('[alt="company-branding"]').should('be.visible')
        .and('exist')


        cy.xpath('//a').should('have.length','5')

        cy.get('[placeholder="Username"]').type('Admin').should('have.value','Admin')
        cy.get('[placeholder="Password"]').type('admin123').should('have.value','admin123')

    })

})