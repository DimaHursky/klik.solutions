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
    await homePage.accountingLink.click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Conducting detailed Security', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.accountingLink.click();
    await page.waitForTimeout(5000);

    await page.getByText('Conducting detailed Security').click();  
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('BENEFITS', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.accountingLink.click();
    await page.waitForTimeout(5000);

    await page.getByText('BENEFITS', { exact: true }).click();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Gear up your on-the-move', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.accountingLink.click();
    await page.waitForTimeout(5000);

    await page.getByText('Gear up your on-the-move').click();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Learn more', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.accountingLink.click();
    await page.waitForTimeout(5000);

    await page.getByText('Learn more').nth(2).click();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});