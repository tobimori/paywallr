//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  settings library
//  github.com/tobimori/paywallr
//

const isSite = (url) => {
    if (!url) return false;
    a = new URL(url).hostname.toString().split('.');
    if(a.length !== 2) a = a.slice(a.length - 2);
    return sites.includes(a.join('.'));
};

const isSiteEnabled = (url) => {};

// extapi.storage.sync.set();
extapi.browserAction.onClicked.addListener((tab) => {
    // disable the active tab
    extapi.browserAction.disable(tab.id);
    // requires the "tabs" or "activeTab" permission
    
});

browser.tabs.onUpdated.addListener(() => 
    browser.tabs.query({
        active: true,
        currentWindow: true
    }).then((tab) => {
        !isSite(tab[0].url) && browser.browserAction.disable(tab[0].id);
        }
    )
);
