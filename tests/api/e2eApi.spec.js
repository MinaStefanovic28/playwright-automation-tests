import { test, expect } from '@playwright/test';

test ('e2eApi', async ({ request}) => {

    const myUser = 'Mina' + Date.now();

    const postUser = await request.post('https://petstore.swagger.io/v2/user', {
        data:{
        id: 123,
        username: myUser,
        firstName: "Mina",
        lastName: "QA",
        email: "minaqa@gmail.com",
        password: "password",
        phone: "123456",
        userStatus: 0
    }
})

expect(postUser.status()).toBe(200);

await new Promise(r => setTimeout(r, 1000));

const getUser = await request.get(`https://petstore.swagger.io/v2/user/${myUser}`);
expect(getUser.status()).toBe(200);

const readUser = await getUser.json();
expect(readUser.username).toBe(myUser);


const deleteUser = await request.delete(`https://petstore.swagger.io/v2/user/${myUser}`);
expect(deleteUser.status()).toBe(200);


})