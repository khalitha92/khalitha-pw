import { test, expect } from '@playwright/test';

test('Handle multiple dialogs', async ({ page }) => {
  await page.setContent(`
    <button onclick="
      alert('First alert');
      alert('Second alert');
    ">
      Show Alerts
    </button>
  `);

  const messages = [];

  page.on('dialog', async dialog => {
    messages.push(dialog.message());
    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Show Alerts' }).click();

  expect(messages).toEqual([
    'First alert',
    'Second alert'
  ]);
});
