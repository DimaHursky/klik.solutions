import { test, expect } from '@playwright/test';
import { HomePage } from "../../page-object/home-page";

 // Full HD screen resolution
test.use({
  viewport: { width: 1920, height: 1080 },
});

test.beforeEach(async ({ page }) => {
  await page.goto("https://klik.solutions/");
});


test('Miami, Florida', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Miami, Florida Our new office' }).click();

    await page.waitForTimeout(500);

    await expect(page).toHaveScreenshot(); 
});

test('Contact Sales', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Miami, Florida Our new office' }).click();
    await page.getByRole('link', { name: 'Contact Sales' }).hover();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});
test('Klik Solutions Miami offers:', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Miami, Florida Our new office' }).click();
    await page.getByRole('heading', { name: 'Klik Solutions Miami offers:' }).click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Our Managed IT Services in', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Miami, Florida Our new office' }).click();

    // await page.getByRole('heading', { name: 'Our Managed IT Services in' }).click();
    await page.getByRole('link', { name: 'Arthur location' }).hover();

    await expect(page).toHaveScreenshot(); 
});

test('Cloud Services Support,', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Miami, Florida Our new office' }).click();
    // await page.getByRole('heading', { name: 'Cloud Services Support,' }).click();
    await page.getByRole('img', { name: 'miami support' }).hover();
    
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Other Klik Solutions Locations', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Miami, Florida Our new office' }).click();
    await page.getByText('Baltimore IT Support Learn').hover();
    
    // await page.getByRole('heading', { name: 'Other Klik Solutions Locations' }).click();
    

    await page.waitForTimeout(5000);
    
    await expect(page).toHaveScreenshot(); 
});






//