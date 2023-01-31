const fs = require("fs");

describe("Home", () => {
  it("Open URL, get href of each directory page & get data", async () => {
    await browser.navigateTo("/emc/browse-companies");

    await browser.click("#onetrust-accept-btn-handler");

    const urlList = await browser.findElements(".browse li a");
    //console.log(urlList);
    let hrefs = [];


    urlList.forEach(url => {
     //hrefs.push(await urlList[url].getAttribute(urlList[url], "href"));
     //let list = browser.findElement(".browse li a").getAttributes(".browse li a", "href");
    console.log('HERE:', urlList);

    //undefined
    //console.log('HERE:', urlList[url]);
        
    });


  //   urlList.forEach(myfunction);

  //  function myfunction(list) {
  //   //hrefs.push(item.getAttribute(urlList[index], "href"));
  //   // try find and push element in one go in loop?

  //   let list = browser.findElement(".browse li a").getAttributes(".browse li a", "href");
  //   console.log('HERE:', list)

  //  }
   
  //  function myfunction(item, index, urlList) {
  //   //hrefs.push(item.getAttribute(urlList[index], "href"));
  //   // try find and push element in one go in loop?

  //   let list = browser.findElement(".browse li a").getAttributes(".browse li a", "href");
  //   console.log('HERE:', list)

  //  }




  });
});