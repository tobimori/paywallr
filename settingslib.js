//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  settings library
//  github.com/tobimori/paywallr
//

const isSite = (fullUrl) => {
    if (!fullUrl) return false;
    return sites.includes(shortUrl(fullUrl));
};

const isSiteEnabled = (fullUrl) => { 
    return true;
    if (!fullUrl) return false;
    extapi.storage.sync.get({sitesDisabled: []},
        (stor) => {
            let arr = Array.from(stor["sitesDisabled"]);
            return !arr.includes(shortUrl(fullUrl));
        }
    );
};

