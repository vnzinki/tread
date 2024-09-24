chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
});

// Inject the content script into the active tab
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "injectScript") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTabId = tabs[0].id;

      // Inject content script into the active tab
      chrome.scripting.executeScript(
        {
          target: { tabId: activeTabId },
          files: ["content-script.js"],
        },
        () => {
          sendResponse({ status: "scriptInjected" });
        }
      );
    });
    return true; // Keep the messaging channel open for async response
  }
});
