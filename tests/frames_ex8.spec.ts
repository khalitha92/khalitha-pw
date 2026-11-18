import { test } from '@playwright/test';

test('Print all frames', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/iframe');

    const frames = page.frames();

    console.log('Total Frames:', frames.length);

    for (const frame of frames) {

        console.log(frame.url());

    }

});
