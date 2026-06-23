import { test, expect } from '@playwright/test';

const testData = {
  url: 'http://inchn0335dc:3000/',
  username: 'infodba',
  password: 'infodba'
};

test('TC001 - Login and Sign Out from Teamcenter', async ({ page }) => {
  // Step 1: Log in to Teamcenter
  await page.goto(testData.url + 'login');
  await page.fill('#username', testData.username);
  await page.fill('#password', testData.password);
  await page.click('button[type="submit"]');

  // Expected: Verify login is successful
  await expect(page).not.toHaveURL(/login/i);

  // Step 2: Click the Profile Icon
  await page.getByLabel('Your Profile').click();

  // Expected: Verify Profile menu is displayed
  await expect(page.getByLabel('Sign Out')).toBeVisible();

  // Step 3: Click the Sign Out button
  await page.getByLabel('Sign Out').click();

  // Expected: Verify successfully logged out
  await expect(page).toHaveURL(/login/i);
});