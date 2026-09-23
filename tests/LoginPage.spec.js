const { test } = require('../fixtures/LoginFixture');

const LoginPageData = require('../data/LoginPageData');


test.describe('Login Module', () => {


    test('TC2 - Login User with correct email and password',
        async ({ common, loginPage, homePage }) => {

            await common.fill(
                loginPage.emailInput,
                LoginPageData.email
            );

            await common.fill(
                loginPage.passwordInput,
                LoginPageData.password
            );

            await common.click(loginPage.loginButton);

            await homePage.verifyLoggedInAsUsername();

        });

    });
