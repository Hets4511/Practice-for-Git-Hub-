
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');

class CommonMethod {

    constructor(page) {

        this.page = page;

      
        this.homePage = new HomePage(page);
        this.loginPage = new LoginPage(page);
    }

    async openApplication(url) {
        await this.page.goto(url);
    }

    async openLoginPage() {
        await this.homePage.signupLoginButton.click();
    }

  
    async login(email, password) {

        await this.loginPage.emailInput.fill(email);

        await this.loginPage.passwordInput.fill(password);

        await this.loginPage.loginButton.click();
    }

   
    async verifyLoginPage() {

        await this.loginPage.verifyLoginHeading();

        await this.loginPage.verifyEmailInput();

        await this.loginPage.verifyPasswordInput();

        await this.loginPage.verifyLoginButton();
    }


    async verifyLoggedInUser() {

        await this.homePage.verifyLoggedInAsUsername();
    }

  
    async deleteAccount() {

        await this.homePage.deleteAccountButton.click();
    }

  
    async verifyAccountDeleted() {

        await this.homePage.verifyAccountDeleted();
    }
}

module.exports = CommonMethod;