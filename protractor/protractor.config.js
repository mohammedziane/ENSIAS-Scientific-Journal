exports.config = {
    directConnect: true,
    specs: ['./specs/*.spec.js'],
    allScriptsTimeout : 12345,
    onPrepare: async () => {
        //This is what you would tipically use
        browser.ignoreSynchronization = true;
        browser.get = (url, timeout) => browser.driver.get(url);
        await browser.waitForAngularEnabled(false);
        return browser.get('http://localhost:3000');
    }
  }