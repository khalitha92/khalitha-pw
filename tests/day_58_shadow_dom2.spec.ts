import { test, expect } from '@playwright/test';

test('Handle Shadow DOM element using text locator', async ({ page }) => {

  await page.goto(
    'https://practice.expandtesting.com/shadowdom',
    { waitUntil: 'domcontentloaded' }
  );

  /*
   * getByText() can cross an open Shadow DOM boundary.
   */
  const buttonText = page.getByText(
    "Here's a basic button example.",
    { exact: true }
  );

  await expect(buttonText).toBeVisible();

  await buttonText.click();

  console.log('Shadow DOM element handled using getByText()');
});
