import {test,expect} from '@playwright/test'
test('paination table',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
let pages = await page.locator('ul#pagination li').all();
for(let i=0;i<pages.length;i++){
await pages[i].click();
let rows = await page.locator('#productTable tbody tr').all()
for(let i=0;i<rows.length;i++){
    const id = await rows[i].locator('td').nth(0).innerText();
    const name = await rows[i].locator('td').nth(1).innerText();
    const price = await rows[i].locator('td').nth(2).innerText();
    await rows[i].locator('td').nth(3).locator('input').click();
   console .log(id , '\t', name, '\t', price)
}
}
await page.waitForTimeout(5000);

})