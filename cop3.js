'use strict';
(function() {
  try {
    var parentMessageProxy = chrome.runtime.connect({
      "name" : "cop"
    });
  } catch (_0x508526) {
  }
  setInterval(function() {
    if (Date.now() > timeToGo && document.querySelector(".full-page-container") === null) {
      document.querySelector("#checkout > div.buttonContainer > button").click();
      if (document.querySelector(".full-page-container") === null) {
        document.querySelector("#checkout > div.buttonContainer > button").dispatchEvent(new MouseEvent("click", {
          "bubbles" : true,
          "cancellable" : true
        }));
        if (document.querySelector(".full-page-container") === null) {
          document.evaluate('//*[@id="checkout"]/div[1]/button', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          if (document.querySelector(".full-page-container") === null) {
            document.evaluate('//*[@id="checkout"]/div[1]/button', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.dispatchEvent(new MouseEvent("click", {
              "bubbles" : true,
              "cancellable" : true
            }));
          }
        }
      }
    }
    if (document.querySelector(".gdpr-consent > .gdprConsentCheckbox > .container.isChecked") === null) {
      document.querySelector(".gdpr-consent > .gdprConsentCheckbox > .container > input").click();
    }
    if (timeToGo !== 1 && Date.now() - 4E4 > timeToGo) {
      parentMessageProxy.postMessage({
        "command" : "copStuck",
        "data" : {
          "checkoutId" : checkoutId
        }
      });
    }
  }, 100);
})();
