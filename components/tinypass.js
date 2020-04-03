//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  tinyass component
//  github.com/tobimori/paywallr
//

const tinypassPaywalls = [
    "ruhrnachrichten.de",
    "hellwegeranzeiger.de",
    "dorstenerzeitung.de",
    "muensterlandzeitung.de",
    "halternerzeitung.de",
    "thueringer-allgemeine.de",
    "abendblatt.de",
    "waz.de",
    "nrz.de",
    "wr.de",
    "wp.de",
    "otz.de",
    "morgenpost.de",
    "ikz-online.de"
]

const isTinypass = (url) => { 
    return tinypassPaywalls.includes(shortUrl(url));
};

// block all tinypass scripts (used by lensing media & funke)
extapi.webRequest.onBeforeRequest.addListener(
    function(details) {
        const t = details.originUrl || details.initiator;
        if (!isSite(t) || !isSiteEnabled(t) || !isTinypass(t)) return;
        return {cancel: true};
    }, {
        urls: ["*://*.tinypass.com/*"],
        types: ["script"]
    },
    ["blocking"]
);