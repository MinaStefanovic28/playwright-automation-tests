import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByPlaceholder('Search').press('CapsLock');
  await page.getByPlaceholder('Search').fill('Sony playstation 5');
  await page.getByPlaceholder('Search').press('ArrowDown');
  await page.getByPlaceholder('Search').press('Enter');
  await page.goto('https://www.youtube.com/watch?v=2zd1Hbj9Pxc');
});