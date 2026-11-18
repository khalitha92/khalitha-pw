import { test } from '@playwright/test';

test('Selenium iframe example', async ({ page }) => {

    await page.goto('https://www.selenium.dev/selenium/web/iframes.html');

    const frame = page.frameLocator('#iframe1');

    await frame.locator('#email').fill('test@gmail.com');

});
