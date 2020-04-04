//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  bergedorfer zeitung deobfuscator (rot13 25/-1) component
//  github.com/tobimori/paywallr
//

const deobfuscateBZ = (s) => {
    return s.replace(/[A-ZÅÝÀ,{[/.÷;=?0)*\-]/gi, c =>
        "ZABCDEFGHIJKLMNOPQRSTUVWXYÄÜẞZzabcdefghijklmnopqrstuvwxyäüößz,.-:<>/()"[
        "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÝÀ[abcdefghijklmnopqrstuvwxyzåý÷à{-/.;=?0)*".indexOf(c)]);   
};

extapi.storage.sync.get({ sitesDisabled: [] },
    (stor) => {
        disabledSites = Array.from(stor["sitesDisabled"]);
        console.log("ON LOAD - DISABLED SITES: " + disabledSites);
        isSiteEnabled(window.location.href) && [...d.getElementsByClassName("obfuscated")].forEach(a =>
            a.innerHTML = deobfuscateBZ(a.innerText)
        );
    }
);
