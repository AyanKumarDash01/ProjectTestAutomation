import HomePage from '../pages/HomePage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';

describe('Flipkart Cart Functionality Tests', () => {
  const homePage = new HomePage();
  const productDetailsPage = new ProductDetailsPage();
  const cartPage = new CartPage();
  const searchTerm = 'laptop';
  const expectedProductTitle = 'Samsung Galaxy Book4 Intel Core i5 13th Gen 1335U';

  beforeEach(() => {
    homePage.visit();
    homePage.performSearch(searchTerm);
    cy.get('a.CGtC98').first().click();
    productDetailsPage.clickAddToCart();
    cartPage.navigateToCart();
  });

  it('should verify product in cart', () => {
    cartPage.verifyProductInCart(expectedProductTitle);
    cartPage.verifyCartCount('1');
  });
});