import { test, expect } from '@playwright/test';
test('days dropdown', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');

  const days = await page.locator('#select-demo option').allTextContents();
  console.log(days); // includes 'Sunday', 'Monday', ...

  await page.locator('#select-demo').selectOption('Friday');
  await expect(page.locator('#select-demo option'))
  .toHaveText(['Please select', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
});