import { test, expect } from '@playwright/test';
import { HomePage } from "../../page-object/home-page";

 // Full HD screen resolution
test.use({
  viewport: { width: 1920, height: 1080 },
});

test.beforeEach(async ({ page }) => {
  await page.goto("https://klik.solutions/");
});


test('Healthcare', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.healthcareLink.click();

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

test('Gear up your on-the-move', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.healthcareLink.click();

    await page.waitForTimeout(5000);

    await page.getByText('Gear up your on-the-move').click();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('A knowledgeable support team', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.healthcareLink.click();

    await page.waitForTimeout(5000);

    await page.getByRole('heading', { name: 'A knowledgeable support team' }).click();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});


