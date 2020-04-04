//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  funke deobfuscator (rot13 25/-1) component
//  github.com/tobimori/paywallr
//

const deobfuscateFUNKE = (s) => {
    return s.replace(/[0-9A-ZÅÝÀµ#@²±:`^'´\\,{[/.÷;=?)*\-]/gi, c =>
        '012345678@ABCDEFGHIJKLMNOPQRSTUVWXYÄÜẞZzabcdefghijklmnopqrstuvwxyäüößz,.-:<>/()!"=[;9]&_?%'[
        '123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÅÝÀ[abcdefghijklmnopqrstuvwxyzåý÷à{-/.;=?0)*²#µ\\´:^\'`@±'.indexOf(c)]);
};

extapi.storage.sync.get({ sitesDisabled: [] },
    (stor) => {
        disabledSites = Array.from(stor["sitesDisabled"]);
        console.log("ON LOAD - DISABLED SITES: " + disabledSites);
        if(isSiteEnabled(window.location.href)) {
            [...d.getElementsByClassName("obfuscated")].forEach((a) => {
                    a.classList.remove("obfuscated");
                    a.innerHTML = deobfuscateFUNKE(a.innerText);
                }
            );
        };
    }
);
