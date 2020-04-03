//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  dumont site component
//  github.com/tobimori/paywallr
//

extapi.storage.sync.get({ sitesDisabled: [] },
    (stor) => {
        disabledSites = Array.from(stor["sitesDisabled"]);
        console.log("ON LOAD - DISABLED SITES: " + disabledSites);
        if (isSiteEnabled(window.location.href) && d.getElementsByClassName("content-behind-wall hide-paid-content")[0]) {
            removeElements(d.getElementsByClassName("ssoTemplate pay wall"), d.getElementsByClassName("logo title backToLandingPage"));
            d.getElementById('c1-template-platzhalter').remove();
            d.getElementsByClassName("content-behind-wall hide-paid-content")[0].classList.remove("hide-paid-content")
        };
    }
);