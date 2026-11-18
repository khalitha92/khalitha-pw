import { test, expect } from '@playwright/test';

test('Handle dialog using waitForEvent', async ({ page }) => {
  await page.setContent(`
    <button onclick="alert('Welcome to Playwright')">
      Show Alert
    </button>
  `);

  const dialogPromise = page.waitForEvent('dialog');

  await page.getByRole('button', { name: 'Show Alert' }).click();

  const dialog = await dialogPromise;

  expect(dialog.type()).toBe('alert');
  expect(dialog.message()).toBe('Welcome to Playwright');

  await dialog.accept();
});
