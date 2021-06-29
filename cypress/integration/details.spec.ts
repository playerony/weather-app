describe('details', () => {
  beforeEach(() => {
    cy.intercept('**/query?function=OVERVIEW&symbol=BA*', {
      fixture: 'details/ba.mock.json',
    }).as('get-details-ba');

    cy.viewport('macbook-16');
    cy.visit('/BA');
  });

  it('should contain go back button', () => {
    cy.visit('/XAB');

    cy.get('button').contains('Go Back').click();

    cy.url().should('eq', 'http://localhost:3000/BA');
  });

  it('should display proper information about selected company', () => {
    cy.get('[data-test-id=company-details] h1').contains('The Boeing Company');

    cy.get('[data-test-id=address]').contains('Address: 100 North Riverside Plaza, Chicago');

    cy.get('[data-test-id=market-capitalization]').contains(
      'Market Capitalization: 141.68 billion',
    );

    cy.get('[data-test-id=company-details] p').contains('The Boeing Company Description');
  });
});
