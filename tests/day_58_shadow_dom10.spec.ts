import { test, expect } from '@playwright/test';

test('Recursively search all open Shadow DOM roots', async ({ page }) => {

  await page.goto(
    'https://practice.expandtesting.com/shadowdom',
    { waitUntil: 'domcontentloaded' }
  );

  const buttonText = await page.evaluate(() => {

    function findElementRecursively(
      root: Document | ShadowRoot,
      selector: string
    ): Element | null {

      const directElement = root.querySelector(selector);

      if (directElement) {
        return directElement;
      }

      const allElements = root.querySelectorAll<HTMLElement>('*');

      for (const element of allElements) {

        if (!element.shadowRoot) {
          continue;
        }

        const nestedElement = findElementRecursively(
          element.shadowRoot,
          selector
        );

        if (nestedElement) {
          return nestedElement;
        }
      }

      return null;
    }

    const button = findElementRecursively(
      document,
      'button'
    ) as HTMLButtonElement | null;

    return button?.textContent?.trim() ?? null;
  });

  expect(buttonText).toContain(
    "This button is inside a Shadow DOM."
  );

  console.log('Button text:', buttonText);
});
