import { test, expect } from '@playwright/test';

test.describe('Shadow DOM examples using public websites', () => {

  test('Basic open Shadow DOM', async ({ page }) => {

    await page.goto(
      'https://practice.expandtesting.com/shadowdom',
      { waitUntil: 'domcontentloaded' }
    );

    const button = page.getByRole('button', {
      name: "Here's a basic button example."
    });

    await expect(button).toBeVisible();

    await button.click();
  });

  test('Open Shadow DOM using CSS', async ({ page }) => {

    await page.goto(
      'https://practice.expandtesting.com/shadowdom',
      { waitUntil: 'domcontentloaded' }
    );

    const button = page.locator('button').filter({
      hasText: "Here's a basic button example."
    });

    await expect(button).toBeVisible();

    await button.click();
  });

  test('Validate Shadow DOM menu component', async ({ page }) => {

    await page.goto(
      'https://www.htmlelements.com/demos/menu/shadow-dom/index.htm',
      { waitUntil: 'domcontentloaded' }
    );

    await expect(
      page.getByText('File', { exact: true }).first()
    ).toBeVisible();

    await expect(
      page.getByText('Edit', { exact: true }).first()
    ).toBeVisible();

    await expect(
      page.getByText('View', { exact: true }).first()
    ).toBeVisible();
  });

  test('SelectorsHub open Shadow DOM input', async ({ page }) => {

    await page.goto(
      'https://selectorshub.com/xpath-practice-page/',
      { waitUntil: 'domcontentloaded' }
    );

    const pizzaInput = page.getByPlaceholder(/pizza/i);

    await expect(pizzaInput).toBeVisible({
      timeout: 15_000
    });

    await pizzaInput.fill('Pepperoni Pizza');

    await expect(pizzaInput).toHaveValue(
      'Pepperoni Pizza'
    );
  });

});