import { test, expect } from '@playwright/test';

test('react-select dropdown', async ({ page }) => {

  await page.goto('https://react-select.com/home');

  const select = page.locator('#react-select-3-input');

  // Click the actual input
  await select.click();

  // Type Green
  await select.fill('Green');

  // Wait for Green to appear
  await expect(
    page.getByText('Green', { exact: true }).last()
  ).toBeVisible();

  // Click Green
  await page.getByText('Green', { exact: true }).last().click();

  // Verify selected value
  await expect(
    page.locator('[class*="singleValue"]').first()
  ).toHaveText('Green');
});