class LoginPage {

    constructor(page) {
        this.page = page;

        this.loginHeading = page.getByRole('heading', {name: 'Login to your account' });

        this.emailInput = page.getByPlaceholder('Email Address');

        this.passwordInput = page.getByPlaceholder('Password');

        this.loginButton = page.getByRole('button', {name: 'Login'});
    }

      async verifyLoginPage() {
        await expect(this.loginHeading).toBeVisible();
    }

    async verifyEmailInput() {
        await expect(this.emailInput).toBeVisible();
    }
    async enterEmail(email) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async login(email, password) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async verifyPasswordInput() {
        await expect(this.passwordInput).toBeVisible();
    }

    async verifyLoginButton() {
        await expect(this.loginButton).toBeVisible();
    }
}

module.exports = LoginPage;