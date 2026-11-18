import { test } from '@playwright/test';

test('waitFor example', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com');

    await page.locator('#name').waitFor();

    await page.locator('#name').fill('John');
});