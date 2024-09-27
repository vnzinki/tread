// This script will be injected into the active tab
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getTabContent') {
    // Extract the desired content from the DOM (e.g., title, URL, body)
    const pageContent = {
      url: window.location.href,
      html: document.body.innerHTML,
    }
    sendResponse(pageContent)
  }
})
