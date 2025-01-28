// @ts-check
const { test, expect } = require("@playwright/test");
import { HomePage } from "../page-object/home-page";

test.use({
  viewport: { width: 1920, height: 1080 }, // Full HD screen resolution
});

test.beforeEach(async ({ page }) => {
  await page.goto("https://klik.solutions/");
  // await page.goto("https://staging.klik.solutions/");
  await page.waitForTimeout(2000);
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
  await expect(page1.url()).toMatch(/.*calendly.com/);
});

test("verify get started link", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.clickGetStartedButton();
  // await page.getByRole("button", { name: "Get started" }).click();

  await page.waitForURL("https://klik.solutions/klik-solutions-chat-bot/");

  // Verify that the new tab's URL contains 'calendly.com'
  await expect(page.url()).toMatch(/.*klik-solutions-chat-bot/);
});

test("verify Managed IT Services, Cloud experts, Data analytics, Cybersecurity links on the homepage", async ({
  page,
}) => {
  const homePage = new HomePage(page);

  // Verify "Managed IT Services" link
  await homePage.clickManagedItServices();
  await page.waitForTimeout(1500);
  await homePage.goBackToHome();
  await page.waitForTimeout(1500);

  // Verify "Cybersecurity" link
  await page.locator('#container').getByRole('link', { name: 'Cybersecurity', exact: true }).click();
  await page.waitForTimeout(1500);
  await homePage.goBackToHome();
  await page.waitForTimeout(1500);


  // Verify "Cloud experts" link
  // await homePage.clickCloudExperts();
  await page.locator('#container').getByRole('link', { name: 'Cloud Experts', exact: true }).click();
  await page.waitForTimeout(1500);
  await homePage.goBackToHome();
  await page.waitForTimeout(1500);


  // Verify "Data analytics" link
  await page.getByRole('link', { name: 'Data Services', exact: true }).click();
  await page.waitForTimeout(1500);
  await homePage.goBackToHome();
  await page.waitForTimeout(1500);

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

test("verify Looking for support?, Klik to support link", async ({ page }) => {
  const homePage = new HomePage(page);
 
  // Click on the "Klik to support" link and verify navigation
  await homePage.clickSupportLink();
  // const page1 = await page.context().waitForEvent("page"); 
  // Verify the URL
  await expect(page.url()).toMatch(/.*contact-us/);

  // await page.getByRole('link', { name: 'Klik for Support' }).click();
  // const page1 = await context.newPage();
});

// Services We Provide
test("verify 'Services We Provide' cards show extra text when hovered", async ({ page }) => {
  const homePage = new HomePage(page);

  // Verify each card's hover effect reveals the extra text
  await homePage.verifyHoverEffect(
    homePage.managedITServicesCard,
    homePage.managedITServicesText
  );

  await homePage.verifyHoverEffect(
    homePage.cybersecurityCard,
    homePage.cybersecurityText
  );

  await homePage.verifyHoverEffect(
    homePage.cloudExpertsCard,
    homePage.cloudExpertsText
  );

  await homePage.verifyHoverEffect(
    homePage.dataAnalyticsCard,
    homePage.dataAnalyticsText
  );
});
test("Our clients feedback vodeo opens and close", async ({ page }) => {
  const homePage = new HomePage(page);

    while (!(await page.getByRole("button", { name: "Close" }).isVisible())) {
      await page.getByRole("link", { name: "video 8" }).click();
      await page.waitForTimeout(500); // Optional delay to prevent excessive looping
    }

    await expect(page.getByRole("button", { name: "Close" })).toBeVisible();

  // await page.getByRole("link", { name: "video 8" }).click();
  // await page.getByRole("link", { name: "video 8" }).click();

  // await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();

});

test("A part of Klik Holdings links", async ({ page }) => {
  const homePage = new HomePage(page);

  // Verify each link
  await homePage.verifyPopupLink("1 4", /.*klik.solutions/);
  await homePage.verifyPopupLink("2 5", /.*kliksoft.dev/);
  await homePage.verifyPopupLink("3 6", /.*klikanalytics.co/);
  await homePage.verifyPopupLink("5 1", /.*kliksolutions.com.ua/);
  await homePage.verifyPopupLink("6 1", /.*klikdigital.co/);

  // const page1Promise = page.waitForEvent("popup");
  // await page.getByRole("link", { name: "1 4" }).click();
  // const page1 = await page1Promise;
  //   await expect(page1.url()).toMatch(/.*klik.solutions/);
  // await expect(page.url()).toMatch(/.*/);
  // await page1.close();

  // const page2Promise = page.waitForEvent("popup");
  // await page.getByRole("link", { name: "2 5" }).click();
  // const page2 = await page2Promise;
  // await expect(page2.url()).toMatch(/.*kliksoft.dev/);
  // await page2.close();

  // const page3Promise = page.waitForEvent("popup");
  // await page.getByRole("link", { name: "3 6" }).click();
  // const page3 = await page3Promise;
  // await expect(page3.url()).toMatch(/.*klikanalytics.co/);
  // await page3.close();

  // const page4Promise = page.waitForEvent("popup");
  // await page.getByRole("link", { name: "5 1" }).click();
  // const page4 = await page4Promise;
  // await expect(page4.url()).toMatch(/.*kliksolutions.com.ua/);
  // await page4.close();

  // const page5Promise = page.waitForEvent("popup");
  // await page.getByRole("link", { name: "6 1" }).click();
  // const page5 = await page5Promise;
  // await expect(page5.url()).toMatch(/.*klikdigital.co/);
  // await page5.close();
});

test("Learn more - How to choose the right Security and IT services", async ({
  page,
}) => {
  const homePage = new HomePage(page);

  await page
    .locator("div")
    .filter({ hasText: /^Learn more$/ })
    .locator("a")
    .click();
  await expect(page.getByText("Hide")).toBeVisible();

  await page.getByText("Hide").click();
  await page.waitForTimeout(500); // Optional delay to prevent excessive looping
  await expect(page.getByText("Read more")).toBeVisible();
  await expect(page.getByText("Hide")).toBeHidden();

});

test("The vodeo REVIEWS Our clients feedback are opens", async ({
  page,
}) => {
  const homePage = new HomePage(page);

  await page.getByRole("link", { name: "video 8" }).click();

  await expect(page.getByRole("button", { name: "Close" })).toBeVisible();
  await page.getByRole("button", { name: "Close" }).click();
  await expect(page.getByRole("button", { name: "Close" })).toBeHidden();
});

test("Subscribe to monthly newsletter successfully", async ({ page }) => {
  const homePage = new HomePage(page);

  await page.getByText("F.A.Q.").click();
  await page.waitForTimeout(1000); // Optional delay to prevent excessive looping

  // Assertion to confirm the field is not empty
  let currentValue = await page.getByPlaceholder("First name*").inputValue();

  while (!currentValue) {
    await page.getByPlaceholder("First name*").fill("Test");
    currentValue = await page.getByPlaceholder("First name*").inputValue(); // Re-check the value
  }

  await expect(page.getByPlaceholder("First name*")).not.toBeEmpty();

  let currentValuelastName = await page
    .getByPlaceholder("Last name*")
    .inputValue();

  while (!currentValuelastName) {
    await page.getByPlaceholder("Last name*").fill("Test");
    currentValuelastName = await page
      .getByPlaceholder("Last name*")
      .inputValue(); // Re-check the value
  }

  await expect(page.getByPlaceholder("Last name*")).not.toBeEmpty();

  await page.getByPlaceholder("Business email*").fill("test@klikdigital.co");
  await page.getByPlaceholder("Phone number*").fill("00000000");
  await page.waitForTimeout(500); // Optional delay to prevent excessive looping

  // Agree to terms
  await page.getByLabel("I agree to the Terms and").check();
  await page.waitForTimeout(1500); // Optional delay to prevent excessive looping
  

  // Submit the form
  await page.getByRole("button", { name: "Subscribe" }).click();

  // Wait for the request to be sent
  await page.waitForRequest(
    (request) =>
      request.url() ===
        "https://forms.hscollectedforms.net/collected-forms/submit/form" &&
      request.method() === "POST"
  );

  // TODO: add a new task, to add the banner
  // Confirm subscription success
  // await expect(page.getByText("Thank you for subscribing!")).toBeVisible();
});

test("Frequently Asked Questions drobdowns works", async ({ page }) => {
  const homePage = new HomePage(page);
 
  await page.getByRole('heading', { name: 'What are managed security and' }).click();
  await expect(await page.getByText('Managed security and IT services provide IT support for all kinds of tech-')).toBeVisible();
  await page.getByRole('heading', { name: 'What are managed security and' }).click();
  await expect(await page.getByText('Managed security and IT services provide IT support for all kinds of tech-')).toBeHidden();

  await page.getByRole('heading', { name: 'What is meant by IT support? +' }).click();
  await expect(await page.getByText('Comprehensive security and IT support includes a wide range of services')).toBeVisible();
  await page.getByRole('heading', { name: 'What is meant by IT support? -' }).click();
  await expect(await page.getByText('Comprehensive security and IT support includes a wide range of services')).toBeHidden();

  await page.getByRole('heading', { name: 'Why do companies need managed' }).click();
  await expect(await page.getByText('A successful support team')).toBeVisible();
  await page.getByRole('heading', { name: 'Why do companies need managed' }).click();
  await expect(await page.getByText('A successful support team')).toBeHidden();

  await page.getByRole('heading', { name: 'What do our team members do? +' }).click();
  await page.getByText('Our team of professionals').click();
  await page.getByRole('heading', { name: 'What do our team members do? -' }).click();

  await page.getByRole('heading', { name: 'How do these services help' }).click();
  await page.getByText('An MSSP helps businesses with').click();
});

test("PARTNERSHIP & COLLABORATION links", async ({ page }) => {
  const homePage = new HomePage(page);

  // await page.getByLabel('1 of').click();

  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'microsoftlogo' }).click();
  const page1 = await page1Promise;
  await expect(page1.url()).toMatch("https://www.microsoft.com/uk-ua/");
  await page1.close();

  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'molnii logo' }).click();
  const page2 = await page2Promise;
  await expect(page2.url()).toMatch("https://www.molnii.com/");
  await page2.close();

  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'ThreatDefence' }).click();
  const page3 = await page3Promise;
  await page3.waitForURL(/.*threatdefence.com/)
  await expect(page3.url()).toMatch(/.*threatdefence.com/);
  await page3.close();

  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'jetstorlogo' }).click();
  const page4 = await page4Promise;
  await page4.waitForURL(/.*jetstor.com/)
  await expect(page4.url()).toMatch(/.*jetstor.com/);
  await page4.close();

  // const page5Promise = page.waitForEvent('popup');
  // await page.getByRole('link', { name: 'sophoslogo' }).click();
  // const page5 = await page5Promise;
  // await page5.waitForTimeout(500);
  // await page5.waitForURL("https://www.sophos.com/en-us");
  // await expect(await page5.url()).toMatch(/.*sophos.com/);
  // await page5.close();

  const page6Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Dell Technologies logo sm' }).click();
  const page6 = await page6Promise;
  await page6.waitForTimeout(5000);
  // await page6.waitForURL(/.* dell.com/);
  await expect(page6.url()).toMatch("https://www.dell.com/uk-ua/lp");
  // await expect(page6.url()).toMatch(/.* dell.com/);
  await page6.close();

  // await page.getByLabel('2 of').click();
  // await page.getByLabel('3 of').click();
});

// test.only("Subscribe to our monthly newsletter", async ({ page }) => {
//   const homePage = new HomePage(page);

//   await page.getByRole("link", { name: "video 8" }).click();
//   await page.getByRole("link", { name: "video 8" }).click();

//   await expect(page.getByRole("button", { name: "Close" })).toBeVisible();

  // await page1.goto("https://www.youtube.com/watch?v=lwqoVz9BQK8&t=3s");

  // await page.getByText("Managed IT ServicesKlik").hover();
  // await expect(
  //   page.getByText(
  //     "Klik Solutions’ managed IT services optimize your business operations with tailored support, proactive monitoring, and minimal downtime, allowing you to focus on growth."
  //   )
  // ).toBeVisible();

  // Verify the URL
  // expect(page.url()).toMatch(/.*contact-us/);
// });

// test.only("Subscribe to our monthly newsletter", async ({ page }) => {
//   const homePage = new HomePage(page);

//   await page.getByRole("link", { name: "video 8" }).click();
//   await page.getByRole("link", { name: "video 8" }).click();

//   await expect(page.getByRole("button", { name: "Close" })).toBeVisible();

  // await page1.goto("https://www.youtube.com/watch?v=lwqoVz9BQK8&t=3s");

  // await page.getByText("Managed IT ServicesKlik").hover();
  // await expect(
  //   page.getByText(
  //     "Klik Solutions’ managed IT services optimize your business operations with tailored support, proactive monitoring, and minimal downtime, allowing you to focus on growth."
  //   )
  // ).toBeVisible();

  // Verify the URL
  // expect(page.url()).toMatch(/.*contact-us/);
// });