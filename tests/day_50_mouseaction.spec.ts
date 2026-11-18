import {test,expect} from '@playwright/test'
test('performing click',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    let button = await page.getByRole('button',{name:'New Tab'})
    await expect(button).toBeVisible
    await button.click();
    let newpage = await page.context().waitForEvent('page')
    await expect(newpage).toHaveTitle('SDET-QA Blog')
})

test('performing mouse hover and click',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    let menu = await page.getByRole('button',{name:'Point Me'})
    let menuclick = await page.getByRole('link', { name:'Mobiles' })
     await menu.hover();
    await expect(menuclick).toBeVisible()
    await menuclick.click()
   
})

test('performing double click',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    let fld1 = await page.locator('#field1')
    let fld2 = await page.locator('#field2')
    let cbutton = await page.getByRole('button',{name:'Copy Text'})
    await fld1.fill('khalitha')
    await cbutton.dblclick();
    await expect(fld2).toHaveValue('khalitha')
})

test('performing right click',async({page})=>{
    await page.goto('https://demoqa.com/buttons')
    let rbutton = await page.getByRole('button',{name:'Right Click Me'})
    let rtext = await page.locator('#rightClickMessage')
    await rbutton.click({button:'right'})
    await expect(rtext).toHaveText('You have done a right click')

})

test('performing middle click',async({page})=>{
    await page.goto('https://playwright.dev/')
    let mlink = await page.getByRole('link',{name:'Get started'})
    await mlink.click({button:'middle'})
})

test('drag and drop',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    let drag = await page.locator('#draggable')
    let drop = await page.locator('#droppable')
    await drag.dragTo(drop)
    await expect(drop).toHaveText('Dropped!')
})

test('drag and drop with low level mouse actions',async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    let source = await page.locator('#draggable')
    let target = await page.locator('#droppable') 
    await source.hover()
    await page.mouse.down()
    await target.hover()
    await page.mouse.up()
    await expect(target).toContainText('Dropped!')
})