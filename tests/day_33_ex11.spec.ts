import {test,expect} from '@playwright/test';
test('day 33 ex', async({page})=>{
await page.goto('https://demoqa.com/webtables');
await page.locator("tr").filter({
    hasText:'Cierra'
}).locator("#edit-record-1").click();
});