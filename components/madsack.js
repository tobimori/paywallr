//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  madsack component
//  github.com/tobimori/paywallr
//

if (d.getElementsByClassName("pdb-article-paidcontent-registration")) {
    d.getElementsByClassName("pdb-article-body-paidcontentintro")[0].classList.remove("pdb-article-body-paidcontentintro")
    // throws an error in chrome, but important and works.
    d.getElementsByClassName("pdb-richtext-field")[1].innerHTML = "<p>" + JSON.parse(d.getElementsByClassName("pdb-article")[0].getElementsByTagName("script")[0].innerHTML).articleBody + "</p>";
    removeElements(d.getElementsByClassName("pdb-article-paidcontent-registration"));
    [...d.getElementsByClassName("pdb-parts-paidcontent-freeuntilbadge pdb-parts-paidcontent-freeuntilbadge_article pdb-parts-paidcontent-freeuntilbadge_close")].
        map(n => 
            n.classList.remove("pdb-parts-paidcontent-freeuntilbadge_close") +   
            n.classList.add("pdb-parts-paidcontent-freeuntilbadge_open") + 
            n.appendChild(d.createTextNode("- unlocked by paywallr"))
        );
};