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
test('Expertise drop-down', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverExpertise();
  
  // Take a screenshot and save it to a specific path
  // // await page.screenshot({ path: 'tests/menuDropDowns/Expertise-drop-down-1-chromium-win32.png' });
  
  // Take a screenshot and compare it to the baseline snapshot
  await expect(page).toHaveScreenshot(); 
});

test('Locations drop-down', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.hoverOverLocations();
  await expect(page).toHaveScreenshot(); 
});

test('Industries drop-down', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.hoverOverIndustries();
  await expect(page).toHaveScreenshot(); 
});

test('Insights drop-down', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.hoverOverInsights();
  await expect(page).toHaveScreenshot(); 
});

test('WhyKlik? drop-down', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.hoverOverWhyKlik();
  await expect(page).toHaveScreenshot(); 
});


