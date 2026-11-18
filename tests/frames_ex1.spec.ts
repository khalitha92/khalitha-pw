import { defineConfig,test, expect } from '@playwright/test';

export default defineConfig({
  use: {
    browserName: 'chromium',
    headless: false,
    ignoreHTTPSErrors: true,
  },
});

test('Handle iframe - UI Testing Playground', async ({ page }) => {

    await page.goto('https://uitestingplayground.com/frames');

    const frame = page.frameLocator('#frame');

    await frame.locator('#name').fill('Prathyusha');

    await frame.locator('#updatingButton').click();

});
