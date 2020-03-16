//                                         ____
//   __ _____  ___  ___ ___ ___    _____ _/ / /
//  / // / _ \/ _ \/ _ `/ // / |/|/ / _ `/ / / 
//  \_,_/_//_/ .__/\_,_/\_, /|__,__/\_,_/_/_/  
//          /_/        /___/                           
//
//  ze.tt green component
//  github.com/tobimori/unpaywall
//
//  notes:
//  function ph.callIfNoPaywall is defined in header.js which also includes 
//  serveral other functions to keep the site working, blocking scripts is no option to keep site working
//  or at least header working
// 

const d = document;

const observer = new MutationObserver(function (mutations, me) {
  [...d.getElementsByTagName("script")].map(n => !n.getAttribute("src") && n.remove());
});

observer.observe(d, {
  childList: true,
  subtree: true
});