import { test, expect } from '@playwright/test';
test('2 locator methods', async({page})=> {
await page.goto("https://playwright.dev/");
await page.goto("https://example.com/");
await page.goBack();
await page.goForward();
console.log(await page.url());
});