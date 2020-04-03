//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  ze.tt green component
//  github.com/tobimori/paywallr
//
//  notes: hidden with inline styling max-height 
//  can't be replaced !!!
// 

extapi.storage.sync.get({ sitesDisabled: [] },
    (stor) => {
        disabledSites = Array.from(stor["sitesDisabled"]);
        console.log("ON LOAD - DISABLED SITES: " + disabledSites);
        if (isSiteEnabled(window.location.href)) {
            removeElements(d.getElementsByClassName("steady-overlay"));
            d.getElementsByClassName("ph-article-flag-description")[0].innerText = "unlocked by paywallr";
            const s = d.createElement('style')
            s.innerHTML = ".ph-article-full {max-height: 100% !important;}";
            d.body.appendChild(s);
        };
    }
);