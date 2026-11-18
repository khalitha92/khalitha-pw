import { test } from '@playwright/test';

test('state methods example', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    console.log('Visible:',
        await page.locator('#name').isVisible());

    console.log('Hidden:',
        await page.locator('#dummy').isHidden());

    console.log('Enabled:',
        await page.locator('#name').isEnabled());

    console.log('Disabled:',
        await page.locator('#name').isDisabled());

    await page.locator('#sunday').check();

    console.log('Checked:',
        await page.locator('#sunday').isChecked());

    console.log('Editable:',
        await page.locator('#name').isEditable());
});