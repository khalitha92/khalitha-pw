import { test, expect } from '@playwright/test';

test('locator methods example', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    // click()
    await page.getByRole('button', { name: 'Search' }).click();

    // dblclick()
    await page.getByRole('button', { name: 'Copy Text' }).dblclick();
    
    // fill()
    await page.getByPlaceholder('Enter your full name').fill('John Doe');
    
    // clear()
    await page.getByPlaceholder('Enter your full name').clear();

    // press()
    await page.getByPlaceholder('Enter your full name').fill('John Doe');
    await page.getByPlaceholder('Enter your full name').press('Tab');

    // type()
    await page.getByPlaceholder('Enter your full name').type('John Doe');

    // hover()
    await page.locator('button').filter({ hasText: 'Primary Action' }).hover();

    // focus()
    await page.getByPlaceholder('Enter your full name').focus();

    // blur()
    await page.getByPlaceholder('Enter your full name').blur();

   
});

test('2 locator methods', async({page})=> {
     await page.goto('https://testautomationpractice.blogspot.com/');
    //check
    await page.locator('#male').check();
    // uncheck()
    await page.locator('#sunday').check();
    await page.locator('#sunday').uncheck();
     // selectOption()
    await page.locator('#country').selectOption('India');

    // scrollIntoViewIfNeeded()
    await page.locator('#country').scrollIntoViewIfNeeded();
});