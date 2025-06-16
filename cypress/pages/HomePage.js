class HomePage {
  // URL for Flipkart homepage
  visit() {
    cy.visit('https://www.flipkart.com');
  }

  // Elements
  getSearchInput() {
    return cy.get('input.Pke_EE');
  }

  getSearchButton() {
    return cy.get('button._2iLD__');
  }

  getCategoryMenu() {
    return cy.get('a.vbCXhM img[alt="Menu"]'); 
  }

  getLoginLink() {
    return cy.get('a[title="Login"]');
  }

  getCartLink() {
    return cy.get('a[title="Cart"]');
  }

  // Actions
  performSearch(searchTerm) {
    this.getSearchInput().type(searchTerm);
    this.getSearchButton().click();
  }

  typeSearchTerm(searchTerm) {
    this.getSearchInput().type(searchTerm);
  }

  navigateToCategory(categoryName) {
    this.getCategoryMenu().click();
    cy.contains(categoryName).click(); 
  }

  clickLogin() {
    this.getLoginLink().first().click();
  }

  clickCart() {
    this.getCartLink().click();
  }

  getLoginLink() {
    return cy.get('a[title="Login"]');
  }

  clickLogin() {
    this.getLoginLink().first().click();
  }
  
}
export default HomePage;