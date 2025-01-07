import { test, expect } from '@playwright/test';
import { HomePage } from "../../page-object/home-page";

 // Full HD screen resolution
test.use({
  viewport: { width: 1920, height: 1080 },
});

test.beforeEach(async ({ page }) => {
  await page.goto("https://klik.solutions/");
});

//ManagedItServices

test('ManagedItServices', async ({ page }) => {
  const homePage = new HomePage(page);

  // Locate the text element
  await homePage.clickManagedItServices();

  // Take a screenshot and save it to a specific path
  // await page.screenshot({ path: 'tests/managedItServices/Expertise-drop-down-1-chromium-win32.png' });

  // Take a screenshot and compare it to the baseline snapshot
  await expect(page).toHaveScreenshot(); 
});

test('How do we manage?', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.clickManagedItServices();
    await page.getByRole('heading', { name: 'How do we manage?' }).hover();

    await expect(page).toHaveScreenshot(); 
});

test('Visit Klik CORE Plus Package', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.clickManagedItServices();
    await page.getByRole('link', { name: 'Visit Klik CORE Plus Package' }).hover();
  
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
    await page.getByRole('heading', { name: 'What are your pain points? Contact us and we will solve them within 90 days!' }).hover();

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

    test.only('Get started', async ({ page }) => {
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

