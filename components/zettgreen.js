//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  ze.tt green component
//  github.com/tobimori/paywallr
//
//  notes: hidden with inline styling max-height
// 

// TODO: find the correct moment to remove attribute as ze.tt uses lazy loading
if(d.getElementsByClassName("ph-article-flag-description")[0]) {
    removeElements(d.getElementsByClassName("steady-overlay"), d.getElementsByClassName("steady-action-wrapper"));
    d.getElementsByClassName("ph-article-flag-description")[0].innerText = "unlocked by paywallr"
    d.getElementsByTagName("article")[0].removeAttribute("style");
};