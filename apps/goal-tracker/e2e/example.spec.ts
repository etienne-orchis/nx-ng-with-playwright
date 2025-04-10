import { test, expect } from '@playwright/test';

test('TR0001 - QA Touch home page title rendering', async ({ page }) => {
  await page.goto('https://www.qatouch.com/');
  await expect(page).toHaveTitle(
    /Comprehensive Test Management Tool For Small QA Teams/
  );
});

test('TR0002 - Has the right app title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Goal tracker/);
});

test('TR0003 - Test with steps', async () => {
  await test.step('TR0003 - First step', async () => {
    const result = 1; // Simulating a value
    expect(result).toBe(1); // Assertion for expected result
  });

  // Step 2: Second step, expect result to be 2
  await test.step('TR0003 - Second step', async () => {
    const result = 2; // Simulating another value
    expect(result).toBe(2); // Assertion for expected result
  });
});
