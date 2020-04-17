//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  standard library
//  github.com/tobimori/paywallr
//

const d = document;
const extapi = chrome;

const UAGooglebotDesktop = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";
const UAMobile = "Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/67.0.3396.87 Mobile Safari/537.36";
const UAGooglebotMobile = "Chrome/41.0.2272.96 Mobile Safari/537.36 (compatible ; Googlebot/2.1 ; +http://www.google.com/bot.html)";

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

// get 2nd and top level domain from full url
const shortUrl = (url) => {
    a = new URL(url).hostname.toString().split('.');
    if (a.length !== 2) a = a.slice(a.length - 2);
    return a.join('.');
};

// line break heuristics
const FAZify = (str) => {
    let arr = [];
    str = breakText(str);
    str.split("\n\n").forEach(
        (e) => {
            console.log(e);
            if (e.length < 100) {
                arr.push('<h3 class="atc-SubHeadline">' + e + '</h3>');
            } else {
                arr.push('<p class="atc-TextParagraph">' + e + '</p>');
            };
        }
    );
    return arr.join("");
};

const breakText = (str) => {
    str = str.replace(/(?<=\w)(\.|\?|!)(?=[a-zA-Z])/gm, "$&\n\n");
    str = str.replace(/(?<=[a-z"])[A-Z]/gm, "\n\n$&")
    return str;
};

const MADSACKify = (str) => {

};