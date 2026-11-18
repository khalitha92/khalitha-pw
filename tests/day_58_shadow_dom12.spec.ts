import { test, expect } from '@playwright/test';

test('Understand closed Shadow DOM behavior', async ({ page }) => {

  await page.goto('https://selectorshub.com/xpath-practice-page/',{ waitUntil: 'domcontentloaded' });

  const customElements = page.locator(
    '*:not(html):not(head):not(body)'
  );

  const closedHosts = await customElements.evaluateAll(elements => {

    return elements
      .filter(element =>
        element.tagName.includes('-') &&
        element.shadowRoot === null
      )
      .map(element => element.tagName);
  });

  console.log('Possible custom elements with inaccessible roots:',closedHosts);

  expect(Array.isArray(closedHosts)).toBe(true);
});