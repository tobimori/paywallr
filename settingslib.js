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
    if (!fullUrl) return false;
    browser.storage.sync.get(shortUrl(fullUrl)).then(
        (r) => {
            return !r
        }
    );
};

