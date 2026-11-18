import {test,expect} from '@playwright/test';
test('day 33 ex', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
const texts2 = await page.locator("label").first().textContent();
console.log(texts2);

const ph =  await page.locator("#comboBox").getAttribute("placeholder");
console.log(ph);

await page.locator("#username").fill("khalitha");
const val1 = await page.locator("#username").inputValue();
console.log(val1);

const val2 = await page.locator("#username").isVisible();
console.log(val2);

const val3 = await page.locator("#username").isEnabled();
console.log(val3);

const val4 = await page.locator("#username").isDisabled();
console.log(val4);

const val5 = await page.locator("#username").isHidden();
console.log(val5);
});