import {test,expect} from '@playwright/test';
test('day 33 ex', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com');
const chk1 = await page.locator("#male").isChecked();
console.log(chk1);

await page.locator("button").first().dblclick();

await page.locator("button").first().click({
    button:"right"
})

await page.locator("#name").pressSequentially("khalitha");

await page.locator("#name")
.fill("John");

await page.locator("#name")
.clear();

await page.locator("#sunday")
.check();

await page.locator("#sunday")
.uncheck();

await page.locator("#country").selectOption("India");

 await page.pause();

 await page.locator(".dropbtn").hover();
});