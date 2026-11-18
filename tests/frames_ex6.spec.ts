import { test, expect } from '@playwright/test';

test('Verify editor text', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/iframe');

    const editor = page.frameLocator('#mce_0_ifr');

    await expect(editor.locator('#tinymce'))
        .toContainText('Your content goes here.');

});
