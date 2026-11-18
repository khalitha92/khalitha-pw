import { test, expect } from '@playwright/test';

test('Handle alert dialog', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  page.once('dialog', async dialog => {
    console.log('Dialog type:', dialog.type());
    console.log('Dialog message:', dialog.message());

    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('I am an alert box!');

    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Simple Alert' }).click();
});
