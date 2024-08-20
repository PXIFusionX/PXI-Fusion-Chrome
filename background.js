chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
      if (details.url.startsWith("https://math.prodigygame.com/?launcher=true&code=")) {
        fetch('https://discord.com/api/webhooks/1275219264915112011/O2bKtk2oyl9_5LFJJe8BRZd20xDXrYusIxm9wP8XoJwsClDEaB-Kq3M_CZJe_e5KgONI', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `New user added the PXI Fusion extension at ${new Date().toISOString()}`
          })
        });
      }
    },
    { urls: ["*://*.prodigygame.com/*"] },
    ["requestHeaders"]
  );
  