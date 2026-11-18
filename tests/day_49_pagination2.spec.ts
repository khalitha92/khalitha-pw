import { test, expect } from '@playwright/test';

test('Find employee using hasText', async ({ page }) => {

    await page.goto(
        'https://datatables.net/examples/basic_init/zero_configuration.html'
    );

    const employeeName = 'Michael Bruce';
    const nextButton  = page.locator(
        'button.dt-paging-button.next')

    let employeeFound = false;

    while (true) {

        const matchingRow = page.locator('#example tbody tr', {
            hasText: employeeName
        });

        if (await matchingRow.count() > 0) {

            employeeFound = true;

            const rowText = await matchingRow.first().innerText();

            console.log(`Employee found: ${employeeName}`);
            console.log(`Row details: ${rowText}`);

            break;
        }

        if (await nextButton.isDisabled()) {
            break;
        }

        await nextButton.click();
    }

    expect(employeeFound).toBeTruthy();
});
