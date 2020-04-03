//                                 ____
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  settings background script
//  github.com/tobimori/paywallr
//

extapi.storage.sync.get({ sitesDisabled: [] },
    (stor) => {
        disabledSites = Array.from(stor["sitesDisabled"]);
        console.log("ON START - DISABLED SITES: " + disabledSites);
    }
);

extapi.storage.onChanged.addListener(() => {
    extapi.storage.sync.get({sitesDisabled: []},
        (stor) => {
            disabledSites = Array.from(stor["sitesDisabled"]);
            console.log("ON CHANGE - DISABLED SITES: " + disabledSites);
        }
    );
});

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

extapi.tabs.onActivated.addListener(() => {
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

extapi.browserAction.onClicked.addListener((tab) => {
    if(isSite(tab.url)) isEnabled = isSiteEnabled(tab.url);
    isEnabled ?
        extapi.storage.sync.get("sitesDisabled", 
            (stored) => {
                if (!stored["sitesDisabled"]) stored["sitesDisabled"] = [];
                let sites = Array.from(stored["sitesDisabled"]);
                sites.push(shortUrl(tab.url));
                extapi.storage.sync.set({
                    sitesDisabled: sites
                });
                disabledSites = sites;
                extapi.browserAction.setBadgeText({
                    "text": "OFF", "tabId": tab.id
                });
                console.log("Disabled site: " + tab.url);
                extapi.tabs.reload(tab.id);
            }
        )
    :
        extapi.storage.sync.get("sitesDisabled", 
            (stored) => {
                if (!stored["sitesDisabled"]) stored["sitesDisabled"] = [];
                let sites = Array.from(stored["sitesDisabled"]);
                sites.splice(shortUrl(tab.url));
                extapi.storage.sync.set({
                    sitesDisabled: sites
                });
                disabledSites = sites;
                extapi.browserAction.setBadgeText({
                    "text": "ON", "tabId": tab.id
                });
                console.log("Enabled site: " + tab.url);
                extapi.tabs.reload(tab.id);
            }
        );        
    ;
});