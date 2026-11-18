import { test, expect } from '@playwright/test';

test('Select country from searchable dropdown', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // Search country
  await page.locator('#autocomplete').fill('ind');

  // Select India from suggestions
  await page.locator('li.ui-menu-item div')
    .filter({ hasText: /^India$/ })
    .click();

  // Verify selected value
  await expect(page.locator('#autocomplete'))
    .toHaveValue('India');
});