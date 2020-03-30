//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  faz user agent component
//  github.com/tobimori/paywallr
//

extapi.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        // Replace the User-Agent header so FAZ doesn't redirect
        console.log(details);
        let headers = details.requestHeaders;
        headers.forEach(function(header, i) {
            if(header.name.toLowerCase() == 'user-agent') header.value = UAMobile;
        });  
        if(
            !details.originUrl && details.type == "xmlhttprequest" || 
            details.initiator == "https://www.faz.net" && details.type == "xmlhttprequest"
        ) return {requestHeaders: headers};
    },
    // Request filter
    {urls: ["*://m.faz.net/*"]},
    ["blocking", "requestHeaders"]
);