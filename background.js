chrome.runtime.onInstalled.addListener((reason) => {
    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({
            url: 'thanks.html'
        });
    }
});


chrome.action.onClicked.addListener(function (tab) {
    chrome.tabs.create({
        url: 'main.html'
    });
});