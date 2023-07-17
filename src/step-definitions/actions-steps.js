const { Given, When } = require('@wdio/cucumber-framework');
const Page = require('../pageobjects/page.js');
const page = new Page();

Given('I open the EPAM page', function() {
    return browser.url(`https://www.epam.com/`);
});

Given('The window is set to max', async function() {
    await browser.maximizeWindow();
});

When('I click the magnifier', async function() {
    await page.magnifier.click(); 
});  

When('I add {string}', async function(inputText) {
    return page.addSearchTerm(inputText);
});

When('I click find', async function() {
    await page.find.click();
});
