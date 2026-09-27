import { test, expect} from '@playwright/test';

test ('userNotFound', async ({ request }) => {

const nepostojeciUser = "NotFound" + Date.now();

const getUser = await request.get(`https://petstore.swagger.io/v2/user/$){nepostojeciUser}`);

expect(getUser.status()).toBe(404);

const response = await getUser.json();

expect(response.message).toContain("User not found");







})