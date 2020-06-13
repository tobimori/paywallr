//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  cors bypass component
//  github.com/tobimori/paywallr
//


extapi.storage.sync.get({ sitesDisabled: [] },
  (stor) => {
      disabledSites = Array.from(stor["sitesDisabled"]);
      console.log("ON LOAD - DISABLED SITES: " + disabledSites);
      if (isSiteEnabled(window.location.href) && window.location.hostname.substr(-1) !== '.') {
        window.location.assign(window.location.href.replace(window.location.hostname, `${window.location.hostname}.`))
      };
  }
);
