import {test,expect} from '@playwright/test';
test('by class', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
await page.locator(".start").click();
});