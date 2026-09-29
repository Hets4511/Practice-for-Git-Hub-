const { test, expect } = require('@playwright/test');

test.describe('Product Tests', () => {

    test('TC01 - Verify Products Page', async ({ page }) => {

        await page.goto('https://www.automationexercise.com/products');

        await expect(page.getByText('All Products')).toBeVisible();

    });

   /* test('TC02 - Search Product', async ({ page }) => {

        await page.goto('https://www.automationexercise.com/products'); 

        await page.getByPlaceholder('Search Product').fill('Blue Top');

        await page.getByRole('button', { name: 'Search' }).click();

        await expect(page.getByText('Blue Top')).toBeVisible();
        });*/

    test('TC03 - Open Product Details', async ({ page }) => {

        await page.goto('https://www.automationexercise.com/products');

        await page.getByText('View Product').first().click();

        await expect(page.getByText('Blue Top')).toBeVisible();});

});