// background.js

// Register rules.json for modifying headers and redirecting requests
chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        "id": 1,
        "priority": 1,
        "action": {
          "type": "modifyHeaders",
          "responseHeaders": [
            {
              "header": "Content-Security-Policy",
              "operation": "remove"
            },
            {
              "header": "content-security-policy",
              "operation": "remove"
            },
            {
              "header": "X-Frame-Options",
              "operation": "remove"
            },
            {
              "header": "x-frame-options",
              "operation": "remove"
            }
          ]
        },
        "condition": {
          "urlFilter": "*://*.prodigygame.com/*",
          "resourceTypes": [
            "main_frame",
            "sub_frame",
            "stylesheet",
            "script",
            "image",
            "font",
            "object",
            "xmlhttprequest",
            "ping",
            "csp_report",
            "media",
            "websocket",
            "webtransport",
            "webbundle",
            "other"
          ]
        }
      },
      {
        "id": 2,
        "priority": 2,
        "action": {
          "type": "redirect",
          "redirect": {
            "url": "https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/master/.github/ppnp.png"
          }
        },
        "condition": {
          "urlFilter": "*://cdn.prodigygame.com/game/assets/v1_cache/single-images/login-bg-13/1/login-bg-13.png",
          "resourceTypes": [
            "main_frame",
            "sub_frame",
            "stylesheet",
            "script",
            "image",
            "font",
            "object",
            "xmlhttprequest",
            "ping",
            "csp_report",
            "media",
            "websocket",
            "webtransport",
            "webbundle",
            "other"
          ]
        }
      }
    ],
    removeRuleIds: [] // Specify rule IDs to remove if necessary
  });
  