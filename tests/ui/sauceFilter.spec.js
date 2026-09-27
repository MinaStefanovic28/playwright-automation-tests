import { test, expect } from '@playwright/test';

test ('sauceFilter', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    
    const usernameField = page.locator('[id="user-name"]');
    const passwordFiled = page.locator('[id="password"]');
    const submitBtn = page.locator('[id="login-button"]');
    const inventoryItem = page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Fleece Jacket' });    const shoppingCart = page.locator('[id="shopping_cart_container"]');


    await usernameField.fill('standard_user');
    await passwordFiled.fill('secret_sauce');
    await submitBtn.press('Enter');
    await inventoryItem.getByRole('button', {name:"Add to cart"}).click();
    await shoppingCart.click();
    
    await expect(page.getByText('Sauce Labs Fleece Jacket')).toBeVisible;




})