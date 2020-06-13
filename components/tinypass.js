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
    "saechsische.de",
    // FUNKE - needs ROT13 like in laterpay/deobfuscator decrypt
    "thueringer-allgemeine.de", 
    "abendblatt.de",
    "waz.de", 
    "nrz.de",
    "wr.de", 
    "wp.de", 
    "otz.de",
    "morgenpost.de",
    "ikz-online.de",
    // BZV
    "braunschweiger-zeitung.de",
    "gifhorner-rundschau.de",
    "helmstedter-nachrichten.de",
    "peiner-nachrichten.de",
    "salzgitter-zeitung.de",
    "wolfsburger-nachrichten.de",
    "wolfenbuetteler-zeitung.de"
]

const isTinypass = (url) => { 
    return tinypassPaywalls.includes(shortUrl(url));
};

// block all tinypass scripts (used by lensing media & funke)
extapi.webRequest.onBeforeRequest.addListener(
    function(details) {
        const t = details.originUrl || details.initiator;
        if (!isSiteEnabled(t) || !isSite(t) || !isTinypass(t)) return;
        return {cancel: true};
    }, {
        urls: ["*://*.tinypass.com/*"],
        types: ["script"]
    },
    ["blocking"]
);