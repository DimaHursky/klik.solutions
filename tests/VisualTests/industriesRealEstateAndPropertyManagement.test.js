import { test, expect } from '@playwright/test';
import { HomePage } from "../../page-object/home-page";

 // Full HD screen resolution
test.use({
  viewport: { width: 1920, height: 1080 },
});

test.beforeEach(async ({ page }) => {
  await page.goto("");
});


test('Healthcare', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.realEstateLink.click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});


test('BENEFITS ', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.realEstateLink.click();

    await page.waitForTimeout(5000);
    await page.getByText('BENEFITS', { exact: true }).click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});
test('Are you tired of slow', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.realEstateLink.click();

    await page.waitForTimeout(5000);
    await page.getByText('Are you tired of slow').click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});
test('Dive into five essentials fo', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.realEstateLink.click();

    await page.waitForTimeout(5000);
    await page.getByText('Dive into five essentials for').click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});
