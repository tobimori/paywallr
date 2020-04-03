//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  lensing media component
//  github.com/tobimori/paywallr
//
//  notes:
//  blocking of tinypass script done in tinypass.js
//

// removes blur from content

extapi.storage.sync.get({ sitesDisabled: [] },
    (stor) => {
        disabledSites = Array.from(stor["sitesDisabled"]);
        console.log("ON LOAD - DISABLED SITES: " + disabledSites);
        if (isSiteEnabled(window.location.href) && d.getElementsByClassName("pdb-article-paidcontent-registration")) {
            d.getElementById("BaseText").classList.contains("PianoContent") && d.getElementById("BaseText").classList.remove("PianoContent");
        };
    }
);