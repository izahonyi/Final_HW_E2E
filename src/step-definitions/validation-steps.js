const { Then } = require("@wdio/cucumber-framework");
const compareText = require("./utils/compare-text");
const Page = require('../pageobjects/page.js');
const page = new Page();

Then('Page title should {string} {string}', async function(shouldBeParameter, titleText) {
    const pageTitle = await browser.getTitle();
    return compareText(pageTitle, titleText, shouldBeParameter); 
}); 

Then('header logo is displayed', async function() {
    page.logo.waitForDisplayed(1000);
    await expect(page.logo).toBeDisplayed();
}); 

Then('the magnifier is displayed', async function() {
    page.magnifier.waitForDisplayed(1000);
    await expect(page.magnifier).toBeDisplayed();
})

Then('the inputfield is displayed', async function() {
    page.inputfield.waitForDisplayed(1000);
    await expect(page.inputfield).toBeDisplayed();
});

Then('the counter is displayed', async function() {
    page.counter.waitForDisplayed(1000);
    await expect(page.counter).toBeDisplayed();
});

Then('the counter text should {string} {string}', async function(shouldBeParameter, counterText) {
    const savedTitle = await page.counter.getText();
    return compareText(savedTitle, counterText, shouldBeParameter);
});