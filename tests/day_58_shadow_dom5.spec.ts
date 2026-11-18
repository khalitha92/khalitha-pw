import { test, expect } from '@playwright/test';

test.describe('Shadow DOM menu component', () => {

  test('Validate menu items inside Shadow DOM', async ({ page }) => {

    await page.goto(
      'https://www.htmlelements.com/demos/menu/shadow-dom/index.htm',
      { waitUntil: 'domcontentloaded' }
    );

    const fileMenu = page.getByText('File', { exact: true }).first();
    const editMenu = page.getByText('Edit', { exact: true }).first();
    const viewMenu = page.getByText('View', { exact: true }).first();

    await expect(fileMenu).toBeVisible();
    await expect(editMenu).toBeVisible();
    await expect(viewMenu).toBeVisible();

    console.log('All Shadow DOM menu items are visible');
  });

  test('Open File menu and select New', async ({ page }) => {

    await page.goto(
      'https://www.htmlelements.com/demos/menu/shadow-dom/index.htm',
      { waitUntil: 'domcontentloaded' }
    );

    const fileMenu = page.getByText('File', { exact: true }).first();

    await expect(fileMenu).toBeVisible();

    await fileMenu.click();

    const newMenuItem = page.getByText('New', { exact: true }).first();

    await expect(newMenuItem).toBeVisible();

    await newMenuItem.click();

    console.log('File > New selected successfully');
  });

});
