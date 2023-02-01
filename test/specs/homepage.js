

describe("Home", () => {

    it("Open URL & assert test", async () => {
        const homePage = browser.page.homePage();
        homePage.navigate().assert.title('Practice E-Commerce Site – Automation Bro')
        browser.end;
  
    });
    it ("Open About page & assert test", async () => {
        const aboutPage = browser.navigateTo("https://practice.automationbro.com/about/");
        aboutPage.assert.urlEquals('https://practice.automationbro.com/about/')
    })

    

    
  });

