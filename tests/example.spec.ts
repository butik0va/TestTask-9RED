const {test, expect} = require('@playwright/test');

test('Проверка заголовка Playwright', async ({page}) => {
  await page.goto('https://playwright.dev/');


  await expect(page).toHaveTitle(/Playwright/);
});