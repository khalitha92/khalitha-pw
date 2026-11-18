import { test, expect } from '@playwright/test';

test.describe('Basic open Shadow DOM', () => {

  test('Click a button available inside Shadow DOM', async ({ page }) => {

    await page.goto(
      'https://practice.expandtesting.com/shadowdom',
      { waitUntil: 'domcontentloaded' }
    );

    /*
     * Playwright automatically searches inside open Shadow DOM.
     * We do not need shadowRoot(), evaluate(), or JavaScriptExecutor.
     */
    const shadowButton = page.getByRole('button', {
      name: "This button is inside a Shadow DOM."
    });

    await expect(shadowButton).toBeVisible();

    await shadowButton.click();

    console.log('Shadow DOM button clicked successfully');
  });

});