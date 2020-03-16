//                                         ____
//   __ _____  ___  ___ ___ ___    _____ _/ / /
//  / // / _ \/ _ \/ _ `/ // / |/|/ / _ `/ / / 
//  \_,_/_//_/ .__/\_,_/\_, /|__,__/\_,_/_/_/  
//          /_/        /___/                           
//
//  standard library
//  github.com/tobimori/unpaywall
//

// browser detection by rob-w on stackoverflow
// Firefox
const isFirefox = typeof InstallTrigger !== 'undefined';
// Chrome
const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// orginally written by Lukas Fruntke
// https://github.com/tobimori/unpaywall-funke/unpaywall-funke.user.js
const removeElements = (...arrays) => {
    [...arrays].forEach(([...array]) => array.filter(n => !!n)
                                 .forEach(n => n.remove())
                  );
};
