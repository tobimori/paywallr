//                                         ____
//   __ _____  ___  ___ ___ ___    _____ _/ / /
//  / // / _ \/ _ \/ _ `/ // / |/|/ / _ `/ / / 
//  \_,_/_//_/ .__/\_,_/\_, /|__,__/\_,_/_/_/  
//          /_/        /___/                           
//
//  verlagsgruppe rhein-main component
//  github.com/tobimori/unpaywall
//

const d = document;

const observer = new MutationObserver(function (mutations, me) {
  [...d.getElementsByTagName("meta")].map(n => n.getAttribute("property") == "laterpay:connector:config_token" && n.remove());
});

d.getElementsByTagName("meta")[1].getAttribute("name") == "isPremiumArticle" && 
d.getElementsByTagName("meta")[1].getAttribute("content") == "1" &&
observer.observe(d, {
  childList: true,
  subtree: true
});