import { test, expect } from '@playwright/test';

test ('e2eQuerry', async ({ request}) => {

    const response = await request.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available');
    
    expect(response.status()).toBe(200);

    const responseData = await response.json();

    const pet = responseData[0];

    expect(pet.status).toBe('available');











})