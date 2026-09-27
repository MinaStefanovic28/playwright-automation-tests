import { test, expect } from '@playwright/test';

test ('checkbox', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");

    const checkboxFirst = page.locator('input[type="checkbox"]').first();

    await checkboxFirst.check();

    await expect(checkboxFirst).toBeChecked();

    })