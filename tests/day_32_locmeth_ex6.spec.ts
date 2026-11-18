import { test } from '@playwright/test';
test('waitFor example', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    

    const section1 = page.locator('#HTML4');

     await section1.locator('button').first().click();

     await page.getByRole('button', {
     name: 'START'
     })  .first().click();
    
     await page.getByText('Blog').first().click();

     //await page.getByLabel('email').fill('John');
     await page.getByLabel('Standard').click();

});