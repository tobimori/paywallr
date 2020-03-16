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
    "www.ruhrnachrichten.de",
    "www.hellwegeranzeiger.de",
    "www.dorstenerzeitung.de",
    "www.muensterlandzeitung.de",
    "www.halternerzeitung.de",
    "www.thueringer-allgemeine.de",
    "www.abendblatt.de",
    "www.waz.de",
    "www.nrz.de",
    "www.wr.de",
    "www.wp.de",
    "www.otz.de",
    "www.morgenpost.de",
    "www.ikz-online.de"
]

const isTinypass = (details) => { 
    let t;
    // check to enable cross plattform (firefox uses originUrl, chrome uses initiator)
    details.originUrl ? t = new URL(details.originUrl) : t = new URL(details.initiator);
    console.log(t.hostname);
    return tinypassPaywalls.includes(t.hostname);
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

