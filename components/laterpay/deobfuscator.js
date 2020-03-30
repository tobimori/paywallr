//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  laterpay deobfuscator (rot13 25/-1) component
//  github.com/tobimori/paywallr
//

const deobfuscateLaterpay = (s) => {
    return s.replace(/[A-ZÅÝÀ,{[/.÷;=?0)*\-]/gi, c =>
        "ZABCDEFGHIJKLMNOPQRSTUVWXYÄÜẞZzabcdefghijklmnopqrstuvwxyäüößz,.-:<>/()"[
        "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÝÀ[abcdefghijklmnopqrstuvwxyzåý÷à{-/.;=?0)*".indexOf(c)]);   
};

[...d.getElementsByClassName("obfuscated")].forEach(a => 
    a.innerText = deobfuscateLaterpay(a.innerText)
);