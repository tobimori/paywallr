//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  faz component
//  github.com/tobimori/paywallr
//

extapi.storage.sync.get({ sitesDisabled: [] },
    (stor) => {
        disabledSites = Array.from(stor["sitesDisabled"]);
        console.log("ON LOAD - DISABLED SITES: " + disabledSites);

        let isPaidContent; // check if article is paid content
        [...d.getElementsByTagName("script")].forEach(e => {
            if (e.innerText == "\n    (window.isPaidContent = true);\n") isPaidContent = true
        });

        if (isSiteEnabled(window.location.href) && isPaidContent) {

            const mReq = new XMLHttpRequest();
            const oUrl = new URL(window.location.href);
            const mUrl = new URL(oUrl.pathname, "https://m.faz.net/");

            const downloadDone = (e) => {
                d.getElementsByClassName("atc-ReadTime_Text")[0].innerText = "unlocked by paywallr";
                d.getElementsByClassName("atc-Text js-atc-Text")[0].innerHTML = FAZify(JSON.parse(mReq.response.getElementById("schemaOrgJson").innerHTML).ArticleBody);
                //d.getElementsByClassName("atc-Text js-atc-Text")[0].innerText = JSON.parse(mReq.response.getElementById("schemaOrgJson").innerHTML).ArticleBody;
                console.log(window.isPaidContent);
            };

            mReq.addEventListener("load", downloadDone);
            mReq.open("GET", mUrl.href);
            mReq.responseType = "document";
            mReq.send();

            removeElements(
                d.getElementsByClassName("js-atc-ContainerPaywall atc-ContainerPaywall"), // Paywall ad
                d.getElementsByClassName("atc-ContainerInfo js-atc-ContainerInfo"), // Author information
                d.getElementsByClassName("o-Icon atc-ReadTime_Icon"), // Reading time icon
                d.getElementsByClassName("atc-TextParagraph") // paragraphs
            );

            d.getElementsByClassName("atc-Text js-atc-Text")[0].innerHTML = '<p class="atc-TextParagraph">Unlocking...</p>'
            d.getElementsByClassName("atc-ReadTime_Text")[0].innerText = "Unlocking..."
        };
    }
);

