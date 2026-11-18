import {test,expect} from '@playwright/test'
test('handling new tab',async({page,context})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    const [newpage] = await Promise.all([
         context.waitForEvent('page'),
        await page.getByRole('button',{name:'New Tab'}).first().click() 
    ]);
    await newpage.waitForLoadState();
    console.log(await newpage.title())
    await expect(newpage).toHaveTitle('SDET-QA Blog')
})