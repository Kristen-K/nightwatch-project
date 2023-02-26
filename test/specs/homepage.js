describe("Home", function () {
  it("Open URL & assert test", async () => {
    const homePage = browser.page.homePage();
    homePage
      .navigate()
      .assert.title("Practice E-Commerce Site – Automation Bro");
  });
  it("Open About page & assert test", async () => {
    const aboutPage = browser.navigateTo("/about/");
    aboutPage.assert.urlEquals("https://practice.automationbro.com/about/");
  });
  it("Click get started button & assert URL contains get-started text", async () => {
    const homePage = browser.page.homePage();
    homePage
      .navigate()
      .click("@btnGetStarted")
      .assert.urlContains("get-started");
  });
  it("Click on logo button & assert URL does not contain get-started text", async () => {
    const homePage = browser.page.homePage();
    homePage
      .navigate()
      .click("@imageLogo")
      .assert.not.urlContains("get-started");
  });
  it("Find heading element & assert the text", async () => {
    const homePage = browser.page.homePage();
    homePage
      .navigate()
      .assert.textEquals("@txtHeading", "Think different. Make different.");
  });
});
