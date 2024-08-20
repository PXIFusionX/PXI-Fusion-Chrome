chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
      return {
        responseHeaders: details.responseHeaders.filter(header =>
          header.name.toLowerCase() !== 'content-security-policy' &&
          header.name.toLowerCase() !== 'x-frame-options'
        )
      };
    },
    {
      urls: ["*://*.prodigygame.com/*"],
      types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "webtransport", "webbundle", "other"]
    },
    ["blocking", "responseHeaders"]
  );
  
  chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      if (details.url.includes("cdn.prodigygame.com/game/assets/v1_cache/single-images/login-bg-13/1/login-bg-13.png")) {
        return { redirectUrl: "https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/master/.github/ppnp.png" };
      }
    },
    {
      urls: ["*://cdn.prodigygame.com/game/assets/v1_cache/single-images/login-bg-13/1/login-bg-13.png"]
    },
    ["blocking"]
  );
  
  chrome.runtime.onInstalled.addListener(() => {
    fetch('https://discord.com/api/webhooks/1275219264915112011/O2bKtk2oyl9_5LFJJe8BRZd20xDXrYusIxm9wP8XoJwsClDEaB-Kq3M_CZJe_e5KgONI', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `New user added the PXI Fusion extension at ${new Date().toISOString()}`
      })
    });
  });
  