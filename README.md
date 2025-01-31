# Playwright End to End suite template


- Make sure that the `NODE.JS` are install
- Download the repository: `https://github.com/DimaHursky/klik.solutions`
- Install: `npm install` or `yarn install`

## Starting up with Playwright

We have created a sample [Clerk](https://playwright.dev/docs/intro#installing-playwright)

1. start with `npm init playwright@latest` /npx playwright install
2. selest the  `JS` language
3. Check out the test by running the `npx playwright test`
4. To see have the tests runs use `npx playwright test --headed`
5. To debug the tests runs `npx playwright test --debug` (visible browser window)
6. Run a specific test file: `npx playwright test tests/example.spec.js`
6. Report: `npx playwright show-report`
6. Report: `npx playwright test --reporter=html`


## 📁 Structure

```sh
 |- playwright.config.js # Configuration file/s
 |- fixtures # Predefined fixture sets & their factory functions e.g. createSignupAttributes
 |- pages # Sets "Page Object" of pages for our applications
 |- tests # Here is the magic 🧙‍♂️
```

## 📜 Pages

For the suite template we chose to follow the PageObjects pattern in order to encapsulate each pages internal structure and responsibilities inside its own highly cohesive class file.

That means that for each page we would define a new Page object for our needs. We should not confuse the Page objects we create with actual pages in the application. We can think of Pages as a lightweight concept of a **view**, which is the set of cohesive elements living under a known browser location.

