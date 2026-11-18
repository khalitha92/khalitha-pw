import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});

test('verify page title', async ({ page }) => {
    await expect(page).toHaveTitle('Swag Labs');
});

test('verify login button', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});
