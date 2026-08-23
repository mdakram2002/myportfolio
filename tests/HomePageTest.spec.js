import { test, expect } from '@playwright/test';

test('Home Page', async ({ page }) => {

  test.setTimeout(60000);

  await page.goto('https://mdakram.vercel.app', { timeout: 60000 });

  const pageTitle = await page.title();
  console.log("Page Title of Portfolio: ", pageTitle);

  const pageUrl = page.url();
  console.log("Page URL of Portfolio: ", pageUrl);

  await expect(page).toHaveURL('https://mdakram.vercel.app');
  await expect(page).toHaveTitle("Akram's Portfolio - Full Stack Engineer");

  await page.close();
});