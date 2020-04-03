//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  verlagsgruppe rhein-main component
//  github.com/tobimori/paywallr
//
//  notes:
//  vrm uses laterpay
//

// remove any meta tags with the laterpay config token on any change in document
const observer = new MutationObserver(function (mutations, me) {
  [...d.getElementsByTagName("meta")].map(n => n.getAttribute("property") == "laterpay:connector:config_token" && n.remove());
});

extapi.storage.sync.get({ sitesDisabled: [] },
  (stor) => {
    disabledSites = Array.from(stor["sitesDisabled"]);
    console.log("ON LOAD - DISABLED SITES: " + disabledSites);
    isSiteEnabled(window.location.href) && d.getElementsByClassName("vrm-premium") &&
      observer.observe(d, {
        childList: true,
        subtree: true
      });
  }
);