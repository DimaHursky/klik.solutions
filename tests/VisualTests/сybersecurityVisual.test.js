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
test('CybersecurityVisual', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverExpertise();
    await homePage.clickCybersecurity();
 
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

test('Talk to an Expert', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverExpertise();
    await homePage.clickCybersecurity();
    await page.getByRole('link', { name: 'Talk to an Expert' }).hover();
    
    await expect(page).toHaveScreenshot(); 
});

test('Our Clients’ Feedback', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverExpertise();
    await homePage.clickCybersecurity();
    await page.getByRole('heading', { name: 'Our Clients’ Feedback' }).hover();
    
    await expect(page).toHaveScreenshot(); 
});

test('Real Case Studies from Our', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverExpertise();
    await homePage.clickCybersecurity();
    await page.getByRole('heading', { name: 'Real Case Studies from Our' }).hover();
    
    await expect(page).toHaveScreenshot(); 
});

test('Get eBooks', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverExpertise();
    await homePage.clickCybersecurity();
    await page.getByRole('link', { name: 'Get eBooks' }).hover();
    
    await expect(page).toHaveScreenshot(); 
});

test('Get started', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverExpertise();
    await homePage.clickCybersecurity();
    await page.getByRole('link', { name: 'Get started' }).hover();
    
    await expect(page).toHaveScreenshot(); 
});

test('Cybersecurity by Klik', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverExpertise();
    await homePage.clickCybersecurity();
    await page.getByRole('heading', { name: 'Cybersecurity by Klik' }).hover();
    
    await expect(page).toHaveScreenshot(); 
});

test('Subscribe to Our Monthly', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverExpertise();
    await homePage.clickCybersecurity();
    await page.getByRole('heading', { name: 'Subscribe to Our Monthly' }).hover();
    
    await expect(page).toHaveScreenshot(); 
});