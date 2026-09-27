import { test, expect } from '@playwright/test';

test('filterTest', async ({ request }) => {

    const userFilter = await request.get(`https://jsonplaceholder.typicode.com/posts?userId=3`);

    expect(userFilter.status()).toBe(200);

    const userList = await userFilter.json();

    expect(userList.length).toBeGreaterThan(0);

    const user1 = userList[0];
    const user2 = userList[1];

    expect(user1.userId).toBe(3);
    expect(user2.userId).toBe(3);

    expect(user1.title).toBeTruthy();
    expect(user2.title).toBeTruthy();



})