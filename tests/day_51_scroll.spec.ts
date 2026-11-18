import {test,expect} from '@playwright/test'

test('performing click',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    let footer_link = await page.getByRole('heading',{name:'Footer Links'})
    await footer_link.scrollIntoViewIfNeeded()
    await expect(footer_link).toBeVisible()
})

test('scroll using mouse wheel',async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
   await page.mouse.wheel(0,1000) 
   await page.waitForTimeout(3000)
   await page.mouse.wheel(0,1000) 
   await page.waitForTimeout(3000)
})

test('scroll to top and bottom',async({page})=>{
     await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
     await page.evaluate(()=>{
        window.scrollTo(0,document.body.scrollHeight)
     })
     await page.waitForTimeout(1000)
     await page.evaluate(()=>{
        window.scrollTo(0,0)
     })
     await page.waitForTimeout(1000)
})

test('scroll in selectoption',async({page})=>{
     await page.goto('https://testautomationpractice.blogspot.com')
     let select_opt = await page.locator('#country')
     await select_opt.selectOption('India')
     await expect(select_opt).toHaveValue('india')

})

test('custom dropdown scrolling',async({page})=>{
     await page.goto('https://testautomationpractice.blogspot.com')
     let drpdown = page.locator('#comboBox')
     let itm100 = await page.getByText('Item 100',{exact:true})
     await drpdown.click()
     await itm100.scrollIntoViewIfNeeded()
     await itm100.click()

})

test('custom dropdown scrolling by evaluate',async({page})=>{
     await page.goto('https://testautomationpractice.blogspot.com')
     let drpdown = page.locator('#comboBox')
     let drpdwn_container = page.locator('#dropdown')
     let itm100 = await page.getByText('Item 100',{exact:true})
     await drpdown.click()
     await drpdwn_container.evaluate((element)=>{
      element.scrollTop = element.scrollHeight
     })
     await itm100.click()

})

test('infinite scrolling',async({page})=>{
await page.goto('https://www.booksbykilo.in/new-books')
while(true){
await page.evaluate(()=>{
     window.scrollTo(0,document.body.scrollHeight)
})
let lastname = page.getByText('The Fall: The End of the Murdoch Empire')
if(await lastname.isVisible()){
     break;
}
}
})

test('infinite scrolling until entire page is loaded by validating last book', async ({ page }) => {


await page.goto('https://www.booksbykilo.in/new-books', { waitUntil: 'load' })

while(true){
    await page.evaluate(()=>{
        window.scrollTo(0,document.body.scrollHeight)
    })
    await page.waitForTimeout(1000);

   let lastBookName = page.getByText('Life in the Biblical World',{exact:true})

    if(await lastBookName.isVisible()){
        break;
    }

}

})

test('infinite scrolling until entire page is loaded by validating last book1', async ({ page }) => {
    await page.goto('https://www.booksbykilo.in/new-books');

    let previousHeight = 0;

    while (true) {
        const currentHeight = await page.evaluate(() => document.body.scrollHeight);

        if (currentHeight === previousHeight) {
            break; // No more content loaded
        }

        previousHeight = currentHeight;

        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(1500);

        const lastBook = page.getByText('Life in the Biblical World', { exact: true });

        if (await lastBook.isVisible()) {
            console.log('Book found');
            break;
        }
    }
})