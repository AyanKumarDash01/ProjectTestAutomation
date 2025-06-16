import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

describe('Flipkart Login Functionality Tests', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const phoneNumber = '6291736097';
  const mockOtp = '123456';

  beforeEach(() => {
    homePage.visit();
    homePage.clickLogin();
    cy.url().should('include', '/account/login');
  });

  it('should request OTP successfully', () => {
    loginPage.enterEmailPhone(phoneNumber);
    loginPage.clickRequestOtp();
    loginPage.verifyOtpSentMessage(phoneNumber);
  });

  it('should login successfully with valid OTP', () => {
    loginPage.enterEmailPhone(phoneNumber);
    loginPage.clickRequestOtp();
    loginPage.enterOtp(mockOtp);
    loginPage.clickVerify();
    loginPage.verifyLoginSuccess();
  });

  it('should display error for invalid phone number', () => {
    loginPage.enterEmailPhone('invalid_number');
    loginPage.clickRequestOtp();
    loginPage.verifyErrorMessage('Please enter valid Email ID/Mobile Number');
  });
});