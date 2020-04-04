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
    // FUNKE
    "thueringer-allgemeine.de", // needs ROT13 like in laterpay/deobfuscator decrypt
    "abendblatt.de", // Working
    "waz.de", // needs ROT13 like in laterpay/deobfuscator decrypt
    "nrz.de", // needs ROT13 like in laterpay/deobfuscator decrypt
    "wr.de", // needs ROT13 like in laterpay/deobfuscator decrypt
    "wp.de", //needs ROT13 like in laterpay/deobfuscator decrypt
    "otz.de", // needs ROT13 like in laterpay/deobfuscator decrypt
    "morgenpost.de", // Working
    "ikz-online.de" // Working
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