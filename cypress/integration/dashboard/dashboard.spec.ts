const fakeLocation = (latitude: number, longitude: number) => ({
  onBeforeLoad(win: any) {
    cy.stub(win.navigator.geolocation, 'getCurrentPosition', (callback, error) => {
      if (latitude && longitude) {
        return callback({ coords: { latitude, longitude } });
      }

      throw error({ code: 1 });
    });
  },
});

describe('Dashboard Page', () => {
  beforeEach(() => {
    cy.intercept('**/data/2.5/forecast?q=Cracow*', {
      fixture: 'forecast/cracow.mock.json',
    }).as('get-cracow-forecast');

    cy.intercept('**/data/2.5/forecast?q=Gliwice*', {
      fixture: 'forecast/gliwice.mock.json',
    }).as('get-gliwice-forecast');

    cy.intercept('**/data/2.5/forecast?lat=40&lon=40*', {
      fixture: 'forecast/geolocation.mock.json',
    }).as('get-geolocation-forecast');

    cy.viewport('macbook-16');
    cy.visit('/', fakeLocation(40, 40));
  });

  it('should search for weather by city name', () => {
    cy.wait(['@get-geolocation-forecast']);
    cy.get('[data-test-id="search-for-city-input"]').should('be.visible').type('Cracow');

    cy.wait(['@get-cracow-forecast']);
    cy.get('[data-test-id="weather-list"]').should('have.length', 3);
    cy.get('h1').should('be.visible').contains('Weather for: Krakow');

    cy.get('[data-test-id="search-for-city-input"]').should('be.visible').clear().type('Gliwice');

    cy.wait(['@get-gliwice-forecast']);
    cy.get('[data-test-id="weather-list"]').should('have.length', 3);
    cy.get('h1').should('be.visible').contains('Weather for: Gliwice');
  });
});

export {};
