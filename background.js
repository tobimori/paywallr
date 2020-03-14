//                                         ____
//   __ _____  ___  ___ ___ ___    _____ _/ / /
//  / // / _ \/ _ \/ _ `/ // / |/|/ / _ `/ / / 
//  \_,_/_//_/ .__/\_,_/\_, /|__,__/\_,_/_/_/  
//          /_/        /___/                           
//
//  background listener
//  github.com/tobimori/unpaywall
//

// block all tinypass scripts (used by lensing media & funke)
browser.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (!isListenerPaywalled(details)) return;
        return {cancel: true};
    }, {
        urls: ["*://*.tinypass.com/*"],
        types: ["script"]
    },
    ["blocking"]
);