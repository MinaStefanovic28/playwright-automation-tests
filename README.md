# Playwright Test Automation Suite

Automated UI and API test suite covering core end-to-end user scenarios and REST API endpoint validations. 
The framework is built using Playwright with JavaScript.

## Technologies Used
* JavaScript (Node.js)
* Playwright
* REST API Testing

## Project Structure
* `tests/api/` - API test scripts covering endpoint responses, status codes, and HTTP methods (GET, POST, PUT, DELETE)
* `tests/ui/` - UI test scripts covering user interface interactions and form validations
* `playwright.config.js` - Playwright global runner setup

## Setup and Run Instructions

1. Clone the repository:
   git clone https://github.com/MinaStefanovic28/playwright-automation-tests.git

2. Install dependencies:
   npm install

3. Run all tests:
   npx playwright test

4. Run only API tests:
   npx playwright test tests/api

5. Run only UI tests:
   npx playwright test tests/ui
