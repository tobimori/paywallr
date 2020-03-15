//                                         ____
//   __ _____  ___  ___ ___ ___    _____ _/ / /
//  / // / _ \/ _ \/ _ `/ // / |/|/ / _ `/ / / 
//  \_,_/_//_/ .__/\_,_/\_, /|__,__/\_,_/_/_/  
//          /_/        /___/                           
//
//  background listener
//  blocks scripts before loading
//  github.com/tobimori/unpaywall
//

const tinypassPaywalls = [
    "ruhrnachrichten",
    "hellwegeranzeiger",
    "dorstenerzeitung",
    "muensterlandzeitung",
    "halternerzeitung",
    "thueringer-allgemeine",
    "abendblatt",
    "waz",
    "nrz",
    "wr",
    "wp",
    "otz",
    "morgenpost",
    "ikz-online"
]

const isTinypass = (origin) => { if(tinypassPaywalls.includes(origin.split(".",2)[1])) return true;};

// block all tinypass scripts (used by lensing media & funke)
browser.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (!isTinypass(details.originUrl)) return;
        return {cancel: true};
    }, {
        urls: ["*://*.tinypass.com/*"],
        types: ["script"]
    },
    ["blocking"]
);

browser.browserAction.onClicked.addListener((tab) => {
    browser.browserAction.setBadgeText({text: "ON", tabId: tab.id});
    console.log(tab.url);
  }
);