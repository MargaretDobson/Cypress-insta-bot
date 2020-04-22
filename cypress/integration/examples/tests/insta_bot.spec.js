describe('Instagram robot', () => {

    const randomWaitTime = Math.floor((Math.random() * 10) + 1000);
    const password = Cypress.env('password');
    const username = Cypress.env('username');
    const searchTerm = 'softwaredeveloper'

    it('Visits instagram.com', () => {
      cy.wait(randomWaitTime);
      cy.clearCookies();
      cy.wait(randomWaitTime);
      cy.visit('https://www.instagram.com/accounts/login/?hl=en');
    });

    it('logs in', () => {
      cy.get('#react-root > section > main > div > article > div > div > div > form > div > div > label > input').eq(0).type(username);
      cy.wait(randomWaitTime);
      cy.get('#react-root > section > main > div > article > div > div > div > form > div > div > label > input').eq(1).type(password);
      cy.wait(randomWaitTime);
      cy.get('#react-root > section > main > div > article > div > div > div > form > div').eq(3).click();
    });

    it('searches for relevent hashtags', () => {
      cy.wait(randomWaitTime);
      cy.contains('Not Now').click();
      cy.wait(randomWaitTime);
      cy.get('#react-root > section > nav > div').eq(1)
      .get('div > div > div')
      .eq(1).get('div > input')
      .eq(0).click({ force: true }).type(searchTerm);
      cy.wait(randomWaitTime);
      cy.get('#react-root > section > nav > div > div > div > div > div > div > div > a > div').eq(0).click();
      
    });
    it('Likes some posts', () => {
      cy.wait(randomWaitTime);
      cy.get('#react-root > section > main > article > div > div > div > div').eq(2).click()
      cy.wait(randomWaitTime);

      let i = 5;
      while (i == 5){
        cy.get('article > div > section > span > button').eq(0).click();
        cy.contains('Next').click();
        cy.wait(randomWaitTime);
        i - 1;
      }
     
    });
  });