import HomePage from '../pages/HomePage';
import ProductDetailsPage from '../pages/ProductDetailsPage';

describe('Flipkart Product Details Page Tests', () => {
  const homePage = new HomePage();
  const productDetailsPage = new ProductDetailsPage();
  const searchTerm = 'laptop';
  const expectedProductTitle = 'Samsung Galaxy Book4 Intel Core i5 13th Gen 1335U';
  const expectedPrice = '₹58,490';
  const expectedRating = '4.5';

  beforeEach(() => {
    // Visit Flipkart homepage and perform a search
    homePage.visit();
    homePage.performSearch(searchTerm);
    cy.get('a.CGtC98').first().click();
  });

  it('should validate product title', () => {
    productDetailsPage.verifyProductTitle(expectedProductTitle);
  });

  it('should validate product price and discount', () => {
    productDetailsPage.verifyProductPrice(expectedPrice);
    productDetailsPage.verifyDiscountExists();
  });

  it('should validate product rating and ratings count', () => {
    productDetailsPage.verifyRating(expectedRating);
    productDetailsPage.verifyRatingsCount();
  });

  it('should validate product specifications', () => {
    productDetailsPage.verifySpecificationsExist();
  });

  it('should validate product image is visible', () => {
    productDetailsPage.verifyProductImage();
  });

  it('should add product to cart', () => {
    productDetailsPage.clickAddToCart();
    cy.get('a[title="Cart"]').should('be.visible');
  });
});