import { test } from '@playwright/test';

test('waitFor example', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

await page.locator('button').first().click();

await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

await page.locator('button').last().click();

await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

await page.locator('button').nth(1).click();

const section = page.locator('div').filter({
    hasText: 'Section 2'
});

await section.getByRole('button', { name: 'Submit' }).first().click();

const startBtn = page
    .getByRole('button')
    .and(page.getByText('START'));

await startBtn.click();

const btn = page
    .getByText('START')
    .or(page.getByText('Submit'));

await btn.first().click();

const section3 = page.locator('div').filter({
    has: page.getByText('Section 3')
});

await section3.getByRole('button', { name: 'Submit' }).first().click();

});