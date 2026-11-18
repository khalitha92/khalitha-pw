import { test, expect } from '@playwright/test';

test('Handle beforeunload dialog', async ({ page }) => {
  await page.setContent(`
    <script>
      window.addEventListener('beforeunload', event => {
        event.preventDefault();
        event.returnValue = '';
      });
    </script>

    <h1>Unsaved Form</h1>
  `);

  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('beforeunload');

    //await dialog.accept();
  });

  await page.close({ runBeforeUnload: true });
});
