import { test, expect } from '@playwright/test';

test("Page navigation and information methods", async ({ page }) => {

    await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/");

    const countryDropdown = page.getByLabel(
        "Select country from below drop down list:"
    );
    await countryDropdown.selectOption({ index:1 });

await expect(countryDropdown).toHaveValue("Afghanistan");


});
