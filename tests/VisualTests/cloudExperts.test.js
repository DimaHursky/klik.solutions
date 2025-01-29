import { test, expect } from '@playwright/test';
import { HomePage } from "../../page-object/home-page";

 // Full HD screen resolution
test.use({
  viewport: { width: 1920, height: 1080 },
});

test.beforeEach(async ({ page }) => {
  await page.goto("");
});

test('Cloud ExpertsVisual', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverExpertise();
    await homePage.clickCloudExperts();
  
  // Take a screenshot and compare it to the baseline snapshot
  await expect(page).toHaveScreenshot(); 
});

test('Neil Konstantoulas Explains', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverExpertise();
    await homePage.clickCloudExperts();

    await page.getByRole('heading', { name: 'Neil Konstantoulas Explains' }).hover();
    
    await expect(page).toHaveScreenshot(); 
});

test('Check Out Real Results and', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.hoverOverExpertise();
  await homePage.clickCloudExperts();

  await page.getByRole('heading', { name: 'Check Out Real Results and' }).hover();
  
  await expect(page).toHaveScreenshot(); 
});

test('When Cloud Can Help', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.hoverOverExpertise();
  await homePage.clickCloudExperts();

  await page.getByRole('heading', { name: 'When Cloud Can Help' }).hover();
  
  await expect(page).toHaveScreenshot(); 
});



test('Cloud Services We Offer', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.hoverOverExpertise();
  await homePage.clickCloudExperts();

  await page.getByRole('heading', { name: 'Cloud Services We Offer' }).hover();
  
  await expect(page).toHaveScreenshot(); 
});

test('Looking for support?', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.hoverOverExpertise();
  await homePage.clickCloudExperts();

  await page.getByText('Looking for support?').hover();
  
  await expect(page).toHaveScreenshot(); 
});

test('More Case Studies', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.hoverOverExpertise();
  await homePage.clickCloudExperts();

  await page.getByRole('link', { name: 'More Case Studies' }).hover();
  
  await expect(page).toHaveScreenshot(); 
});

test('Get started', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.hoverOverExpertise();
  await homePage.clickCloudExperts();

  await page.getByRole('link', { name: 'Get started' }).hover();
  
  await expect(page).toHaveScreenshot(); 
});

test('Subscribe to Our Monthly', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.hoverOverExpertise();
  await homePage.clickCloudExperts();

  await page.getByRole('heading', { name: 'Subscribe to Our Monthly' }).hover();
  
  await expect(page).toHaveScreenshot(); 
});