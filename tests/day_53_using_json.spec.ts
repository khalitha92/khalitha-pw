import {test,expect}  from '@playwright/test'
import custproduct from '..//testdata/custproduct1.json'
import fs from 'fs'
let product = {
    "productName" : "Sauce Labs Backpack",
    "price" : "$29.99"

}

let products = [
    {
     "productName" : "Sauce Labs Backpack",
    "price" : "$29.99"   
    },

    {
       "productName" : "Sauce Labs Bike Light",
       "price" : "$9.99" 
    }
]

test(`validate product ${product.productName}`,async({page})=>{
 await page.goto("https://www.saucedemo.com/")
await page.getByPlaceholder('Username').fill('standard_user')
await page.getByPlaceholder('Password').fill('secret_sauce')
await page.getByRole('button',{name:'Login'}).click()

await expect(page).toHaveURL(/inventory\.html/)


    const productContainer = page.locator('.inventory_item').filter({
  has: page.getByText(product.productName)
});

    await expect(productContainer.locator('.inventory_item_name')).toHaveText(product.productName)
    await expect(productContainer.locator('.inventory_item_price')).toHaveText(product.price)
})

for (let productdet of products){
test(`array of jsons : ${productdet.productName}`,async({page})=>{
   await page.goto("https://www.saucedemo.com/")
await page.getByPlaceholder('Username').fill('standard_user')
await page.getByPlaceholder('Password').fill('secret_sauce')
await page.getByRole('button',{name:'Login'}).click()

await expect(page).toHaveURL(/inventory\.html/)


    const productContainer = page.locator('.inventory_item').filter({
  has: page.getByText(productdet.productName)
});

    await expect(productContainer.locator('.inventory_item_name')).toHaveText(productdet.productName)
    await expect(productContainer.locator('.inventory_item_price')).toHaveText(productdet.price)
})  
}

//destructuring concept
for (let {productName,price} of products){
test(`array of jsons1 : ${productName}`,async({page})=>{
   await page.goto("https://www.saucedemo.com/")
await page.getByPlaceholder('Username').fill('standard_user')
await page.getByPlaceholder('Password').fill('secret_sauce')
await page.getByRole('button',{name:'Login'}).click()

await expect(page).toHaveURL(/inventory\.html/)


    const productContainer = page.locator('.inventory_item').filter({
  has: page.getByText(productName)
});

    await expect(productContainer.locator('.inventory_item_name')).toHaveText(productName)
    await expect(productContainer.locator('.inventory_item_price')).toHaveText(price)
})  
}

//from file
for (let {productName,price} of custproduct){
test(`array of jsons file: ${productName}`,async({page})=>{
   await page.goto("https://www.saucedemo.com/")
await page.getByPlaceholder('Username').fill('standard_user')
await page.getByPlaceholder('Password').fill('secret_sauce')
await page.getByRole('button',{name:'Login'}).click()

await expect(page).toHaveURL(/inventory\.html/)


    const productContainer = page.locator('.inventory_item').filter({
  has: page.getByText(productName)
});

    await expect(productContainer.locator('.inventory_item_name')).toHaveText(productName)
    await expect(productContainer.locator('.inventory_item_price')).toHaveText(price)
})  
}

//Reading data from json
const jsonPath="testdata/custproduct1.json";
const loginData:any=JSON.parse(fs.readFileSync(jsonPath,'utf-8'));
for (let {productName,price} of loginData){
test(`array of jsons file fs: ${productName}`,async({page})=>{
   await page.goto("https://www.saucedemo.com/")
await page.getByPlaceholder('Username').fill('standard_user')
await page.getByPlaceholder('Password').fill('secret_sauce')
await page.getByRole('button',{name:'Login'}).click()

await expect(page).toHaveURL(/inventory\.html/)


    const productContainer = page.locator('.inventory_item').filter({
  has: page.getByText(productName)
});

    await expect(productContainer.locator('.inventory_item_name')).toHaveText(productName)
    await expect(productContainer.locator('.inventory_item_price')).toHaveText(price)
})  
}
