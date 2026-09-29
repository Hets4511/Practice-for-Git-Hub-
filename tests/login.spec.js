const { test, expect } = require('@playwright/test');

test.describe('Login Tests', () => {

    test('Verify Login Page', async ({ page }) => {

        await page.goto('https://www.automationexercise.com/login');

        await expect(page.getByText('Login to your account')).toBeVisible();

    });

    test('Login with invalid credentials', async ({ page }) => {

        await page.goto('https://www.automationexercise.com/login');

        await page.getByPlaceholder('Email Address').first().fill('wrong@gmail.com');

        await page.getByPlaceholder('Password').fill('wrong123');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect( page.getByText('Your email or password is incorrect!')).toBeVisible();});

});