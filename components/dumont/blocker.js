//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  dumont background component
//  github.com/tobimori/paywallr
//

// block all celeraone tracking scripts by dumont
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {cancel: true};
    }, {
        urls: [
            "*://track.ksta.de/*", 
            "*://track.mz-web.de/*", 
            "*://track.rundschau-online.de/*"
        ],
        types: ["script"]
    },
    ["blocking"]
);