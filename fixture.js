// import { test as base, expect } from "@playwright/test";
// import { HomePage } from "./page-object/home-page";
// import { SettingsPage } from "./settings-page";

// // Declare the types of your fixtures.
// type MyFixtures = {
//   homePage: HomePage,
//   settingsPage: SettingsPage,
// };

// // Extend the base test by providing "homePage" and "settingsPage".
// // This extended "test" will be used in multiple test files, and each of them will get the fixtures.
// export const test =
//   base.extend <
//   MyFixtures >
//   {
//     // homePage fixture setup
//     homePage: async ({ page }, use) => {
//       // Initialize HomePage with the page from Playwright
//       const homePage = new HomePage(page);
//       // Use the fixture value in the test
//       await use(homePage);
//     },

//     // settingsPage fixture setup
//     settingsPage: async ({ page }, use) => {
//       // Initialize SettingsPage with the page from Playwright
//       const settingsPage = new SettingsPage(page);
//       // Use the fixture value in the test
//       await use(settingsPage);
//     },
//   };

// export { expect };
