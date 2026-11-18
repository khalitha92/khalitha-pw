import { test, expect } from '@playwright/test';

test('Handle open Shadow DOM inside an iframe', async ({ page }) => {

  await page.goto(
    'https://selectorshub.com/xpath-practice-page/',
    { waitUntil: 'domcontentloaded' }
  );

  const frame = page
    .frameLocator('iframe')
    .first();

  const shadowInput = frame.getByPlaceholder(
    /pizza/i);

  await expect(shadowInput).toBeVisible({
    timeout: 15_000
  });

  await shadowInput.fill('Shadow DOM inside iframe');

  await expect(shadowInput).toHaveValue(
    'Shadow DOM inside iframe'
  );
});
