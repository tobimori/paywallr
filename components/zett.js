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
//  can't be replaced !!!
// 

removeElements(d.getElementsByClassName("steady-overlay"));
d.getElementsByClassName("ph-article-flag-description")[0].innerText = "unlocked by paywallr";
const s = d.createElement('style')
s.innerHTML = ".ph-article {max-height: 100% !important;}";
d.body.appendChild(s);