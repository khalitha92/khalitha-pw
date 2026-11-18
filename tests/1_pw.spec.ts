import { test, expect } from '@playwright/test';
test('1 locator methods', async({page})=> {
const response = await page.goto("https://playwright.dev/");
console.log(await response?.status());
});