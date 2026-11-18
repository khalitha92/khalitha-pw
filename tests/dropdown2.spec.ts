import { test, expect } from '@playwright/test';

test('bootstrap dropdown', async ({ page }) => {
  await page.goto('https://getbootstrap.com/docs/5.3/components/dropdowns/');

  // 1. Click the dropdown button
  const button = page.getByRole('button', { name: 'Dropdown button' }).first();
  await button.click();

  // 2. Menu should now be visible
  const menu = page.locator('.dropdown-menu.show').first();
  await expect(menu).toBeVisible();

  // 3. Click an item
  await menu.getByText('Another action').click();

  // 4. Menu closes after selecting
  await expect(menu).toBeHidden();
});