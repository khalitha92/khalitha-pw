import {test,expect} from '@playwright/test'
test('validate dropdown',async({page})=>{
await page.goto('https://jqueryui.com/selectmenu/');
const frame = page.frameLocator('.demo-frame');
await frame.locator('#speed-button').click();
const options = await frame.locator('#speed-menu li');
const count = await options.count();
for(let i=0;i<count;i++){
  const item = await options.nth(i).innerText();
  if(item==='Fast'){
    await options.nth(i).click();
  }

}
await expect(frame.locator('#speed-button .ui-selectmenu-text')).toHaveText('Fast');
});