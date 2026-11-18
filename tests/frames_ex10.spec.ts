import { test } from '@playwright/test';

test('Count Frames', async ({ page }) => {

    await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe');

    const frames = page.frames();

    console.log('Frame Count:', frames.length);

});
