import { test, expect } from '@playwright/test';

 // Full HD screen resolution
test.use({
  viewport: { width: 1920, height: 1080 },
});

test.beforeEach(async ({ page }) => {
  await page.goto("https://klik.solutions/");
});

test('Home page', async ({ page }) => {
  
  // Take a screenshot and save it to a specific path
  await page.screenshot({ path: 'tests/VisualTesting.test.js-snapshots/Home-page-1-chromium-win32.png' });
  
  // Take a screenshot and compare it to the baseline snapshot
  await expect(page).toHaveScreenshot(); 
});

test('Our awards', async ({ page }) => {

  // Locate the text element
  await   await page.getByRole('heading', { name: 'Our awards and recognitions:' }).click();

  // Take a screenshot and save it to a specific path
  await page.screenshot({ path: 'tests/VisualTesting.test.js-snapshots/Our-awards-1-chromium-win32.png' });

  // Take a screenshot and compare it to the baseline snapshot
  await expect(page).toHaveScreenshot(); 
});

test('Check Out Real Results', async ({ page }) => {
 
  await page.getByRole('heading', { name: 'Check Out Real Results and' }).click();

  await page.screenshot({ path: 'tests/VisualTesting.test.js-snapshots/Check-Out-Real-Results-1-chromium-win32.png' });

  await expect(page).toHaveScreenshot();
});

test('Industries we serve', async ({ page }) => {

  await page.getByRole('heading', { name: 'Industries we serve' }).click();
  await page.waitForTimeout(5000);

  await page.screenshot({ path: 'tests/VisualTesting.test.js-snapshots/Industries-we-serve-1-chromium-win32.png' });

  await page.waitForTimeout(5000);
  await expect(page).toHaveScreenshot();
  await page.waitForTimeout(500);

});

test('Services We Provide', async ({ page }) => {
  
  await page.getByRole('heading', { name: 'Services We Provide' }).click();
  await page.waitForTimeout(5000);

  await page.screenshot({ path: 'tests/VisualTesting.test.js-snapshots/Services-We-Provide-1-chromium-win32.png' });
  await page.waitForTimeout(5000);
  await expect(page).toHaveScreenshot(); 
  await page.waitForTimeout(500);
});


test('Our clients feedback', async ({ page }) => {

  await page.getByRole('heading', { name: 'Our clients feedback' }).click();
  await page.waitForTimeout(5000);

  await page.screenshot({ path: 'tests/VisualTesting.test.js-snapshots/Our-clients-feedback-1-chromium-win32.png' });
  await page.waitForTimeout(5000);
  await expect(page).toHaveScreenshot(); 
  await page.waitForTimeout(500);
});

test('A part of Klik Holdings', async ({ page }) => {

  await page.getByRole('heading', { name: 'A part of Klik Holdings' }).click();
  await page.waitForTimeout(5000);

  await page.screenshot({ path: 'tests/VisualTesting.test.js-snapshots/A-part-of-Klik-Holdings-1-chromium-win32.png' });
  await page.waitForTimeout(5000);
  await expect(page).toHaveScreenshot(); 
  await page.waitForTimeout(500);
});


test('Managed security, IT', async ({ page }) => {

  await page.getByRole('heading', { name: 'Managed security, IT' }).click();
  await page.waitForTimeout(5000);

  await page.screenshot({ path: 'tests/VisualTesting.test.js-snapshots/Managed-security-IT-1-chromium-win32.png' });
  await page.waitForTimeout(5000);
  await expect(page).toHaveScreenshot(); 
  await page.waitForTimeout(500);
});

test('Subscribe to monthly newsletter', async ({ page }) => {

  await page.getByRole('heading', { name: 'Subscribe to our monthly newsletter' }).click();
  await page.waitForTimeout(5000);

  await page.screenshot({ path: 'tests/VisualTesting.test.js-snapshots/Subscribe-to-monthly-newsletter-1-chromium-win32.png' });
  await page.waitForTimeout(3000);
  await expect(page).toHaveScreenshot();
  await page.waitForTimeout(500);
});

test('PARTNERSHIP & COLLABORATION', async ({ page }) => {

  await page.getByRole('heading', { name: 'PARTNERSHIP & COLLABORATION' }).click();
  await page.waitForTimeout(5000);

  await page.screenshot({ path: 'tests/VisualTesting.test.js-snapshots/PARTNERSHIP-COLLABORATION-1-chromium-win32.png' });
  await page.waitForTimeout(3000);
  await expect(page).toHaveScreenshot();
  await page.waitForTimeout(500);
});