describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://trello.com/home')
    //cy.wait(5000)
    cy.contains('Log in').click()
    //debugger
    cy.origin('https://id.atlassian.com', () => {
      
      cy.get('input[id="username"]').type("darshansu9148@gmail.com");
      cy.contains('Continue').click();
      cy.get('input[aria-describedby="password-uid3-helper"]').type('Darshan$123',{ force: true })
      //cy.wait(5000)
      cy.get('button[id="login-submit"]').click({ force: true })
    });

    cy.url().then((url) => {
      console.log(url); // Inspect the output in the console
      cy.visit('https://trello.com/u/darshansu9148/boards')  



    });

  })
})