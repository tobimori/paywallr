//                                         ____
//   __ _____  ___  ___ ___ ___    _____ _/ / /
//  / // / _ \/ _ \/ _ `/ // / |/|/ / _ `/ / / 
//  \_,_/_//_/ .__/\_,_/\_, /|__,__/\_,_/_/_/  
//          /_/        /___/                           
//
//  lensing media component
//  github.com/tobimori/unpaywall
//
//  notes:
//  blocking of funke script done in background.js
//

const d = document;

if (d.getElementsByClassName('article__header__headline ispayedcontent')) {
  removeElements(
    d.getElementsByClassName("paging__wrapper"), 
    d.getElementsByClassName("pager pager__bottom")
  );
};