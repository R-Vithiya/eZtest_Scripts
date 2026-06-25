import { test, expect } from '../fixtures/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

describe('Login and SignOut', () => {
  test('login and sign out', async ({ basePage, page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    const url = 'http://inchn0335dc:3000/';
    const username = 'infodba';
    const password = 'infodba';

    await loginPage.goto(url);
    await loginPage.signIn(username, password);
    await loginPage.expectLoginSuccessful();

    await dashboardPage.clickProfileIconToggle();
    await dashboardPage.expectProfileIconToggled();

    await dashboardPage.clickSignOutButton();
    await dashboardPage.expectSignedOut();
  });
});