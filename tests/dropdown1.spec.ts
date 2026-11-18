import { test, expect } from '@playwright/test';

test('redBus from-city auto-suggestion', async ({ page }) => {
  await page.goto('https://www.redbus.in/');

  // 1. Open the "From" field and type
  await page.getByText('From', { exact: true }).first().click();
  await page.keyboard.type('Bang', { delay: 100 });

  // 2. Click the suggestion
  await page.getByText('Bengaluru', { exact: true }).first().click();

  // 3. Check the selection shows up
  await expect(page.getByText('Bengaluru').first()).toBeVisible();
});