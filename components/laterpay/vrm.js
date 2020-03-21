//                                         ____
//   __ _____  ___  ___ ___ ___    _____ _/ / /
//  / // / _ \/ _ \/ _ `/ // / |/|/ / _ `/ / / 
//  \_,_/_//_/ .__/\_,_/\_, /|__,__/\_,_/_/_/  
//          /_/        /___/                           
//
//  verlagsgruppe rhein-main component
//  github.com/tobimori/unpaywall
//
//  notes:
//  vrm uses laterpay
//

const d = document;

// remove any meta tags with the laterpay config token on any change in document
const observer = new MutationObserver(function (mutations, me) {
  [...d.getElementsByTagName("meta")].map(n => n.getAttribute("property") == "laterpay:connector:config_token" && n.remove());
});

// check if article is locked, then start the observer
d.getElementsByClassName("vrm-premium") &&
observer.observe(d, {
  childList: true,
  subtree: true
});