import { test, expect } from '@playwright/test';

test ('findPetById', async ({ request }) => {

    const response = await request.get('https://petstore.swagger.io/v2/pet/175641');

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data.id).toBe(175641);






})