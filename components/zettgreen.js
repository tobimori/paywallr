//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  ze.tt green component
//  github.com/tobimori/paywallr
//
//  notes:
//  function ph.callIfNoPaywall is defined in header.js which also includes 
//  serveral other functions to keep the site working, blocking scripts is no option to keep site working
//  or at least header working
// 

// block ze.tt steady, also blocks side header #rip
extapi.webRequest.onBeforeRequest.addListener(
  function(details) {
      return {cancel: true};
  }, {
      urls: ["*://*.ze.tt/*"],
      types: ["script"]
  },
  ["blocking"]
);