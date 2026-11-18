import { test, expect } from '@playwright/test';

test('Search employee in pagination table', async ({ page }) => {

    await page.goto(
        'https://datatables.net/examples/basic_init/zero_configuration.html'
    );

    const employeeName = 'Michael Bruce';
    const rows = page.locator('#example tbody tr');
    const nextButton = page.getByRole('link', { name: 'Next' });

    let employeeFound = false;

    while (true) {

        // Number of rows available on the current page
        const rowCount = await rows.count();
        console.log(`Rows on current page: ${rowCount}`);

        // Inspect each row on the current page
        for (let i = 0; i < rowCount; i++) {

            const row = rows.nth(i);
            const rowText = await row.innerText();

            console.log(rowText);

            if (rowText.includes(employeeName)) {
                console.log(`Employee found: ${employeeName}`);
                console.log(`Complete row details: ${rowText}`);

                employeeFound = true;
                break;
            }
        }

        // Stop when the employee is found
        if (employeeFound) {
            break;
        }

        // The current page has already been checked.
        // Stop when no additional page exists.
        if (await nextButton.isDisabled()) {
            break;
        }

        // Move to the next page
        await nextButton.click();
    }

    expect(employeeFound).toBeTruthy();
});
