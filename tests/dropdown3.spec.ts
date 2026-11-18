import { test, expect } from '@playwright/test';

test('angular material select', async ({ page }) => {
  await page.goto('https://material.angular.io/components/select/overview');

  // 1. Open the dropdown
  const select = page.locator('mat-select').first();
  await select.click();

  // 2. Options appear in an overlay, so search the whole page
  await page.getByRole('option', { name: 'Steak' }).click();

  // 3. Check the selected value (mat-select shows text, so use toHaveText)
  await expect(select).toContainText('Steak');
});