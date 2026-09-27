import { test, expect } from '@playwright/test';

test ('saucedemoLogin', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    const usernameInput = page.locator('[id="user-name"]');
    const passwordInput = page.locator('[id="password"]');
    const submitButton = page.locator('[id="login-button"]');
    const addToCart = page.locator('[id="add-to-cart-sauce-labs-backpack"]');
    const shoppingCart = page.locator('[id="shopping_cart_container"]');
    const checkoutBtn = page.locator('[id="checkout"]');



    await usernameInput.fill('standard_user');
    await passwordInput.fill('secret_sauce');
    await submitButton.click();
    await addToCart.click();
    await shoppingCart.click();

    await expect(checkoutBtn).toBeVisible;







})