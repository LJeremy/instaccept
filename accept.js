function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

setTimeout(function() {
  getElementByXpath(
    "//*[@id='react-root']/section/nav/div[2]/div/div/div[3]/div/div[3]/a"
  ).click();
  setTimeout(function() {
    getElementByXpath(
      "//*[@id='react-root']/section/nav/div[2]/div/div/div[3]/div/div[3]/div/div/div[2]/div[2]/div/div/div/div/div[1]"
    ).click();
    setTimeout(function() {
      for (var i = 2; i < 100; i++) {
        getElementByXpath(
          "//*[@id='react-root']/section/nav/div[2]/div/div/div[3]/div/div[3]/div/div/div[2]/div[2]/div/div/div[1]/div/div[" +
            i +
            "]/div[3]/div/div[1]/button"
        ).click();
      }
    }, 5000);
  }, 5000);
}, 5000);
