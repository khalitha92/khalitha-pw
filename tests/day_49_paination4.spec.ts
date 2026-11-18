import {test,expect} from '@playwright/test'
test('pagination using has text',async({page})=>{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")
   
    let nxtbtn = await page.locator('button.dt-paging-button.next')
    let empname = 'Doris Wilder'
    let empfound = false;
    while(true){
     let row = await page.locator('#example tbody tr',{hasText:empname})
     if( await row.count()>0){
        empfound = true;
        console.log(await row.nth(0).innerText())
        break;
     }
     
     if (await nxtbtn.isDisabled()){
        break;
     }
     await nxtbtn.click();
    }

    expect(empfound).toBeTruthy()


})