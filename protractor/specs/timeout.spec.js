const $ = require('protractor').$;

describe('Synctractor', () => {
    it('Should wait for timeout', async () => {
        //const button = $('#btn');
        //const counter = $('#cnt');
        var twoButtons=element.all(by.css('#btn'));
        browser.wait(
            ExpectedConditions.presenceOf(element(by.css('#btn'))), 
            5000
          );
          browser.wait(ExpectedConditions.elementToBeClickable(twoButtons.get(0)),8000)
            twoButtons.get(0).click();
            browser.wait(
                ExpectedConditions.presenceOf(element(by.css('#login'))), 
                10000
              );
        //expect(await counter.getText()).toEqual('0');
        
        //await button.click();
        //expect(await counter.getText()).toEqual('1');
    });
});