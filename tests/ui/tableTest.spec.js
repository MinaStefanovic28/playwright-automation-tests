import { test, expect } from '@playwright/test';

test ('tableTest', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/tables');

    const smithRow = page.locator('#table1 tbody tr').filter({hasText:'Smith'});

    await expect(smithRow).toContainText('$50.00');



})