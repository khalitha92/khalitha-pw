import { test, expect } from '@playwright/test';

test('Access an open shadow root explicitly', async ({ page }) => {

  await page.goto(
    'https://practice.expandtesting.com/shadowdom',
    { waitUntil: 'domcontentloaded' }
  );

  const shadowButton = page.getByRole('button', {
    name: "This button is inside a Shadow DOM."
  });

  await expect(shadowButton).toBeVisible();

  const result = await page.evaluate(() => {

    const allElements = Array.from(
      document.querySelectorAll<HTMLElement>('*')
    );

    for (const host of allElements) {

      if (!host.shadowRoot) {
        continue;
      }

      const button =
        host.shadowRoot.querySelector<HTMLButtonElement>('button');

      if (
        button &&
        button.textContent?.includes(
          "This button is inside a Shadow DOM."
        )
      ) {
        return {
          hostTagName: host.tagName,
          buttonText: button.textContent.trim(),
          shadowMode: host.shadowRoot.mode
        };
      }
    }

    return null;
  });

  expect(result).not.toBeNull();
  expect(result?.buttonText).toContain(
    "This button is inside a Shadow DOM."
  );
  expect(result?.shadowMode).toBe('open');

  console.log('Shadow host details:', result);
});
