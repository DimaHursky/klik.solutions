import { test, expect } from '@playwright/test';
import { HomePage } from "../../page-object/home-page";

 // Full HD screen resolution
test.use({
  viewport: { width: 1920, height: 1080 },
});

test.beforeEach(async ({ page }) => {
  await page.goto("");
});


test('Legal nonprofit', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.nonprofitsLink.click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Check Out Real Results', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.nonprofitsLink.click();

    await page.waitForTimeout(5000);

    await page.getByRole('heading', { name: 'Check Out Real Results and' }).hover();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Read more', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.nonprofitsLink.click();

    await page.waitForTimeout(5000);

    await page.getByText('Read more', { exact: true }).hover();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Klik for Support', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.nonprofitsLink.click();

    await page.waitForTimeout(5000);

    await page.getByRole('link', { name: 'Klik for Support' }).first().hover();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});