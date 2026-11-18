import {test,expect} from '@playwright/test'
test('handling web table',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
const rows = page.locator('table[name="BookTable"] tbody tr');
console.log(await rows.count());
const columns = page.locator('table[name="BookTable"] tbody tr').first().locator('th');
console.log(await columns.count());
//read spefic value
const value = page.locator('table[name="BookTable"] tbody tr').nth(1).locator('td').nth(0).innerText();
console.log(await value);

//read all values from one row
const value1 = page.locator('table[name="BookTable"] tbody tr').nth(0).locator('th').allTextContents();
console.log(await value1);
//using nth-child to read all values from one row
const value2 = page.locator('table[name="BookTable"] tbody tr:nth-child(2)').allTextContents();
console.log(await value2);

const value3 = page.locator('table[name="BookTable"] tbody tr').filter({hasText:'Master in Selenium'})
console.log(await value3.innerText());
const price = value3.locator('td').nth(3).innerText();
console.log(await price);

const value4 = page.locator('table[name="BookTable"] tbody tr').filter({
has:page.getByText('Master In Selenium',{exact : true})
});
await expect(value4).toHaveCount(1);
});