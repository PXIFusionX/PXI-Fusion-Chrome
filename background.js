// background.js

// Redirect specific URL
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      if (details.url.includes("cdn.prodigygame.com/game/assets/v1_cache/single-images/login-bg-13/1/login-bg-13.png")) {
        return { redirectUrl: "https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/master/.github/ppnp.png" };
      }
    },
    { urls: ["*://cdn.prodigygame.com/game/assets/v1_cache/single-images/login-bg-13/1/login-bg-13.png"] }
  );
  
  // Handle CORS errors and Content Security Policy issues
  chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
      // Remove Content Security Policy headers
      const headers = details.responseHeaders.filter(header => 
        header.name.toLowerCase() !== "content-security-policy" &&
        header.name.toLowerCase() !== "x-frame-options"
      );
      return { responseHeaders: headers };
    },
    { urls: ["*://*.prodigygame.com/*"] },
    ["blocking", "responseHeaders"]
  );
  
  // Notify Discord Webhook
  fetch('https://discord.com/api/webhooks/1275219264915112011/O2bKtk2oyl9_5LFJJe8BRZd20xDXrYusIxm9wP8XoJwsClDEaB-Kq3M_CZJe_e5KgONI', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: `New user added the PXI Fusion extension at ${new Date().toISOString()}`
    })
  }).catch(error => console.error('Webhook failed:', error));
  