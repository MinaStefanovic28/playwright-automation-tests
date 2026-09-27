import { test, expect} from '@playwright/test';

test ('dropdown', async({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dropdown');

    const dropdown = page.locator('[id="dropdown"]');

    await dropdown.selectOption('2');

    await expect(page.getByText('Option 2')).toBeVisible;









})
