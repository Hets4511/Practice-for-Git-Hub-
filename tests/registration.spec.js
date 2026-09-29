const { test, expect } = require('@playwright/test');

test.describe('Registration Tests', () => {

    test('Verify Registration Page', async ({ page }) => {

        await page.goto('https://www.automationexercise.com/login');

        await expect(page.getByText('New User Signup!')).toBeVisible();

    });

    test('Register New User', async ({ page }) => {

        await page.goto('https://www.automationexercise.com/login');

        await page.getByPlaceholder('Name').fill('Hetal');

        await page.getByPlaceholder('Email Address').last().fill('hetal12345@gmail.com');

        await page.getByRole('button', { name: 'Signup' }).click();

        await expect(page.getByText('Enter Account Information')).toBeVisible();});

});