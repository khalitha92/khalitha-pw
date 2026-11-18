import { test, expect } from '@playwright/test';

test('Handle static web table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
let table = page.locator("table[name='BookTable']");
let rows = table.locator('tbody tr');
let cells = rows.locator('th');
const rowCount = await rows.count();
const columnCount = await cells.count();
console.log('Total rows:', rowCount);
console.log('Total columns:', columnCount);
});