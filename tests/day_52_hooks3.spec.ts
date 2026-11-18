import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});

test.afterEach(async ({ page }) => {
    console.log(`Test completed. Current URL: ${page.url()}`);
});

test('verify title', async ({ page }) => {
    await expect(page).toHaveTitle('Swag Labs');
});