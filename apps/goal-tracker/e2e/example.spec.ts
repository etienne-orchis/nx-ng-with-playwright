/* eslint-disable playwright/valid-title */
import { test, expect } from '@playwright/test';

test('TR0006 - Test with steps', async () => {
  await test.step('S1 - First step', async () => {
    const result = 1; // Simulating a value
    expect(result).toBe(1); // Assertion for expected result
  });

  // Step 2: Second step, expect result to be 2
  await test.step('S2 - Second step', async () => {
    const result = 2; // Simulating another value
    expect(result).toBe(2); // Assertion for expected result
  });

  await test.step('S3 - Third step', async () => {
    const result = 2; // Simulating another value
    expect(result).toBe(2); // Assertion for expected result
  });
});
