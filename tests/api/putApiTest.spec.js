import { test, expect} from '@playwright/test';

test ('putApiTest', async ({ request }) => {

    const user2 = 'Mina' + Date.now();

    const createUser = await request.post('https://petstore.swagger.io/v2/user', {
        data: {
            id: 12345,
            username: user2,
            firstName: "Mina",
            lastName: "Test",
            email: "testtest2@gmailc.om",
            password: "pass",
            phone: "222222",
            userStatus: 0
        }
    });

    expect(createUser.status()).toBe(200);

     const putUser = await request.put(`https://petstore.swagger.io/v2/user/${user2}`, {
    data: {
        id: 12345,
            username: user2,
            firstName: "Mina Updated",
            lastName: "Test",
            email: "testtest2@gmailc.om",
            password: "pass",
            phone: "222222",
            userStatus: 2
    }
});

    expect(putUser.status()).toBe(200);

    const getUser = await request.get(`https://petstore.swagger.io/v2/user/${user2}`);

    expect(getUser.status()).toBe(200);

    const response = await getUser.json();
    expect(response.firstName).toBe('Mina Updated');











})