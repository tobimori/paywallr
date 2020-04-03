//                                 ____
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  settings background script
//  github.com/tobimori/paywallr
//



extapi.tabs.onUpdated.addListener(() => {
    extapi.tabs.query({
        active: true,
        currentWindow: true
    }, (tab) => {
        extapi.browserAction.setBadgeBackgroundColor({ "color": "black" });
        !isSite(tab[0].url) && extapi.browserAction.disable(tab[0].id);
        isSite(tab[0].url) && isSiteEnabled(tab[0].url) ?
            extapi.browserAction.setBadgeText({
                "text": "ON", "tabId": tab[0].id
            }) :
            extapi.browserAction.setBadgeText({
                "text": "OFF", "tabId": tab[0].id
            });
    }
    )
});

extapi.tabs.onActivated.addListener(console.log("gay"));

extapi.browserAction.onClicked.addListener((tab) => {
    isEnabled = isSiteEnabled(tab.url);
    console.log(isEnabled);
    if (isSite(tab.url) && isEnabled) {
        extapi.storage.sync.get("sitesDisabled", 
            (stored) => {
                let sites = Array.from(stored["sitesDisabled"]);
                console.log(sites);
                sites.push(shortUrl(tab.url));
                console.log(sites);
                extapi.storage.sync.set({
                    sitesDisabled: sites
                });
                extapi.browserAction.setBadgeText({
                    "text": "OFF", "tabId": tab.id
                });
                console.log("Disabled site: " + tab.url);
            }
        );
    } else if (isSite(tab.url) && !isEnabled) {
        extapi.storage.sync.get("sitesDisabled", 
            (stored) => {
                let sites = Array.from(stored["sitesDisabled"]);
                sites.splice(shortUrl(tab.url));
                extapi.storage.sync.set({
                    sitesDisabled: sites
                });
                extapi.browserAction.setBadgeText({
                    "text": "ON", "tabId": tab.id
                });
                console.log("Enabled site: " + tab.url);
            }
        );        
    };
});