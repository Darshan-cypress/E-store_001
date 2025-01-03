describe('smoke Testing', () => {
    it('loginpage', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy.fixture('login').then((data)=>{
            cy.get('input[name="username"]').type(data.username)
            cy.get('input[type="password"]').type(data.password)
            cy.get('button[type="submit"]').click()
            cy.get('a[href="/web/index.php/leave/viewLeaveModule"]').click()
        })

    })   
})