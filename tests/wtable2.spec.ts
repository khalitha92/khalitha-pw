import { test, expect } from '@playwright/test';

test('Handle static web table', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
let table = page.locator("table[name='BookTable']");
let rows =  table.locator('tr');
console.log(await rows.count());
let columns = rows.locator('th');
console.log(await columns.count());
console.log(await rows.nth(2).locator('td').nth(0).innerText());
console.log(await rows.nth(2).innerText());
for(let i=0;i<await rows.count();i++){
    console.log(await rows.nth(i).innerText());
}
});