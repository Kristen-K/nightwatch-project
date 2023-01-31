//import HomePage from '../pages/home-page';

describe("Home", () => {

  it("Open URL & assert test", async () => {

    await browser.navigateTo('https://practice.automationbro.com');

    //can delete now
    //await browser.expect.title().to.match(/Practice E-Commerce Site – Automation Bro/);

    //assert title
    await browser.assert.titleEquals('Practice E-Commerce Site – Automation Bro');

  });

  it("Open About page & assert test", async () => {
    await browser.navigateTo("https://practice.automationbro.com/about/");

    //Assert url
   await browser.assert.urlEquals('https://practice.automationbro.com/about/');
  });

  it("Click get started button & assert URL contains get-started text", async () => {
    // Click Get Started button
    await browser.navigateTo('/')
    
    await browser.click('#get-started');

    //Assert url contains get-started text
    await browser.assert.urlContains('get-started');
  });

  it("Click on logo button & assert URL contains does not contain get-started text", async () => {
    await browser.navigateTo('/')
    // Click Logo 
    await browser.click('img[alt="Practice E-Commerce Site"]');

    //Assert url doesn't contain get-started text
    await browser.assert.not.urlContains('get-started');
  });
  
});