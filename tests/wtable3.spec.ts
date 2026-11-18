import {test,expect} from '@playwright/test'
test('handling web table',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
let table = page.locator('table[name="BookTable"]');
let rows = table.locator('tr');
for(let i =1 ; i<await rows.count();i++)
console.log(await rows.nth(i).locator('td').nth(0).innerText());
console.log(await rows.locator('th').allInnerTexts());
console.log(await rows.filter({hasText:'Amit'}).locator('td').nth(0).allInnerTexts());
});
