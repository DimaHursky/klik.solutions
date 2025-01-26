import { test, expect } from '@playwright/test';
import { HomePage } from "../../page-object/home-page";

 // Full HD screen resolution
test.use({
  viewport: { width: 1920, height: 1080 },
});

test.beforeEach(async ({ page }) => {
    await page.waitForTimeout(500);
  await page.goto("https://klik.solutions/");
  await page.waitForTimeout(5000);
});


test('Legal Supply Chain Industry', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.supplyChainLink.click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Check Out Real Results and', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.supplyChainLink.click();

    await page.waitForTimeout(5000);
    await page.getByRole('heading', { name: 'Check Out Real Results and' }).click();


    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Read more', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.supplyChainLink.click();

    await page.waitForTimeout(5000);
    await page.getByText('Read more').hover();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Klik for Support', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.supplyChainLink.click();

    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Klik for Support' }).first().hover();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Why Klik Solutions?', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.supplyChainLink.click();

    await page.waitForTimeout(5000);
    await page.getByRole('heading', { name: 'Why Klik Solutions?' }).click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Five Essentials for Effective', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverOverIndustries();
    await homePage.supplyChainLink.click();

    await page.waitForTimeout(5000);
    await page.getByRole('heading', { name: 'Five Essentials for Effective' }).hover();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

