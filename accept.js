// accept button, where i is the button
// //*[@id='react-root']/section/nav/div[2]/div/div/div[3]/div/div[2]/div/div/div[4]/ul/li[" + i + "]/div[3]/div/span[1]/button
// button
//
// //*[@id="react-root"]/section/nav/div[2]/div/div/div[3]/div/div[2]/a
// list
//
// //*[@id="react-root"]/section/nav/div[2]/div/div/div[3]/div/div[2]/div/div/div[4]/ul/li[1]


function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

setTimeout(function() {
  getElementByXpath("//*[@id='react-root']/section/nav/div[2]/div/div/div[3]/div/div[2]/a").click();
  setTimeout(function() {
    getElementByXpath("//*[@id='react-root']/section/nav/div[2]/div/div/div[3]/div/div[2]/div/div/div[4]/ul/li[1]").click();
    setTimeout(function() {
      for (var i = 2; i < 100; i++) {
        getElementByXpath("//*[@id='react-root']/section/nav/div[2]/div/div/div[3]/div/div[2]/div/div/div[4]/ul/li[" + i + "]/div[3]/div/span[1]/button").click() ;
      }
    }, 3000);
  }, 3000);
}, 3000);
