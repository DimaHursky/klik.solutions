import { test, expect } from '@playwright/test';
import { HomePage } from "../../page-object/home-page";

 // Full HD screen resolution
test.use({
  viewport: { width: 1920, height: 1080 },
});

test.beforeEach(async ({ page }) => {
    await page.waitForTimeout(500);
  await page.goto("");
  await page.waitForTimeout(5000);
});


test('Dental Practice', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.dentalPracticeLink.click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Check Out Real Results and', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.dentalPracticeLink.click();

    await page.waitForTimeout(5000);
    await page.getByRole('heading', { name: 'Check Out Real Results and' }).click();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('BENEFITS', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.dentalPracticeLink.click();

    await page.waitForTimeout(5000);
    await page.getByText('BENEFITS', { exact: true }).click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});


test('Looking for support?', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.dentalPracticeLink.click();

    await page.waitForTimeout(5000);

    await page.getByText('Looking for support?').click();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});