import { test, expect } from '@playwright/test';
import { HomePage } from "../../page-object/home-page";

 // Full HD screen resolution
test.use({
  viewport: { width: 1920, height: 1080 },
});

test.beforeEach(async ({ page }) => {
  await page.goto("");
});


test('Legal page', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.legalLink.click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Check Out Real Results', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.healthcareLink.click();

    await page.waitForTimeout(5000);

    await page.getByRole('heading', { name: 'Check Out Real Results and' }).click();    
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});


test('BENEFITS', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.healthcareLink.click();

    await page.waitForTimeout(5000);

    await page.getByText('BENEFITS', { exact: true }).click();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Looking for support?', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.healthcareLink.click();

    await page.waitForTimeout(5000);

    await page.getByText('Looking for support?').click();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Learn more', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.healthcareLink.click();

    await page.waitForTimeout(5000);


    await page.getByText('Learn more', { exact: true }).hover();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});