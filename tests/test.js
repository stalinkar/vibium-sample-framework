const fs = require('fs')
const { browserSync } = require('vibium')

describe('Login Test', function() {
  this.timeout(30000); // Set timeout to 30 seconds
  it('should log in successfully', async () => {
    // Launch a browser (you'll see it open!)
    const vibe = browserSync.launch()

    // Step 1: Navigate to login
    vibe.go("https://the-internet.herokuapp.com/login");
    console.log('Loaded Login page')

    // Take a screenshot
    const png = vibe.screenshot()
    fs.writeFileSync(`Screenshot\login_${Date.now()}.png`, png)
    console.log('Saved login.png')

    // Step 2: Enter credentials and submit
    vibe.find("#username").type("tomsmith");
    vibe.find("#password").type("SuperSecretPassword!");
    vibe.find("button[type='submit']").click();

    // Verify successful login
    const successMessage = vibe.find(".flash.success").text()
    if (successMessage.includes("You logged into a secure area!")) {
      console.log('Login successful!')
    } else {
      console.log('Login failed!')
    }

    // Take another screenshot
    const png2 = vibe.screenshot()  
    fs.writeFileSync(`Screenshot\success_${Date.now()}.png`, png2)
    console.log('Saved success.png')

    // Close the browser
    vibe.quit()
    console.log('Done!')
  })
})