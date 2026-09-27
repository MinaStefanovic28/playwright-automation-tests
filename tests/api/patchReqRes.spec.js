import { test, expect} from '@playwright/test';

test ('patchReqRes', async ({ request}) => {

    const updateUser = await request.patch('https://reqres.in/api/users/2', {
        data: {
            "name": "Mina QA",
            "job": "Automation Engineer"
        }
    });

    expect(updateUser.status()).toBe(200);

    const response = await updateUser.json();

    expect(response.job).toBe('Automation Engineer');











})