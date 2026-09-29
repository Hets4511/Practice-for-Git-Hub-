const { test, expect } = require('@playwright/test');

test.describe('Cart, Category, Brand and Review Tests', () => {


// Test Case 17 - Remove Product From Cart
test('Remove Product From Cart', async ({ page }) => {

    await page.goto('https://www.automationexercise.com/');

    // Add first product to cart
    await page.getByText('Add to cart').first().click();

    // Go to cart
    await page.getByText('View Cart').click();

    // Verify cart page
    await expect(page).toHaveURL(/\/view_cart/);

    // Verify product exists
    await expect(page.locator('#cart_info_table')).toBeVisible();

    // Remove product
    await page.locator('.cart_quantity_delete').first().click();

    // Verify cart is empty
    await expect(page.locator('#cart_info_table tbody tr')).toHaveCount(0);
});


// Test Case 18 - View Category Products
test('View Category Products', async ({ page }) => {

    await page.goto('https://www.automationexercise.com/');

    // Verify Categories section
    await expect(page.getByText('CATEGORY')).toBeVisible();

    // Click Women
    await page.getByText('Women').click();

    // Click Tops
    await page.getByText('Tops').click();

    // Verify category page
    await expect(
        page.getByText('Women - Tops Products')
    ).toBeVisible();
});


// Test Case 19 - View Brand Products
test('View Brand Products', async ({ page }) => {

    await page.goto('https://www.automationexercise.com/products');

    // Verify Brands section
    await expect(page.getByText('BRANDS')).toBeVisible();

    // Click Polo brand
    await page.getByText('Polo').click();

    // Verify Polo products page
    await expect(
        page.getByText('Brand - Polo Products')
    ).toBeVisible();

    // Verify products are displayed
    await expect(
        page.locator('.features_items .product-image-wrapper').first()
    ).toBeVisible();
});


// Test Case 21 - Add Review On Product
test('Add Review On Product', async ({ page }) => {

    await page.goto('https://www.automationexercise.com/products');

    // Open first product
    await page.getByText('View Product').first().click();

    // Verify review section
    await expect(
        page.getByText('Write Your Review')
    ).toBeVisible();

    // Fill review details
    await page.getByPlaceholder('Your Name').fill('Hetal');

    await page.getByPlaceholder('Email', { exact: true })
        .fill('hetal@test.com');

    await page.getByPlaceholder('Add Review Here!')
        .fill('This product is good.');

    // Submit review
    await page.getByRole('button', { name: 'Submit' }).click();

    // Verify success message
    await expect(
        page.getByText('Thank you for your review.')
    ).toBeVisible();
});


// Test Case 22 - Add Recommended Product To Cart
test('Add Recommended Product To Cart', async ({ page }) => {

    await page.goto('https://www.automationexercise.com/');

    // Scroll to bottom
    await page.locator('footer').scrollIntoViewIfNeeded();

    // Verify Recommended Items
    await expect(
        page.getByText('RECOMMENDED ITEMS')
    ).toBeVisible();

    // Add recommended product
    await page.locator(
        '#recommended-item-carousel .product-image-wrapper'
    ).first().getByText('Add to cart').click();

    // Click View Cart
    await page.getByText('View Cart').click();

    // Verify cart
    await expect(page).toHaveURL(/\/view_cart/);

    await expect(
        page.locator('#cart_info_table')
    ).toBeVisible();
});


});
