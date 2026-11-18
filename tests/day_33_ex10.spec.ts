import {test,expect} from '@playwright/test';
test('day 33 ex', async({page})=>{
await page.goto('https://the-internet.herokuapp.com/challenging_dom');
await page.locator("tr").filter({
    hasText:"Apeirian0"
}).locator('a', {hasText:'Edit'}).click();
await page.locator(".card")
.filter({
    hasText:"Laptop"
})
.locator("button")
.click();

});