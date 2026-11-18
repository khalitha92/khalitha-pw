import { test, expect } from '@playwright/test';

test.describe('Dialog handling examples', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <button id="alertButton"
        onclick="alert('Welcome to Playwright')">
        Alert
      </button>

      <button id="confirmButton"
        onclick="
          document.querySelector('#result').textContent =
          confirm('Do you want to continue?')
            ? 'Accepted'
            : 'Cancelled'
        ">
        Confirm
      </button>

      <button id="promptButton"
        onclick="
          const name = prompt('Enter your name', 'Guest');
          document.querySelector('#result').textContent =
          name === null ? 'Cancelled' : name;
        ">
        Prompt
      </button>

      <p id="result"></p>
    `);
  });

  test('Handle alert', async ({ page }) => {
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toBe('Welcome to Playwright');

      await dialog.accept();
    });

    await page.locator('#alertButton').click();
  });

  test('Accept confirmation', async ({ page }) => {
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm');
      expect(dialog.message()).toBe('Do you want to continue?');

      await dialog.accept();
    });

    await page.locator('#confirmButton').click();

    await expect(page.locator('#result')).toHaveText('Accepted');
  });

  test('Dismiss confirmation', async ({ page }) => {
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm');

      await dialog.dismiss();
    });

    await page.locator('#confirmButton').click();

    await expect(page.locator('#result')).toHaveText('Cancelled');
  });

  test('Enter value in prompt', async ({ page }) => {
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('prompt');
      expect(dialog.message()).toBe('Enter your name');
      expect(dialog.defaultValue()).toBe('Guest');

      await dialog.accept('Priyanka');
    });

    await page.locator('#promptButton').click();

    await expect(page.locator('#result')).toHaveText('Priyanka');
  });

  test('Dismiss prompt', async ({ page }) => {
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('prompt');

      await dialog.dismiss();
    });

    await page.locator('#promptButton').click();

    await expect(page.locator('#result')).toHaveText('Cancelled');
  });
});
