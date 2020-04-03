//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  laterpay blocker component
//  github.com/tobimori/paywallr
//

const laterpayPaywalls = [
    "bergedorfer-zeitung.de"
]

const isLaterpay = (url) => { 
    return laterpayPaywalls.includes(shortUrl(url));
};

// block all tinypass scripts (used by lensing media & funke)
extapi.webRequest.onBeforeRequest.addListener(
    function(details) {
        const t = details.originUrl || details.initiator;
        if (!isSite(t) || !isSiteEnabled(t) || !isLaterpay(t)) return;
        return {cancel: true};
    }, {
        urls: ["*://*.laterpay.net/*"],
        types: ["script"]
    },
    ["blocking"]
);