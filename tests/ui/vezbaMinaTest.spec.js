import { test, expect } from '@playwright/test';

test ('vezbaMinaTest', async ({ page }) => {
await page.goto('https://www.google.com/');

const searchInput = page.locator('[id="ti6dpd"]');
await searchInput.fill("Playwright");
await searchInput.press("Enter");

await expect(page.getByText("Playwright").first()).toBeVisible;



})