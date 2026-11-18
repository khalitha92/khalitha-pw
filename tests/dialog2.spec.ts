import { test, expect } from '@playwright/test';

test('Accept confirmation dialog', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toContain('Press a button');

    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Confirmation Alert' }).click();
});