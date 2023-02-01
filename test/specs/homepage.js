

describe("Home", function() {

    // before(function(browser) {
    //     this.homepage = browser.page.homePage();
    // })

    it("Open URL & assert test", async () => {
        const homePage = browser.page.homePage();
        homePage.navigate().assert.title('Practice E-Commerce Site – Automation Bro')
        //browser.end;
  
    });
    it("Open About page & assert test", async () => {
        const aboutPage = browser.navigateTo("https://practice.automationbro.com/about/");
        aboutPage.assert.urlEquals('https://practice.automationbro.com/about/')
    });
    it("Click get started button & assert URL contains get-started text", async () => {
        const homePage = browser.page.homePage()
        homePage
        .navigate()
        .click('@btnGetStarted')
        .assert.urlContains('get-started')
    });
    it("Click on logo button & assert URL does not contain get-started text", async () => {
       const homePage = browser.page.homePage()
       homePage
       .navigate()
       // not working
       //.click('@imageLogo')
        .click('img[alt="Practice E-Commerce Site"]')
        .assert.not.urlContains('get-started')

    })

    

    
  });

