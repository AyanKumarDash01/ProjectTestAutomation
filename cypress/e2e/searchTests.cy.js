import HomePage from '../pages/HomePage';

describe('Flipkart Search Functionality Tests', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.visit();
  });

  it('should perform a valid search and display results', () => {
    const searchTerm = 'laptop';
    homePage.performSearch(searchTerm);
    cy.url().should('include', `q=${searchTerm}`);
    cy.get('._1AtVbE').should('be.visible'); 
    cy.get('._4rR01T').should('have.length.greaterThan', 0);
  });

  it('should handle invalid search term gracefully', () => {
    const invalidSearchTerm = 'xyz123invalid';
    homePage.performSearch(invalidSearchTerm);
    cy.url().should('include', `q=${invalidSearchTerm}`);
    cy.get('._2M8cLY').should('contain', 'No results found');
  });

  it('should handle empty search term', () => {
    homePage.performSearch('');
    cy.url().should('not.include', 'q=');
    cy.get('._2M8cLY').should('be.visible');
  });

  it('should verify search suggestions appear while typing', () => {
    const searchTerm = 'phone';
    homePage.typeSearchTerm(searchTerm);
    cy.get('._2x2Mmc').should('be.visible');
    cy.get('._2x2Mmc li').should('have.length.greaterThan', 0);
  });
});