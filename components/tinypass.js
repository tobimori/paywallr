//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  tinypass component
//  github.com/tobimori/paywallr
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
extapi.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (!isTinypass(details)) return;
        return {cancel: true};
    }, {
        urls: ["*://*.tinypass.com/*"],
        types: ["script"]
    },
    ["blocking"]
);