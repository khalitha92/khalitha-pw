import { test, expect } from '@playwright/test';

test('Nested iframe example', async ({ page }) => {

    await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe');

    const resultFrame = page.frameLocator('#iframeResult');

    const innerFrame = resultFrame.frameLocator('iframe');

    await expect(innerFrame.locator('h1')).toContainText('This page is displayed');

});
