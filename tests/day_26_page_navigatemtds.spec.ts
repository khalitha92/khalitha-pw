import {test} from '@playwright/test'
test('page navigation methods',async({page})=>
{
    const response = await page.goto("https://playwright.dev/");
console.log(await response?.status());

});