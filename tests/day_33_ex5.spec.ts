import {test,expect} from '@playwright/test';
test('day 33 ex', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
await page.locator("[type='text']").first().fill("khalitha");
});