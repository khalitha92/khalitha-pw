import { test, expect, BrowserContext, Page } from '@playwright/test';

let sharedContext: BrowserContext;
let sharedPage: Page;

test.beforeAll(async ({ browser }) => {
    console.log('Creating shared browser context');
    sharedContext = await browser.newContext();
    sharedPage = await sharedContext.newPage();
    await sharedPage.goto('https://example.com');
});

test.beforeEach(async ({ page }) => {
    console.log('Opening SauceDemo before each test');
    await page.goto('https://www.saucedemo.com/');
});

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Completed: ${testInfo.title}`);
    if (testInfo.status !== testInfo.expectedStatus) {
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('Failure screenshot', {
            body: screenshot,
            contentType: 'image/png'
        });
    }
});

test.afterAll(async () => {
    console.log('Closing shared browser context');
    await sharedContext.close();
});

test('verify SauceDemo title', async ({ page }) => {
    await expect(page).toHaveTitle('Swag Labs');
});

test('verify login button', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});

test('verify shared page', async () => {
    await expect(sharedPage).toHaveTitle(/Example/);
});
