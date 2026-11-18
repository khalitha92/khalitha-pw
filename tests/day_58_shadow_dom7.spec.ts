import { test, expect } from '@playwright/test';

test('Count menu elements inside Shadow DOM', async ({ page }) => {

  await page.goto(
    'https://www.htmlelements.com/demos/menu/shadow-dom/index.htm',
    { waitUntil: 'domcontentloaded' }
  );

  const knownMenuItems = [
    page.getByText('File', { exact: true }).first(),
    page.getByText('Edit', { exact: true }).first(),
    page.getByText('View', { exact: true }).first()
  ];

  let visibleCount = 0;

  for (const menuItem of knownMenuItems) {
    await expect(menuItem).toBeVisible();
    visibleCount++;
  }

  expect(visibleCount).toBe(3);

  console.log(`Number of validated menu items: ${visibleCount}`);
});
