import { test, expect } from '@playwright/test';

test('locator methods information retrieval', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    const text = await page.locator('legend').first().textContent();
    console.log(text);
    
    const text1 = await page.locator('legend').first().innerText();
    console.log(text1);
    
    const html = await page.locator('fieldset').first().innerHTML();
    console.log(html);

    await page.getByPlaceholder('Enter your full name').fill('Khalitha');

    const value = await page
    .getByPlaceholder('Enter your full name')
    .inputValue();

    console.log(value);

    const href = await page.locator('a').first().getAttribute('href');
    console.log(href);

    const texts = await page.locator('label').allTextContents();

    console.log(texts);

    const texts2 = await page.locator('label').allTextContents();

    console.log(texts2);

    const texts1 = await page.locator('label').allInnerTexts();

    console.log(texts1);

    const totalRadios = await page.locator('input[type="radio"]').count();

    console.log(totalRadios);
});