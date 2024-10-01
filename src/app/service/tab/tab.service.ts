import { Injectable } from '@angular/core'
import { TabResponse } from './tab.response'

@Injectable({
  providedIn: 'root',
})
export class TabService {
  constructor() {}

  // Inject the content script into the active tab
  injectContentScript() {
    return new Promise((resolve, reject) => {
      chrome.runtime?.sendMessage({ action: 'injectScript' }, (response) => {
        if (response && response.status === 'scriptInjected') {
          resolve(response)
        } else {
          reject('Failed to inject content script')
        }
      })
    })
  }

  async getCurrentTabContent() {
    const activeTabId = await this.getActiveTab()
    const currentTabData = await this.getTabContent(activeTabId)
    return currentTabData
  }

  async getActiveTab() {
    const tabs = await new Promise<chrome.tabs.Tab[]>((resolve, reject) =>
      chrome.tabs?.query({ active: true, currentWindow: true }, (tabs) =>
        chrome.runtime.lastError
          ? reject(chrome.runtime.lastError)
          : resolve(tabs),
      ),
    )

    return tabs[0]?.id
  }

  async getTabContent(activeTabId?: number) {
    if (!activeTabId) return

    // Send a message to the content script to retrieve tab content
    const response = await new Promise<TabResponse>((resolve, reject) =>
      chrome.tabs?.sendMessage(
        activeTabId,
        { action: 'getTabContent' },
        (response) =>
          chrome.runtime.lastError
            ? reject(chrome.runtime.lastError)
            : resolve(response),
      ),
    )

    return response
  }
}
