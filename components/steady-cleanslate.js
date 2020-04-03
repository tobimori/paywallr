//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  steady cleanslate component
//  nahvehrkehr & neue rottweiler zeitung
//  github.com/tobimori/paywallr
//

extapi.storage.sync.get({ sitesDisabled: [] },
    (stor) => {
        disabledSites = Array.from(stor["sitesDisabled"]);
        console.log("ON LOAD - DISABLED SITES: " + disabledSites);
        if (isSiteEnabled(window.location.href)) {
            removeElements(d.getElementsByClassName("cleanslate"));
        };
    }
);