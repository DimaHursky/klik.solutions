import { test, expect } from '@playwright/test';
import { HomePage } from "../../page-object/home-page";

 // Full HD screen resolution
test.use({
  viewport: { width: 1920, height: 1080 },
});

test.beforeEach(async ({ page }) => {
  await page.goto("https://klik.solutions/");
});


test('Austin, texas', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Austin, Texas' }).click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Check Out Real Results and', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Austin, Texas' }).click();
    await page.getByRole('heading', { name: 'Check Out Real Results and' }).click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Other Klik Solutions Locations', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverLocations();
    await page.getByRole('link', { name: 'Austin, Texas' }).click();
    await page.getByRole('heading', { name: 'Baltimore IT Support' }).click();


    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});