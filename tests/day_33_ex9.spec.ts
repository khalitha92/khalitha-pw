import {test,expect} from '@playwright/test';
test('day 33 ex', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com');

//await page.locator(".dropbtn").hover();
//await page.locator("#name").focus();
//await page.locator("#name").press("Enter");
/*await page.locator("#name").waitFor({
    state:'visible'
});*/

await expect(page.locator("#name")).toBeVisible();
await expect(page.locator("h1")).toHaveText("Automation Testing Practice");
await page.locator("#name").fill("khalitha");
await expect(page.locator("#name")).toHaveValue("khalitha");

await page.locator("tr").filter({
    hasText:"Amod"
})
const johnRow = page.locator('tr').filter({
  hasText: 'John'
});

await johnRow.getByRole('button', { name: 'Edit' }).click();

});