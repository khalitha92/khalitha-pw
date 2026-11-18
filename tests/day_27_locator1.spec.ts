import { test, expect } from '@playwright/test';
test('page navigation methods',async({page})=>
{
await page.goto('https://www.flipkart.com');
await page.getByRole('textbox', { name: 'Search for Products, Brands and More' }).fill('iphone');
await page.getByRole('button').first().click();


});