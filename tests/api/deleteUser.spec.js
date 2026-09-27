import { test, expect } from '@playwright/test';

test ('deleteUser', async ({ request}) => {

    const response = await request.delete('https://petstore.swagger.io/v2/user/MinaApi');

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data.message).toBe("MinaApi");








})