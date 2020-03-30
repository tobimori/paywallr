//                                         ____
//   __ _____  ___  ___ ___ ___    _____ _/ / /
//  / // / _ \/ _ \/ _ `/ // / |/|/ / _ `/ / / 
//  \_,_/_//_/ .__/\_,_/\_, /|__,__/\_,_/_/_/  
//          /_/        /___/                           
//
//  dumont newsnet component
//  github.com/tobimori/unpaywall
//

if (document.getElementsByClassName("content-behind-wall hide-paid-content")[0]) {
    removeElements(document.getElementsByClassName("ssoTemplate pay wall"), document.getElementsByClassName("logo title backToLandingPage"));
    document.getElementById('c1-template-platzhalter').remove();
    document.getElementsByClassName("content-behind-wall hide-paid-content")[0].classList.remove("hide-paid-content")
};