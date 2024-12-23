// const { test, expect } = require("@playwright/test");
// import { HomePage } from "../page-object/home-page";

// test.beforeEach(async ({ page }) => {
//   await page.goto("https://klik.solutions/");
// });

// test.only("verifyd link", async ({ page }) => {
//   const homePage = new HomePage(page);

//   await homePage.clickGetStartedButton();
//   const textToCheck = `Fast Growing MSSP with a Global Footprint`;
//   const textToCheckH3 = `In just 90 days, Klik will have your business onboarded and your IT fully operational,  with a tailored engineering structure, built and optimized to meet your specific business requirements.`;


//     // Verify that the text is exsist
    
//   await expect(page.locator(`text=${textToCheck, textToCheckH3}`)).toHaveCount(1);
// });
