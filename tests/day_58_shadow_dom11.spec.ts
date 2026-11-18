import { test, expect } from '@playwright/test';

test('Click an element using recursive Shadow DOM traversal', async ({page}) => {

  await page.goto('https://practice.expandtesting.com/shadowdom',{ waitUntil: 'domcontentloaded' });

  const clicked = await page.evaluate(() => {

    function findButton(root: Document | ShadowRoot): HTMLButtonElement | null {

      const buttons = root.querySelectorAll<HTMLButtonElement>('button');

      for (const button of buttons) {
        if (
          button.textContent?.includes(
            "Here's a basic button example."
          )
        ) {
          return button;
        }
      }

      const elements = root.querySelectorAll<HTMLElement>('*');

      for (const element of elements) {

        if (!element.shadowRoot) {
          continue;
        }

        const result = findButton(element.shadowRoot);

        if (result) {
          return result;
        }
      }

      return null;
    }

    const button = findButton(document);

    if (!button) {
      return false;
    }

    button.click();

    return true;
  });

  expect(clicked).toBe(true);

  console.log('Shadow DOM button clicked recursively');
});
