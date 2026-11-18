import {test,expect} from '@playwright/test';
test('by id', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')    
await page.locator("#username").fill("khalitha");
});

