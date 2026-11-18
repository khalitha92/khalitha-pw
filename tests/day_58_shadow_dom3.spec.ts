import { test, expect } from '@playwright/test';

test('Handle Shadow DOM button using CSS locator', async ({ page }) => {

  await page.goto(
    'https://practice.expandtesting.com/shadowdom',
    { waitUntil: 'domcontentloaded' }
  );

  /*
   * Playwright CSS locators automatically pierce open Shadow DOM roots.
   *
   * The locator searches for button elements across the page,
   * including buttons inside open Shadow DOM.
   */
  const shadowButton = page.locator('button').filter({
    hasText: "Here's a basic button example."
  });

  await expect(shadowButton).toHaveCount(1);
  await expect(shadowButton).toBeVisible();

  await shadowButton.click();

  console.log('Shadow DOM element handled using CSS locator');
});
