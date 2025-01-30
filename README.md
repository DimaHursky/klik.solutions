#Setup
Clone the repository:

cd your-repo-name
Install dependencies: npm install

Install Playwright browsers: npx playwright install


#Running Tests
Run all tests: - npx playwright test

Run tests in headed mode (visible browser window): npx playwright test --headed

Run tests in a specific browser: npx playwright test --browser=chromium

Run a specific test file: npx playwright test tests/example.spec.js

#Test Reports
Playwright generates reports to analyze test results.
Generate and view an HTML report:

npx playwright test --reporter=html
npx playwright show-report

