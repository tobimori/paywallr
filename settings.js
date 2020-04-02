//                                 ____
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  settings background script
//  github.com/tobimori/paywallr
//

const changeListener = () => {
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
};

extapi.tabs.onUpdated.addListener(changeListener());
extapi.tabs.Activated.addListener(changeListener());

extapi.browserAction.onClicked.addListener((tab) => {
   // const url = shortUrl(tab.url)
    isSite(tab.url) && extapi.storage.sync.set({
        url: true
    });
});