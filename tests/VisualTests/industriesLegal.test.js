import { test, expect } from '@playwright/test';
import { HomePage } from "../../page-object/home-page";

 // Full HD screen resolution
test.use({
  viewport: { width: 1920, height: 1080 },
});

test.beforeEach(async ({ page }) => {
  await page.goto("https://klik.solutions/");
});


test('Legal page', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.healthcareLink.click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

// test('Legal page', async ({ page }) => {
//     const homePage = new HomePage(page);

//     await homePage.hoverOverIndustries();
//     await homePage.healthcareLink.click();

//     await page.waitForTimeout(5000);
    
//     await page.waitForTimeout(5000);

//     await expect(page).toHaveScreenshot(); 
// });