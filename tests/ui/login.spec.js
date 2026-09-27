import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");

    const usernameField = page.locator('[id="username"]');
    const passwordFiled = page.locator('[id="password"]');
    const submitBtn = page.locator('button[type="submit"]');


    await usernameField.fill("pogresanUser");
    await passwordFiled.fill("pogresnaLozinka");
    await submitBtn.click();

    await expect(page.getByText("Your username is invalid!").first()).toBeVisible;
})