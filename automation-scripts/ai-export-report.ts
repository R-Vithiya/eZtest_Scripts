import { test, expect } from '../fixtures/test';

const loginUrl = 'http://inchn0335dc:3000/';
const username = 'infodba';
const password = 'infodba';

const loginUsers = [
  { url: loginUrl, username, password },
];

loginUsers.forEach(({ url, username, password }) => {
  test.describe('Export Report', () => {
    test('should export report successfully', async ({ basePage }) => {
      // Step 1: Log in to Teamcenter
      await basePage.goto(url);
      await basePage.signIn(username, password);
      await basePage.expectLoginSuccessful();

      // Step 2: Navigate to the Table Configurator page
      await basePage.goto('/table-configurator');
      await basePage.expectTableConfiguratorPageDisplayed();

      // Step 3: Click the Export button on the Table Configurator page
      await basePage.clickExportButton();
      await basePage.expectExportFormDisplayed();

      // Step 4: Click the Export button within the Export Form
      await basePage.clickExportFormExportButton();
      await basePage.expectExportProcessInitiated();

      // Step 5: Observe the notification message after the export operation completes
      await basePage.expectSuccessNotificationDisplayed();
    });
  });
});