describe("Home", () => {
  it("Open URL & assert test", async () => {
    await browser.navigateTo("https://practice.automationbro.com");

    //assert title
    await browser.assert.titleEquals(
      "Practice E-Commerce Site – Automation Bro"
    );
  });

  it("Open About page & assert test", async () => {
    await browser.navigateTo("https://practice.automationbro.com/about/");

    //Assert url
    await browser.assert.urlEquals("https://practice.automationbro.com/about/");
  });

  it("Click get started button & assert URL contains get-started text", async () => {
    // Click Get Started button
    await browser.navigateTo("/");

    await browser.click("#get-started");

    //Assert url contains get-started text
    await browser.assert.urlContains("get-started");
  });

  it("Click on logo button & assert URL does not contain get-started text", async () => {
    await browser.navigateTo("/");
    // Click Logo
    await browser.click('img[alt="Practice E-Commerce Site"]');

    //Assert url doesn't contain get-started text
    await browser.assert.not.urlContains("get-started");
  });

  it("Find heading element & assert the text", async () => {
    await browser.assert.textEquals(
      ".elementor-widget-container h1",
      "Think different. Make different."
    );
  });
});
