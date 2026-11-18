import { test } from '@playwright/test';

test('Locate frame by URL', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/iframe');

    const frames = page.frames();

    for (const frame of frames) {

        if (frame.url().includes('about:blank')) {

            await frame.locator('#tinymce').fill('Frame found by URL');

        }

    }

});
