import { test, expect } from '@playwright/test';
import { HomePage } from "../../page-object/home-page";

 // Full HD screen resolution
test.use({
  viewport: { width: 1920, height: 1080 },
});

test.beforeEach(async ({ page }) => {
  await page.goto("https://klik.solutions/");
});


test('Kyiv, Ukraine Klik Support', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Kyiv, Ukraine Klik Support' }).click();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Check Out Real Results and', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Kyiv, Ukraine Klik Support' }).click();
    await page.waitForTimeout(500);

    await page.getByRole('heading', { name: 'Check Out Real Results and' }).click();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Back Up Services in Kyiv,', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.waitForTimeout(500);

    await page.getByRole('link', { name: 'Kyiv, Ukraine Klik Support' }).click();
    await page.getByRole('heading', { name: 'Back Up Services in Kyiv,' }).click();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Why Choose Klik Support', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Kyiv, Ukraine Klik Support' }).click();
    await page.waitForTimeout(500);

    await page.getByRole('heading', { name: 'Why Choose Klik Support' }).click();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Our awards and recognitions:', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Kyiv, Ukraine Klik Support' }).click();
    await page.waitForTimeout(500);

    // await page.getByRole('heading', { name: 'Services we provide' }).click();
    await page.getByRole('heading', { name: 'Our awards and recognitions' }).click();
    await page.waitForTimeout(500);


    await expect(page).toHaveScreenshot(); 
});


test('Other Klik Solutions Locations', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Kyiv, Ukraine Klik Support' }).click();
    await page.waitForTimeout(500);

    await page.getByText('Baltimore IT Support Learn').hover();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

