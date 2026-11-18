import { test, expect } from '@playwright/test';

test('Enter text into an open Shadow DOM input on SelectorsHub', async ({
  page
}) => {

  await page.goto(
    'https://selectorshub.com/xpath-practice-page/',
    { waitUntil: 'domcontentloaded' }
  );

  const pizzaInput = page.getByPlaceholder(
    /pizza/i
  );

  await expect(pizzaInput).toBeVisible({
    timeout: 15_000
  });

  await pizzaInput.fill('Margherita Pizza');

  await expect(pizzaInput).toHaveValue(
    'Margherita Pizza'
  );

  console.log('Value entered into open Shadow DOM input');
});