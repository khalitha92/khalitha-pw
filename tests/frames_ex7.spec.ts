import { test } from '@playwright/test';

test('Using page.frame()', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/iframe');

    const frame = page.frame({ name: 'mce_0_ifr' });

    if (frame) {

        await frame.locator('#tinymce').fill('Playwright Frame Example');

    }

});
