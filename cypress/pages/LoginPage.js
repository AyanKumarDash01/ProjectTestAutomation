class LoginPage {
  // Elements
  getEmailPhoneInput() {
    return cy.get('input[placeholder="Enter Email/Mobile number"]', { timeout: 10000 })
      .should('be.visible');
  }

  getRequestOtpButton() {
    return cy.get('button.QqFHMw.twnTnD._7Pd1Fp', { timeout: 10000 });
  }

  getOtpInputs() {
    return cy.get('input.r4vIwl.IX3CMV', { timeout: 10000 });
  }

  getVerifyButton() {
    return cy.get('button.QqFHMw.llMuju.M5XAsp', { timeout: 10000 });
  }

  getChangeNumberLink() {
    return cy.get('a.azBkHf', { timeout: 10000 });
  }

  getResendOtpLink() {
    return cy.get('span.rMF9Z9', { timeout: 10000 });
  }

  getOtpSentMessage() {
    return cy.get('div.r6+Mxy', { timeout: 10000 });
  }

  getErrorMessage() {
    return cy.get('span:contains("Please enter valid Email ID/Mobile Number")', { timeout: 10000 });
  }

  // Actions
  enterEmailPhone(emailPhone) {
    this.getEmailPhoneInput().type(emailPhone);
  }

  clickRequestOtp() {
    this.getRequestOtpButton().click();
  }

  enterOtp(otp) {
    const otpDigits = otp.split('');
    this.getOtpInputs().each(($input, index) => {
      cy.wrap($input).type(otpDigits[index]);
    });
  }

  clickVerify() {
    this.getVerifyButton().click();
  }

  clickChangeNumber() {
    this.getChangeNumberLink().click();
  }

  clickResendOtp() {
    this.getResendOtpLink().click();
  }

  // Assertions
  verifyOtpSentMessage(phoneNumber) {
    this.getOtpSentMessage().should('contain', `Please enter the OTP sent to ${phoneNumber}`);
  }

  verifyLoginSuccess() {
    cy.url().should('not.include', '/account/login');
    cy.get('a[title="Login"]').should('not.exist');
  }

  verifyErrorMessage(expectedMessage) {
    this.getErrorMessage().should('contain', expectedMessage);
  }
}

export default LoginPage;