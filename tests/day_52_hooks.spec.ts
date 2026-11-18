import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log('Runs once before all tests');
});

test.beforeEach(async ({ page }) => {
    console.log('Runs before every test');
});

test.afterEach(async ({ page }) => {
    console.log('Runs after every test');
});

test.afterAll(async () => {
    console.log('Runs once after all tests');
});
