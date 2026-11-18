import { test, expect } from '@playwright/test';
test('locator methods example', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
})