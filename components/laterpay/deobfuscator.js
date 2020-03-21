//                                         ____
//   __ _____  ___  ___ ___ ___    _____ _/ / /
//  / // / _ \/ _ \/ _ `/ // / |/|/ / _ `/ / / 
//  \_,_/_//_/ .__/\_,_/\_, /|__,__/\_,_/_/_/  
//          /_/        /___/                           
//
//  laterpay deobfuscator (rot13 25/-1) component
//  github.com/tobimori/unpaywall
//

const deobfuscateLaterpay = (s) => {
    return s.replace(/[A-ZÅÝÀ,{[/.÷;=?0)*\-]/gi, c =>
        "ZABCDEFGHIJKLMNOPQRSTUVWXYÄÜẞZzabcdefghijklmnopqrstuvwxyäüößz,.-:<>/()"[
        "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÝÀ[abcdefghijklmnopqrstuvwxyzåý÷à{-/.;=?0)*".indexOf(c)]);   
};

[...document.getElementsByClassName("obfuscated")].forEach(a => 
    a.innerText = deobfuscateLaterpay(a.innerText)
);