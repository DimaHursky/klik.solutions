import { test, expect } from '@playwright/test';
import { HomePage } from "../../page-object/home-page";

 // Full HD screen resolution
test.use({
  viewport: { width: 1920, height: 1080 },
});

test.beforeEach(async ({ page }) => {
  await page.goto("https://klik.solutions/");
});

test('Cloud ExpertsVisual', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverExpertise();
    await homePage.clickDataAnalytics();
    
    await expect(page).toHaveScreenshot(); 
});