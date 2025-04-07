import { test, expect } from '@playwright/test';

test('TR0001 - has title', async ({ page }) => {
  await page.goto('https://www.qatouch.com/');
  await expect(page).toHaveTitle(
    /Comprehensive Test Management Tool For Small QA Teams/
  );
});
