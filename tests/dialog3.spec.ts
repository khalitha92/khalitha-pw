import {test,expect} from '@playwright/test'
test('dismiss dialog',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')

page.once('dialog',async dialog=>{
    await expect(dialog.type()).toBe('confirm');
    await expect(dialog.message()).toBe('Press a button!');
    await dialog.dismiss();
})
await page.getByRole('button',{name:'Confirmation Alert'}).click();
});