class CartPage {
  // Elements
  getCartLink() {
    return cy.get('a._9Wy27C'); // Cart icon in header
  }


  getCartCount() {
    return cy.get('div.ZuSA--'); // Cart item count badge
  }

  getProductTitle() {
    return cy.get('a.T2CNXf.QqLTQ-'); // Product title in cart
  }

  getOriginalPrice() {
    return cy.get('span.LAlF6k.KkRCni'); // Original price
  }

  getDiscountedPrice() {
    return cy.get('span.LAlF6k.re6bBo'); // Discounted price
  }

  getDiscount() {
    return cy.get('span._9hLNY4'); // Discount percentage
  }

  getAdditionalFee() {
    return cy.get('span.S8Gg9h'); // Protect Promise Fee
  }

  getProductImage() {
    return cy.get('img._4qMbau.CwNMnK'); // Product image
  }

  getPlaceOrderButton() {
    return cy.get('button.QqFHMw.zA2EfJ._7Pd1Fp'); // Place Order button
  }

  getRemoveItemButton() {
    return cy.get('button:contains("Remove")');
  }

  getQuantitySelector() {
    return cy.get('select[data-qa="quantity"]'); 
  }

  // Actions

  
  navigateToCart() {
    this.getCartLink().click();
  }

  verifyCartCount(expectedCount) {
    this.getCartCount().should('contain', expectedCount);
  }

  verifyProductInCart(expectedTitle) {
    this.getProductTitle().should('contain', expectedTitle);
  }

  verifyPrices(originalPrice, discountedPrice) {
    this.getOriginalPrice().should('contain', originalPrice);
    this.getDiscountedPrice().should('contain', discountedPrice);
  }

  verifyDiscountExists() {
    this.getDiscount().should('be.visible').and('contain', '% Off');
  }

  verifyAdditionalFee(expectedFee) {
    this.getAdditionalFee().should('contain', expectedFee);
  }

  verifyProductImage() {
    this.getProductImage().should('be.visible').and('have.attr', 'src').and('not.be.empty');
  }

  removeItem() {
    this.getRemoveItemButton().click();
  }

  updateQuantity(quantity) {
    this.getQuantitySelector().select(quantity);
  }

  clickPlaceOrder() {
    this.getPlaceOrderButton().click();
  }

  verifyEmptyCart() {
    cy.contains('Your cart is empty').should('be.visible'); 
  }
}

export default CartPage;