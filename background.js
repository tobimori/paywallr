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

const isTinypass = (details) => { 
    let t;
    // check to enable cross plattform (firefox uses originUrl, chrome uses initiator)
    details.originUrl ? t = tinypassPaywalls.includes(details.originUrl.split(".",2)[1]) : t = tinypassPaywalls.includes(details.initiator.split(".",2)[1]);
    return t;
};

// block all tinypass scripts (used by lensing media & funke)
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (!isTinypass(details)) return;
        return {cancel: true};
    }, {
        urls: ["*://*.tinypass.com/*"],
        types: ["script"]
    },
    ["blocking"]
);

