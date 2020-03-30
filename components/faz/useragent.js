//                                         ____
//   __ _____  ___  ___ ___ ___    _____ _/ / /
//  / // / _ \/ _ \/ _ `/ // / |/|/ / _ `/ / / 
//  \_,_/_//_/ .__/\_,_/\_, /|__,__/\_,_/_/_/  
//          /_/        /___/                           
//
//  faz user agent component
//  github.com/tobimori/unpaywall
//

chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        // Replace the User-Agent header so FAZ doesn't redirect
        console.log(details);
        var headers = details.requestHeaders;
        headers.forEach(function(header, i) {
            if (header.name.toLowerCase() == 'user-agent') { 
                header.value = 'Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/67.0.3396.87 Mobile Safari/537.36';
            }
        });  
        if(details.type = "xmlhttprequest") return {requestHeaders: headers};
    },
    // Request filter
    {urls: ["*://m.faz.net/*"]},
    ["blocking", "requestHeaders"]
);