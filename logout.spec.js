const { test, expect } = require('@playwright/test');

test.describe('Automation Exercise - Other Scenarios', () => {


// Test Case 4 - Logout User
test('Logout User', async ({ page }) => {

    await page.goto('https://www.automationexercise.com/login');

    // Login
    await page.getByPlaceholder('Email Address').first().fill('your_email@gmail.com');
    await page.getByPlaceholder('Password').fill('your_password');
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify user is logged in
    await expect(page.getByText(/Logged in as/)).toBeVisible();

    // Logout
    await page.getByRole('link', { name: 'Logout' }).click();

    // Verify login page
    await expect(page.getByText('Login to your account')).toBeVisible();
    await expect(page).toHaveURL(/\/login/);
});


// Test Case 5 - Register with existing email
test('Register User with Existing Email', async ({ page }) => {

    await page.goto('https://www.automationexercise.com/login');

    // Verify New User Signup section
    await expect(page.getByText('New User Signup!')).toBeVisible();

    // Enter existing email
    await page.getByPlaceholder('Name').fill('Hetal');
    await page.getByPlaceholder('Email Address').last().fill('your_registered_email@gmail.com');

    // Click Signup
    await page.getByRole('button', { name: 'Signup' }).click();

    // Verify error message
    await expect(
        page.getByText('Email Address already exist!')
    ).toBeVisible();
});


// Test Case 6 - Contact Us
test('Contact Us Form', async ({ page }) => {

    await page.goto('https://www.automationexercise.com/');

    // Click Contact Us
    await page.getByRole('link', { name: 'Contact us' }).click();

    // Verify Contact Us page
    await expect(page.getByText('GET IN TOUCH')).toBeVisible();

    // Fill contact form
    await page.getByPlaceholder('Name').fill('Hetal');

    await page.getByPlaceholder('Email', { exact: true })
        .fill('hetal@test.com');

    await page.getByPlaceholder('Subject').fill('Automation Testing');

    await page.getByPlaceholder('Your Message Here')
        .fill('This is a Playwright automation test.');

    // Handle confirmation dialog
    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    // Submit form
    await page.getByRole('button', { name: 'Submit' }).click();

    // Verify success message
    await expect(
        page.getByText(
            'Success! Your details have been submitted successfully.'
        )
    ).toBeVisible();
});


// Test Case 7 - Verify Test Cases Page
test('Verify Test Cases Page', async ({ page }) => {

    await page.goto('https://www.automationexercise.com/');

    // Click Test Cases
    await page.getByRole('link', { name: 'Test Cases' }).click();

    // Verify URL
    await expect(page).toHaveURL(/\/test_cases/);

    // Verify Test Cases heading
    await expect(page.getByText('Test Cases')).toBeVisible();
});


// Test Case 10 - Verify Subscription
test('Verify Subscription on Home Page', async ({ page }) => {

    await page.goto('https://www.automationexercise.com/');

    // Scroll to bottom
    await page.locator('footer').scrollIntoViewIfNeeded();

    // Verify Subscription
    await expect(page.getByText('SUBSCRIPTION')).toBeVisible();

    // Enter email
    await page.getByPlaceholder('Your email address')
        .fill('hetal@test.com');

    // Click arrow button
    await page.locator('#subscribe').click();

    // Verify success message
    await expect(
        page.getByText('You have been successfully subscribed!')
    ).toBeVisible();
});

});
