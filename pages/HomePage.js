class HomePage {

    constructor(page) {

        this.page = page;

        this.signupLoginButton = page.getByRole('link', { name: 'Signup / Login'});

        this.loggedInAsUsername = page.getByText('Logged in as');

        this.deleteAccountButton = page.getByRole('link', {name: 'Delete Account'});

        this.accountDeletedMessage = page.getByText('ACCOUNT DELETED!');
    }
      
    async verifyHomePage() {
        await expect(this.homeLink).toBeVisible();
    }

    async verifySignupLoginButton() {
        await expect(this.signupLoginButton).toBeVisible();
    }

    async verifyLoggedInAsUsername() {
        await expect(this.loggedInAsUsername).toBeVisible();
    }

    async verifyDeleteAccountButton() {
        await expect(this.deleteAccountButton).toBeVisible();
    }

    async verifyAccountDeleted() {
        await expect(this.accountDeletedMessage).toBeVisible();
    }
}

module.exports = HomePage;

