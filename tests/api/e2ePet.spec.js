import { test, expect } from '@playwright/test';

test ( 'e2ePet', async ({ request }) => {

const username = 'Mina' + Date.now();

const postUser = await request.post('https://petstore.swagger.io/v2/user', {
    data: {
        id: 28,
        username: username,
        firstName: "Mina",
        lastName: "QA",
        email: "test@gmail.com",
        password: "password",
        phone: "12345",
        userStatus: 0
    }
});

expect(postUser.status()).toBe(200);
const putUser = await request.put(`https://petstore.swagger.io/v2/user/${username}`, {
    data: {
        id: 28,
        username: username,
        firstName: "Mina2",
        lastName: "QA",
        email: "test@gmail.com",
        password: "password",
        phone: "12345",
        userStatus: 1  
    }
});

expect(postUser.status()).toBe(200);

const getData = await request.get(`https://petstore.swagger.io/v2/user/${username}`);
expect(getData.status()).toBe(200);

const responseData = await getData.json();
expect(responseData.firstName).toBe('Mina2');

const deleteUser = await request.delete(`https://petstore.swagger.io/v2/user/${username}`);
expect(deleteUser.status()).toBe(200);

const getUser = await request.get(`https://petstore.swagger.io/v2/user/${username}`);
expect(getUser.status()).toBe(404);







})