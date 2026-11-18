import {test,expect} from '@playwright/test';

test("locators", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
await page.getByRole('link', { name: "Automation Testing Practice" });
await page.getByText('For Selenium, Cypress & Playwright')
await page.getByRole('link',{name:'Home'})
await page.getByRole('heading',{name:'PlaywrightPractice'})
await page.getByText('getByRole() Locators')
await page.getByText('Locate elements by their explicit or implicit ARIA roles.')
await page.getByRole('button',{name:'Primary Action'})
await page.getByLabel('Username:')
});