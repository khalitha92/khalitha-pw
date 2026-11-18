import {test,expect} from '@playwright/test';
test('day 33 ex', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
await page.locator("[type='text'][id='username']").first().fill("khalitha");
await page.locator("[id*='use']").fill("khalitha");
await page.locator("text=STA").first().click();
await page.locator("button:has-text('START')").click();
await page.locator("label:text-is('Username:')").click();
await page.locator("label:text-matches('User.*')").first().click();
await page.locator(".grid > username");
await page.locator("form input");
await page.locator("xpath=//input[@id='email']").fill("khalitha");

await page
.locator("div")
.locator("#username")
.fill("khalitha");

await page.locator("tr").filter({
    hasText:'Amod'
})

await page.locator("tr").filter({
    has: page.locator("button")
})

await page.locator("input").first().fill("khalitha");
await page.locator("button").nth(1).click();

const bcount = await page.locator("button").count();
console.log(bcount);

const texts = await page.locator("label").allTextContents();
console.log(texts);


const texts1 = await page.locator("label").first().innerText();
console.log(texts1);

const texts2 = await page.locator("label").first().textContent();
console.log(texts1);
});