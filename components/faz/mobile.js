//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  faz mobile component
//  github.com/tobimori/paywallr
//

if(d.getElementById("paywall-form-container-outer")) {
    d.getElementById("paywall-form-container-outer").remove();
    d.getElementsByClassName("article_text paywall")[0].innerHTML = '<p class="First">' + JSON.parse(d.getElementById("schemaOrgJson").innerHTML).ArticleBody + '</p>'
};