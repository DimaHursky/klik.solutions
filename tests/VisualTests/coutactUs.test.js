import { test, expect } from '@playwright/test';
import { HomePage } from "../../page-object/home-page";

 // Full HD screen resolution
test.use({
  viewport: { width: 1920, height: 1080 },
});

test.beforeEach(async ({ page }) => {
    await page.waitForTimeout(500);
  await page.goto("");
  await page.waitForTimeout(5000);
});


test('Coutact Us', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.contactUsLink.click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});
