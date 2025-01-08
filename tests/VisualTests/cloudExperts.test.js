import { test, expect } from '@playwright/test';
import { HomePage } from "../../page-object/home-page";

 // Full HD screen resolution
test.use({
  viewport: { width: 1920, height: 1080 },
});

test.beforeEach(async ({ page }) => {
  await page.goto("https://klik.solutions/");
});

//Home page
test('Cloud ExpertsVisual', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverExpertise();
    await homePage.clickCloudExperts();
 
  // Take a screenshot and save it to a specific path
  // await page.screenshot({ path: 'tests/menuDropDowns/Expertise-drop-down-1-chromium-win32.png' });
  
  // Take a screenshot and compare it to the baseline snapshot
  await expect(page).toHaveScreenshot(); 
});

test('IoT Invasion Interconnected', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverExpertise();
    await homePage.clickCybersecurity();
    await page.getByText('IoT Invasion Interconnected').hover();
    
    await expect(page).toHaveScreenshot(); 
});