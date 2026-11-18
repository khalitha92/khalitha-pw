import { test, expect } from '@playwright/test';

test('Validate multiple elements inside Shadow DOM', async ({ page }) => {

  await page.goto(
    'https://www.htmlelements.com/demos/menu/shadow-dom/index.htm',
    { waitUntil: 'domcontentloaded' }
  );

  const expectedMenuItems = [
    'File',
    'Edit',
    'View'
  ];

  for (const menuItem of expectedMenuItems) {

    const element = page
      .getByText(menuItem, { exact: true })
      .first();

    await expect(element).toBeVisible();

    console.log(`${menuItem} menu is visible`);
  }
});
