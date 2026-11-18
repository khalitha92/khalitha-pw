await page.getbyRole('button',{name:'add to cart'}).click({button:'right'});

await page.locator('#id').selectOption(['Java','Playwright']);
await page.locator('#id').selectOption({label:'Java'});
