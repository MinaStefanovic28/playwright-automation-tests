import { test, expect } from '@playwright/test';

test ('apiTest', async ({ request}) => {
const response = await request.post('https://petstore.swagger.io/v2/user' , {
    data: {
    id: 345,
    username: "MinaApi",
    firstName: "Milana",
    lastName: "Stefanovic",
    email: "minaQA@gmail.com",
    password: "sifrasifra",
    phone: "065893202",
    userStatus: 0
    }
})

expect(response.status()).toBe(200);

const body = await response.json();

expect(body.message).toBe('345');





} )