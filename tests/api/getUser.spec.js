import { test, expect } from '@playwright/test';

test ( 'getUser', async ({ request }) => { 
    const response = await request.get('https://petstore.swagger.io/v2/user/MinaApi')

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data.username).toBe("MinaApi");





})