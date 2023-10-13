// background.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.pixelSize) {
    chrome.action.setPopup({
      tabId: sender.tab.id,
      popup: "popup.html"
    });
    chrome.storage.local.set({ pixelSize: message.pixelSize });
  }
});
