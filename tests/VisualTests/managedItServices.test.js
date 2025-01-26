import { test, expect } from '@playwright/test';
import { HomePage } from "../../page-object/home-page";

 // Full HD screen resolution
test.use({
  viewport: { width: 1920, height: 1080 },
});

test.beforeEach(async ({ page }) => {
  await page.goto("https://klik.solutions/");
  await page.waitForTimeout(2000);
});

test('How do we manage?', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.clickManagedItServices();
    await page.waitForTimeout(5000);
    await page.getByRole('heading', { name: 'How do we manage?' }).hover();
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
});

test('Visit Klik CORE Plus Package', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.clickManagedItServices();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Visit Klik CORE Plus Package' }).hover();
    await page.waitForTimeout(5000);
  
    await expect(page).toHaveScreenshot(); 
  });

  test('Check Out Real Results and Reviews', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.clickManagedItServices();
    await page.getByRole('heading', { name: 'Check Out Real Results and' }).hover();
  
    await expect(page).toHaveScreenshot(); 
  });

  test('Show more services', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.clickManagedItServices();
    
    await page.getByRole('button', { name: 'Show more services' }).hover();

    await expect(page).toHaveScreenshot(); 
  });

  test('What are your pain points?', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.clickManagedItServices();
    await page.waitForTimeout(5000);
    await page.getByRole('heading', { name: 'What Are Your Pain Points?', exact: true }).hover();

    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot(); 
  });

  test('Looking for support?', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.clickManagedItServices();
    await page.getByText('Looking for support?').hover();
    
    await expect(page).toHaveScreenshot(); 
  });

  test('More Case Studies', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.clickManagedItServices();
    await page.getByRole('link', { name: 'More Case Studies' }).hover();
    
    await expect(page).toHaveScreenshot(); 
  });

    test('Get started', async ({ page }) => {
      const homePage = new HomePage(page);
  
      await homePage.clickManagedItServices();
      await page.getByRole('link', { name: 'Get started' }).hover();

      await expect(page).toHaveScreenshot(); 
    });

    test('Arthur Olshansky Talks About', async ({ page }) => {
      const homePage = new HomePage(page);
  
      await homePage.clickManagedItServices();
      await page.getByRole('heading', { name: 'Arthur Olshansky Talks About' }).hover();
            
      await expect(page).toHaveScreenshot(); 
    });

    test('Subscribe to Our Monthly', async ({ page }) => {
      const homePage = new HomePage(page);
  
      await homePage.clickManagedItServices();
      await page.getByRole('heading', { name: 'Subscribe to Our Monthly' }).click();
            
      await expect(page).toHaveScreenshot(); 
    });

    test('Frequently Asked Questions', async ({ page }) => {
      const homePage = new HomePage(page);
  
      await homePage.clickManagedItServices();
      await page.getByRole('heading', { name: 'Frequently Asked Questions' }).click();
            
      await expect(page).toHaveScreenshot(); 
    });

