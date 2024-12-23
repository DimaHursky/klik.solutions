// @ts-check
const { test, expect } = require("@playwright/test");
import { HomePage } from "../page-object/home-page";

test.use({
  viewport: { width: 1920, height: 1080 }, // Full HD screen resolution
});

test.beforeEach(async ({ page }) => {
  await page.goto("https://klik.solutions/");
});

test("menu drop-down modal", async ({ page }) => {
  const homePage = new HomePage(page);
  // Expertise drop-down
  await homePage.hoverOverExpertise();
  await homePage.verifyLinksVisibility();

  // Locators for the Locations links
  await homePage.hoverOverLocations();
  await homePage.verifyLocationLinksVisibility();

  // Industries drop-down
  await homePage.hoverOverIndustries();
  await homePage.verifyIndustryLinksVisibility();

  // Insights drop-down
  await homePage.hoverOverInsights();
  await homePage.verifyInsightsLinksVisibility();

  //Why Klik? drop-down
  await homePage.hoverOverWhyKlik();
  await homePage.verifyWhyKlikLinksVisibility();
});

test("verify home page link", async ({ page }) => {
  const homePage = new HomePage(page);

  // Click the get started link.
  await homePage.clickContactUs();
  await homePage.clickKlikSolutionsLink();

  await expect(page).toHaveURL(/.*klik.solutions/);
});

test("verify Book a Meeting link", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.clickBookMeetingButton();
  await homePage.isBookMeetingButtonVisible();

  // Wait for the new tab to open
  const page1 = await page.context().waitForEvent("page"); // Очікуємо відкриття нової вкладки

  await page1.waitForURL(/.*calendly.com/);

  // Verify that the new tab's URL contains 'calendly.com'
  expect(page1.url()).toMatch(/.*calendly.com/);
});

test("verify get started link", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.clickGetStartedButton();
  // await page.getByRole("button", { name: "Get started" }).click();

  await page.waitForURL("https://klik.solutions/klik-solutions-chat-bot/");

  // Verify that the new tab's URL contains 'calendly.com'
  expect(page.url()).toMatch(/.*klik-solutions-chat-bot/);
});

test("verify Managed IT Services, Cloud experts, Data analytics, Cybersecurity links on the homepage", async ({
  page,
}) => {
  const homePage = new HomePage(page);

  // Verify "Managed IT Services" link
  await homePage.clickManagedItServices();
  await homePage.goBackToHome();

  // Verify "Cybersecurity" link
  await homePage.clickCybersecurity();
  await homePage.goBackToHome();

  // Verify "Cloud experts" link
  await homePage.clickCloudExperts();
  await homePage.goBackToHome();

  // Verify "Data analytics" link
  await homePage.clickDataAnalytics();
  await homePage.goBackToHome();
});

test("verify industries link", async ({ page }) => {
  const homePage = new HomePage(page);

  // Verify each "Learn more" link opens the expected URL
  await homePage.verifyLearnMoreLink(0, /.*legal-it/); // First link
  await homePage.verifyLearnMoreLink(1, /.*it-construction/); // Second link
  await homePage.verifyLearnMoreLink(2, /.*healthcare-2/); // Third link
  await homePage.verifyLearnMoreLink(3, /.*accounting/); // Fourth link
});

test("verify Show more industries drop-down", async ({ page }) => {
  const homePage = new HomePage(page);

  // Click on "Show more industries"
  await homePage.showMoreIndustries();

  // Verify the visibility of "Industries we serve" items
  await homePage.verifyIndustriesVisibility();
});

test("verify Looking for support? link", async ({ page }) => {
  const homePage = new HomePage(page);

  // Click on the "Klik to support" link and verify navigation
  await homePage.clickSupportLink();

  // Verify the URL
  expect(page.url()).toMatch(/.*contact-us/);
});

// Services We Provide
// test("verify // Services We Provide carts", async ({ page }) => {
//   const homePage = new HomePage(page);

//   // Click on the "Klik to support" link and verify navigation
//   await homePage.clickSupportLink();

//   // Verify the URL
//   expect(page.url()).toMatch(/.*contact-us/);
// });