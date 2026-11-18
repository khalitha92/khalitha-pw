import { test, expect } from '@playwright/test';

test('Handle static web table', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const table = page.locator("table[name='BookTable']");
  //const table = page.locator('#BookTable');

  // Verify the table is visible
  await expect(table).toBeVisible();

  // Locate all body rows
 const rows = table.locator('tr');
//const rows = page.locator('table[name="BookTable"] tr');

  // Locate all columns in the first row
  const columns = rows.locator('th');

  const rowCount = await rows.count();
  const columnCount = await columns.count();

  console.log('Total rows:', rowCount);
  console.log('Total columns:', columnCount);

  // Print all table data
  console.log('\nAll table data:');

  for (let i = 0; i < rowCount; i++) {
    const cells = rows.nth(i).locator('td');
    const cellCount = await cells.count();
    let rowData = '';

    for (let j = 0; j < cellCount; j++) {
      rowData += (await cells.nth(j).innerText()) + ' | ';
    }

    console.log(rowData);
  }

  // Print all book names
  console.log('\nBook names:');
  for (let i = 1; i < rowCount; i++) {
    const bookName = await rows.nth(i).locator('td').nth(0).innerText();
    console.log(bookName);
  }

  // Print all authors
  console.log('\nAuthors:');
  for (let i = 1; i < rowCount; i++) {
    const author = await rows.nth(i).locator('td').nth(1).innerText();
    console.log(author);
  }

  // Print all subjects
  console.log('\nSubjects:');
  for (let i = 1; i < rowCount; i++) {
    const subject = await rows.nth(i).locator('td').nth(2).innerText();
    console.log(subject);
  }

  // Print all prices
  console.log('\nPrices:');
  for (let i = 1; i < rowCount; i++) {
    const price = await rows.nth(i).locator('td').nth(3).innerText();
    console.log(price);
  }

  // Find a specific book
  const bookToFind = 'Master In Selenium';

  for (let i = 1; i < rowCount; i++) {
    const cells = rows.nth(i).locator('td');
    const bookName = await cells.nth(0).innerText();

    if (bookName === bookToFind) {
      const author = await cells.nth(1).innerText();
      const subject = await cells.nth(2).innerText();
      const price = await cells.nth(3).innerText();

      console.log('\nBook found:');
      console.log('Book:', bookName);
      console.log('Author:', author);
      console.log('Subject:', subject);
      console.log('Price:', price);
      break;
    }
  }

  // Find all books written by Mukesh
  console.log('\nBooks written by Mukesh:');

  for (let i = 1; i < rowCount; i++) {
    const cells = rows.nth(i).locator('td');
    const bookName = await cells.nth(0).innerText();
    const author = await cells.nth(1).innerText();

    if (author === 'Mukesh') {
      console.log(bookName);
    }
  }

  // Find Selenium books
  console.log('\nSelenium books:');

  for (let i = 1; i < rowCount; i++) {
    const cells = rows.nth(i).locator('td');
    const bookName = await cells.nth(0).innerText();
    const subject = await cells.nth(2).innerText();

    if (subject.toLowerCase() === 'selenium') {
      console.log(bookName);
    }
  }

  // Calculate total price
  let totalPrice = 0;

  for (let i = 1; i < rowCount; i++) {
    const priceText = await rows.nth(i).locator('td').nth(3).innerText();
    totalPrice += Number(priceText);
  }

  console.log('\nTotal price:', totalPrice);

  // Find the most expensive book
  let highestPrice = 0;
  let expensiveBook = '';

  for (let i = 1; i < rowCount; i++) {
    const cells = rows.nth(i).locator('td');
    const bookName = await cells.nth(0).innerText();
    const price = Number(await cells.nth(3).innerText());

    if (price > highestPrice) {
      highestPrice = price;
      expensiveBook = bookName;
    }
  }

  console.log('\nMost expensive book:', expensiveBook);
  console.log('Highest price:', highestPrice);

  // Verify that a book exists
  await expect(table.getByText('Learn Java', { exact: true })).toBeVisible();
});


