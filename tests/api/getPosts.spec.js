import { test, expect } from '@playwright/test';

test ('getPosts', async ({ request }) => {

const response = await request.get('https://jsonplaceholder.typicode.com/posts');

expect(response.status()).toBe(200);

const list = await response.json();

expect(list.length).toBeGreaterThan(0);
expect(list[0]).toHaveProperty('id');




})