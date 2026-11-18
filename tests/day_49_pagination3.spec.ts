import { test, expect } from '@playwright/test';

test('Search and validate employee in pagination table', async ({ page }) => {

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

            const row = matchingRow.first();
            const cells = row.locator('td');

            const name = (await cells.nth(0).innerText()).trim();
            const position = (await cells.nth(1).innerText()).trim();
            const office = (await cells.nth(2).innerText()).trim();
            const age = (await cells.nth(3).innerText()).trim();
            const startDate = (await cells.nth(4).innerText()).trim();
            const salary = (await cells.nth(5).innerText()).trim();

            console.log('Employee details:');
            console.log('Name:', name);
            console.log('Position:', position);
            console.log('Office:', office);
            console.log('Age:', age);
            console.log('Start Date:', startDate);
            console.log('Salary:', salary);

            await expect(cells.nth(0)).toHaveText(employeeName);
            await expect(cells.nth(1)).toHaveText('JavaScript Developer');
            await expect(cells.nth(2)).toHaveText('Singapore');

            break;
        }

        if (await nextButton.isDisabled()) {
            break;
        }

        await nextButton.click();
    }

    expect(
        employeeFound,
        `Employee "${employeeName}" was not found in the table`
    ).toBeTruthy();
});
