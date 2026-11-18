import { test } from '@playwright/test';
test('waitFor example', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com');
    await page.locator('#name').screenshot({
        path: 'name-field.png'
    });

    await page.locator('#name').fill('John');

const value = await page.locator('#name')
    .evaluate(el => el.value);

console.log(value);
});