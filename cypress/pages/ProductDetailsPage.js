class ProductDetailsPage {
  // Elements
  getProductTitle() {
    return cy.get('span.VU-ZEz');
  }

  getProductPrice() {
    return cy.get('div.Nx9bqj.CxhGGd');
  }

  getOriginalPrice() {
    return cy.get('div.yRaY8j.A6+E6v');
  }

  getDiscount() {
    return cy.get('div.UkUFwK.WW8yVX span');
  }

  getRating() {
    return cy.get('div.Y1HWO0');
  }

  getRatingsCount() {
    return cy.get('span.Wphh3N');
  }

  getSpecifications() {
    return cy.get('ul.G4BRas li.J+igdf');
  }

  getAddToCartButton() {
    return cy.get('button._2KpZ6l._2U9uOA._3v1-ww'); 
  }

  getProductImage() {
    return cy.get('img.DByuf4'); 
  }

  // Actions
  verifyProductTitle(expectedTitle) {
    this.getProductTitle().should('contain', expectedTitle);
  }

  verifyProductPrice(expectedPrice) {
    this.getProductPrice().should('contain', expectedPrice);
  }

  verifyDiscountExists() {
    this.getDiscount().should('be.visible').and('contain', '% off');
  }

  verifyRating(expectedRating) {
    this.getRating().should('contain', expectedRating);
  }

  verifyRatingsCount() {
    this.getRatingsCount().should('be.visible').and('contain', 'Ratings');
  }

  verifySpecificationsExist() {
    this.getSpecifications().should('have.length.greaterThan', 0);
  }

  clickAddToCart() {
    this.getAddToCartButton().click();
  }

  verifyProductImage() {
    this.getProductImage().should('be.visible').and('have.attr', 'src').and('not.be.empty');
  }

  zoomProductImage() {
    this.getProductImage().trigger('mouseover'); 
  }

  getAddToCartButton() {
    return cy.get('button.QqFHMw.vslbG+.In9uk2');
  }
}

export default ProductDetailsPage;