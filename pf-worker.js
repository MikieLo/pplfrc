chrome.action.onClicked.addListener((currentTab) => {
  chrome.action.setBadgeText({
    text: '',
    tabId: currentTab.id,
  });

  chrome.tabs.sendMessage(currentTab.id, {
    action: 'PF_TOGGLE',
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.url) {
    chrome.tabs.sendMessage(tabId, {
      action: 'PF_CHANGE_URL',
      url: changeInfo.url,
    });
  }
});
