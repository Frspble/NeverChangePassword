// ==UserScript==
// @name         Never Change IMU Password
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove change password elements from IMU jwxt
// @author       Frspble
// @match        https://jwxt.imu.edu.cn/index
// @icon         https://www.google.com/s2/favicons?sz=64&domain=imu.edu.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to remove element by XPath
    function removeElementByXPath(xpath) {
        let element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (element) {
            element.parentNode.removeChild(element);
        }
    }

    // Create a MutationObserver to monitor DOM changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            removeElementByXPath('//*[@id="view-table"]');
            removeElementByXPath('/html/body/div[3]');
        });
    });

    // Start observing the document body for changes
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial removal in case elements are already present
    removeElementByXPath('//*[@id="view-table"]');
    removeElementByXPath('/html/body/div[3]');
})();