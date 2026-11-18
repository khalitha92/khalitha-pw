import {test,expect} from '@playwright/test'
test('handle pagination',async({page})=>{
await page.goto('https://datatables.net/examples/core/basic_init/zero_configuration.html');
let table = await page.locator('#example tbody tr');
let rowscount = await table.count();
let btnext = page.getByRole('link',{name:'Next'});
let searchtext = 'Bruno Nash';
let empfound = false;

while(true){
for(let i =0 ; i< rowscount; i++){
let rowdata = await table.nth(i).innerText();

console.log(await rowdata);

if(rowdata.includes(searchtext)){
    empfound = true;
    break;
}


}
if(empfound)
    break;
if(await btnext.isDisabled()){
    break;
}
await btnext.click();
}
});