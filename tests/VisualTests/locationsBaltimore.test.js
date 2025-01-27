import { test, expect } from '@playwright/test';
import { HomePage } from "../../page-object/home-page";

 // Full HD screen resolution
test.use({
  viewport: { width: 1920, height: 1080 },
});

test.beforeEach(async ({ page }) => {
  await page.goto("https://klik.solutions/");
});


test('Baltimore, Maryland Baltimore', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Baltimore, Maryland Baltimore' }).click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Check Out Real Results and', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Baltimore, Maryland Baltimore' }).click();
    await page.getByRole('heading', { name: 'Check Out Real Results and' }).click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Klik Solutions provides', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Baltimore, Maryland Baltimore' }).click();
    await page.getByRole('link', { name: 'Baltimore, Maryland Baltimore' }).click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('How We can Help', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Baltimore, Maryland Baltimore' }).click();
    await page.getByText('Our awards and recognitions').click();
    await page.waitForTimeout(500);
    await page.getByRole('heading', { name: 'How We can Help' }).click();
    await page.getByRole('heading', { name: 'How We can Help' }).click();


    await page.waitForTimeout(500);

    await expect(page).toHaveScreenshot(); 
});

test('Our awards and recognitions', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Baltimore, Maryland Baltimore' }).click();
    await page.getByText('Our awards and recognitions').click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Other Klik Solutions Locations', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Baltimore, Maryland Baltimore' }).click();
    await page.waitForTimeout(500);
    await page.getByText('Austin IT Support Learn more').hover();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});