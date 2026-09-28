// Listener for tab updates and active tab switching
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && tab.url.startsWith('http')) {
    checkDomainLive(tab.url, tabId);
  }
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab && tab.url && tab.url.startsWith('http')) {
      checkDomainLive(tab.url, tab.id);
    }
  });
});

async function checkDomainLive(url, tabId) {
  try {
    const token = (await chrome.storage.local.get('token')).token;
    if (!token) {
      chrome.action.setBadgeText({ text: 'KEYS' });
      chrome.action.setBadgeBackgroundColor({ color: '#888888' });
      return;
    }

    const response = await fetch('http://localhost:5000/api/scans/url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ url })
    });

    const data = await response.json();
    chrome.storage.local.set({ currentScan: data });

    if (data.status === 'Dangerous') {
      chrome.action.setBadgeText({ text: 'ALERT' });
      chrome.action.setBadgeBackgroundColor({ color: '#FF0000' });
    } else if (data.status === 'Warning') {
      chrome.action.setBadgeText({ text: 'WARN' });
      chrome.action.setBadgeBackgroundColor({ color: '#FFA500' });
    } else {
      chrome.action.setBadgeText({ text: 'OK' });
      chrome.action.setBadgeBackgroundColor({ color: '#00FF00' });
    }
  } catch (err) {
    console.error('Kavacham Extension background scan error:', err);
  }
}