# Vibium Sample Framework

This is a sample project demonstrating the usage of [Vibium](https://www.npmjs.com/package/vibium), a browser automation library for Node.js.

## Prerequisites

- Node.js (version 14 or higher)
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/stalinkar/vibium-sample-framework.git
   cd vibium-sample-framework
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Project Structure

- `package.json`: Project configuration and dependencies
- `test.js`: Synchronous browser automation test example
- `tests/async_test.js`: Asynchronous browser automation test example

## Running Tests

This project uses Mocha for testing. You can run the tests using the following commands:

- Run all tests:
  ```bash
  npm test
  ```

- Run synchronous test only:
  ```bash
  npm run test:sync
  ```

- Run asynchronous test only:
  ```bash
  npm run test:async
  ```

## Test Description

The tests demonstrate basic browser automation using Vibium:

1. **Synchronous Test** (`test.js`): Uses `browserSync.launch()` for synchronous operations
2. **Asynchronous Test** (`tests/async_test.js`): Uses `browser.launch()` with async/await for asynchronous operations

Both tests perform the following steps:
- Launch a browser instance
- Navigate to a login page (https://the-internet.herokuapp.com/login)
- Take a screenshot before login
- Enter username and password
- Submit the form
- Verify successful login by checking the success message
- Take a screenshot after login
- Close the browser

Screenshots are saved in the `Screenshot/` directory (which is gitignored).

## Working on This Project

### Development Setup

1. Ensure you have Node.js and npm installed
2. Install dependencies: `npm install`
3. Run tests to verify everything works: `npm test`

### Adding New Tests

1. Create new test files in the `tests/` directory
2. Follow the naming convention: `*_test.js`
3. Use Mocha's `describe` and `it` for test structure
4. Import Vibium: `const { browser, browserSync } = require('vibium')`
5. Set appropriate timeouts for browser operations (e.g., `this.timeout(30000)`)

### Browser Automation Tips

- Vibium provides both synchronous (`browserSync`) and asynchronous (`browser`) APIs
- Use synchronous for simple scripts, asynchronous for better performance in complex scenarios
- Always call `vibe.quit()` or `await vibe.quit()` to close the browser
- Screenshots can be taken at any point: `vibe.screenshot()` or `await vibe.screenshot()`

### Contributing

When contributing to this sample project:
- Ensure tests pass before submitting changes
- Add new examples that demonstrate different Vibium features
- Update this README if you add new functionality
