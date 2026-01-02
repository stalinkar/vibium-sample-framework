const fs = require('fs').promises
const { browser } = require('vibium')

describe('Asynchronous Browser Automation Test', function() {
  this.timeout(30000); // Set timeout to 30 seconds
  it('should perform login and verify success message', async function() {

    // Launch a browser (you'll see it open!)
    const vibe = await browser.launch()

    // Step 1: Navigate to login
    await vibe.go("https://the-internet.herokuapp.com/login");
    console.log('Loaded Login page')

    // Take a screenshot
    const png = await vibe.screenshot()
    await fs.writeFile(`Screenshot\login_${Date.now()}.png`, png)
    console.log('Saved login.png')

    // Step 2: Enter credentials and submit
    const usernameEl = await vibe.find("#username")
    await usernameEl.type("tomsmith");
    const passwordEl = await vibe.find("#password")
    await passwordEl.type("SuperSecretPassword!");
    const submitBtn = await vibe.find("button[type='submit']")
    await submitBtn.click();

    // Verify successful login
    const flashEl = await vibe.find(".flash.success")
    const successMessage = await flashEl.text()
    if (successMessage.includes("You logged into a secure area!")) {
      console.log('Login successful!')
    } else {
      console.log('Login failed!')
    }

    // Take another screenshot
    const png2 = await vibe.screenshot()
    await fs.writeFile(`Screenshot\success_${Date.now()}.png`, png2)
    console.log('Saved success.png')

    // Close the browser
    await vibe.quit()
    console.log('Done!')
  });
});