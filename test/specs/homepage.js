

describe("Home", () => {

    it("Open URL & assert test", async () => {
        const homePage = browser.page.homePage();
        homePage.navigate().assert.title('Practice E-Commerce Site – Automation Bro')
  
    });
    // it ("Open About page & assert test", async () => {
    //     homePage.navigate()
    // })
  

    
  });