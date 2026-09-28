document.addEventListener('DOMContentLoaded', async () => {
  const { token } = await chrome.storage.local.get('token');
  if (token) {
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('scan-section').style.display = 'block';

    const { currentScan } = await chrome.storage.local.get('currentScan');
    if (currentScan) {
      document.getElementById('target-url').innerText = currentScan.target;
      const statusEl = document.getElementById('status-text');
      statusEl.innerText = currentScan.status;
      statusEl.className = `status-${currentScan.status}`;

      const listEl = document.getElementById('details-list');
      listEl.innerHTML = '';
      currentScan.details.forEach(detail => {
        const li = document.createElement('li');
        li.innerText = detail;
        listEl.appendChild(li);
      });

      // Show Alert Banner & Command Center button if threat detected
      if (currentScan.status === 'Dangerous' || currentScan.status === 'Warning') {
        document.getElementById('danger-banner').style.display = 'block';
        const cmdBtn = document.getElementById('open-command-center');
        cmdBtn.style.display = 'block';

        cmdBtn.addEventListener('click', () => {
          // Open web app Command Center with encoded target URL
          const targetUrl = encodeURIComponent(currentScan.target);
          const redirectUrl = `http://localhost:5173/command-center?url=${targetUrl}`;
          chrome.tabs.create({ url: redirectUrl });
        });
      }
    }
  }

  document.getElementById('save-token').addEventListener('click', async () => {
    const val = document.getElementById('token-input').value.trim();
    if (val) {
      await chrome.storage.local.set({ token: val });
      location.reload();
    }
  });
});