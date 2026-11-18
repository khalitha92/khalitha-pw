import { test, expect } from '@playwright/test';

test('handle different dropdown types', async ({ page }) => {
  await page.goto('https://example.com/dropdowns');

  // 1. Normal HTML select dropdown
  await page.locator('#country').selectOption({ label: 'India' });
  await expect(page.locator('#country')).toHaveValue('IN');

  // 2. Multi select dropdown
  await page.locator('#skills').selectOption(['java', 'playwright']);

  const selectedSkills = await page.locator('#skills').evaluate((select) =>
    Array.from(select.selectedOptions).map(option => option.value)
  );
  expect(selectedSkills).toEqual(['java', 'playwright']);

  // 3. Custom dropdown
  await page.getByRole('button', { name: 'Select Country' }).click();
  await page.getByRole('option', { name: 'India' }).click();
  await expect(page.locator('#selectedCountry')).toHaveText('India');

  // 4. Searchable dropdown
  await page.locator('#cityDropdown').click();
  await page.locator('#citySearch').fill('Hyderabad');
  await page.locator('.city-option').filter({ hasText: 'Hyderabad' }).click();
  await expect(page.locator('#selectedCity')).toHaveText('Hyderabad');
});
