import { test, expect } from '@playwright/test';

test('userProfilTest', async ({ request}) => {

    const name = 'Pera' + Date.now();

    const postUser = await request.post('https://reqres.in/api/users', {
        data: {
            name: name,
            job: 'QA tester',
        }
    });

    expect(postUser.status()).toBe(201);

    const responseData = await postUser.json();
    expect(responseData.id).toBeTruthy();

    const getUser = await request.get('https://reqres.in/api/users?page=2');

    expect(getUser.status()).toBe(200);

    const getUserData = await getUser.json();

    expect(getUserData.data.length).toBeGreaterThan(0);

    const user1 = getUserData.data[0];

    expect(user1.email).toBeTruthy();













})