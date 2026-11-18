import { test } from '@playwright/test';

test('Read text from editor', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/iframe');

    const editor = page.frameLocator('#mce_0_ifr');

    const text = await editor.locator('#tinymce').textContent();

    console.log(text);

});
