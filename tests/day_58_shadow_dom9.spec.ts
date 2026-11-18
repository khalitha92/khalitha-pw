import {test,expect,Page,Locator} from '@playwright/test';

function getOpenShadowElement(page: Page,selector: string): Locator {

  /*
   * Playwright CSS locators automatically pierce all accessible
   * open Shadow DOM boundaries.
   */
  return page.locator(selector);
}

test('Use reusable function for open Shadow DOM', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/shadowdom',{ waitUntil: 'domcontentloaded' });

  const shadowButton = getOpenShadowElement(page,'button')
  .filter({
    hasText: "Here's a basic button example."
  });

  await expect(shadowButton).toBeVisible();

  await shadowButton.click();

  console.log('Reusable Shadow DOM function worked');
});
