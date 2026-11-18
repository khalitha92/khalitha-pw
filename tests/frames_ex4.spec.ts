import { test } from '@playwright/test';

test('Edit text inside TinyMCE iframe', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/iframe');

    const editor = page.frameLocator('#mce_0_ifr');

    await editor.locator('#tinymce').clear();

    await editor.locator('#tinymce').fill('Hello Playwright');

});
