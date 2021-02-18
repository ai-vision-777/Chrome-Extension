(function () {
    try {
        var _0x1e9fea = chrome.runtime.connect({
            'name': 'cop'
        });
    } catch (_0x508526) {}
    setInterval(function () {
        Date.now() > timeToGo && document.querySelector('.full-page-container') === null && (document.querySelector('#checkout > div.buttonContainer > button').click(), document.querySelector('.full-page-container') === null && (document.querySelector('#checkout > div.buttonContainer > button').dispatchEvent(new MouseEvent('click', {
            'bubbles': true,
            'cancellable': true
        })), document.querySelector('.full-page-container') === null && (document.evaluate('//*[@id="checkout"]/div[1]/button', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click(), document.querySelector('.full-page-container') === null && document.evaluate('//*[@id="checkout"]/div[1]/button', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.dispatchEvent(new MouseEvent('click', {
            'bubbles': true,
            'cancellable': true
        }))))), document.querySelector('.gdpr-consent > .gdprConsentCheckbox > .container.isChecked') === null && document.querySelector('.gdpr-consent > .gdprConsentCheckbox > .container > input').click(), timeToGo !== 0x1 && Date.now() - 0x9c40 > timeToGo && _0x1e9fea.postMessage({
            'command': 'copStuck',
            'data': {
                'checkoutId': checkoutId
            }
        });
    }, 0x64);
}());
