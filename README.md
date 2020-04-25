```
                               ____   
   ___  ___ ___ ___    _____ _/ / /___
  / _ \/ _ `/ // / |/|/ / _ `/ / / __/
 / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
/_/        /___/                      

paywall + r (emove)
read articles locked behind
paywalls of over 50 newspapers.
```
> **Tear down this ~~wall~~ paywall!**

This extension is provided for **educational purposes *only***. I do not endorse the use of it and **strongly** encourage you to subscribe to your favourite newspaper and support local journalism.

Got something on your heart? Throw me a mail @ [tobias@moeritz.wtf](mailto:tobias@moeritz.wtf) :)

**[<img src="https://addons.cdn.mozilla.net/static/img/addons-buttons/AMO-button_1.png" height="40">](https://addons.mozilla.org/firefox/addon/paywallr/?src=external-github-bigbutton-downloads)**
**[<img src="https://developer.chrome.com/webstore/images/ChromeWebStore_BadgeWBorder_v2_496x150.png" height="39">](https://chrome.google.com/webstore/detail/unpaywall/afeichgdccjeclmcfiofcacpecigafoi/?src=external-github-bigbutton-downloads)**

## Supported sites

* [Allgemeine Zeitung](https://www.allgemeine-zeitung.de/)
* [Bergedorfer Zeitung](https://www.bergedorfer-zeitung.de/) *v2.0+*
* [Berliner Morgenpost](https://morgenpost.de/)
* [Burgstädter Zeitung](https://www.buerstaedter-zeitung.de/)
* [Cellesche Zeitung](https://www.cellesche-zeitung.de/) *Text only*
* [Dorstener Zeitung](https://www.dorstenerzeitung.de) *v2.0+*
* [Dresdner Neuste Nachrichten](https://www.dnn.de/) *Text only*
* [Echo Online](https://www.echo-online.de/)
* [Frankfurter Allgemeine Zeitung](https://www.faz.net) *Text only, pictures available in gallery - v2.0+*
* [Giessener Anzeiger](https://www.giessener-anzeiger.de/)
* [Göttinger Tageblatt](https://www.goettinger-tageblatt.de/) *Text only*
* [Halterner Zeitung](https://www.halternerzeitung.de) *v2.0+*
* [Hamburger Abendblatt](https://abendblatt.de/)
* [Hannoversche Allgemeine Zeitung](https://www.haz.de/) *Text only*
* [Hellweger Anzeiger](https://www.hellwegeranzeiger.de) *v2.0+*
* [Hochheimer Zeitung](https://www.hochheimer-zeitung.de/)
* [Hofheimer Zeitung](https://www.hofheimer-zeitung.de/)
* [Iserlohner Kreisanzeiger und Zeitung](https://ikz-online.de)
* [Kieler Nachrichten](https://www.kn-online.de/) *Text only*
* [Kreis-Anzeiger](https://www.kreis-anzeiger.de/)
* [Kölner Stadtanzeiger](https://ksta.de/)
* [Kölnische Rundschau](https://www.rundschau-online.de/)
* [Lampertheimer Zeitung](https://www.lampertheimer-zeitung.de/)
* [Lauterbacher Anzeiger](https://www.lauterbacher-anzeiger.de/)
* [Leipziger Volkszeitung](https://www.lvz.de/) *Text only*
* [Lübecker Nachrichten](https://www.ln-online.de/) *Text only*
* [Main-Spitze](https://www.main-spitze.de/)
* [Mitteldeutsche Zeitung](https://www.mz-web.de/)
* [Mittelhessen.de](https://www.mittelhessen.de/)
* [Märkische Allgemeine](https://www.maz-online.de/) *Text only*
* [Münsterlandzeitung](https://www.muensterlandzeitung.de) *v2.0+*
* [NahverkehrHAMBURG](https://www.nahverkehrhamburg.de/) *v1.1+*
* [Neue Presse](https://www.neuepresse.de/) *Text only*
* [Neue Rottweiler Zeitung](https://www.nrwz.de) *v2.0+*
* [Neue Ruhr Zeitung (NRZ)](https://nrz.de/)
* [Oberhessische Zeitung](https://www.oberhessische-zeitung.de/)
* [Ostsee-Zeitung](https://www.ostsee-zeitung.de/) *Text only*
* [Ostthüringer Zeitung](https://otz.de/)
* [Peiner Allgemeine](https://www.paz-online.de/) *Text only*
* [Ruhrnachrichten](https://www.ruhrnachrichten.de) *v2.0+*
* [Saarbrücker Zeitung](https://www.saarbruecker-zeitung.de/)
* [Schaumburger Nachrichten](https://www.sn-online.de/) *Text only*
* [Thüringer Allgemeine](https://thueringer-allgemeine.de/)
* [Usinger Anzeiger](https://www.usinger-anzeiger.de/)
* [Westdeutsche Allgemeine Zeitung](https://waz.de/)
* [Westfalenpost](https://wp.de/)
* [Wiesbadener Kurier](https://www.wiesbadener-kurier.de/)
* [Wolfsburger Allgemeine/Aller-Zeitung](https://waz-online.de/) *Text only*
* [Wormser Zeitung](https://www.wormser-zeitung.de/)
* [ze.tt](https://ze.tt) *v2.0+*
* [Titanic Magazin](https://www.titanic-magazin.de/) *v2.2+*

## Unlock mechanisms

### Madsack (e.g. Leipziger Volkszeitung, Hannoversche Allgemeine Zeitung, Kieler Nachrichten)

> Madsack stores the complete article in text form (i.e. without media and formatting) in the source code of the page to enable indexing of paywalled articles in search engines like Google & Co. They also indicate that their article is available for free, presumably to achieve a higher ranking. The Web extension just reads this text and replaces the preview with it.

### FUNKE Mediengruppe (e.g. Hamburger Abendblatt, Berliner Morgenpost, Thüringer Allgemeine, Westfalenpost)

> The CMS of the FUNKE Mediengruppe uses a solution by Piano, where the content gets removed afterwards. This script is easily blocked and requires no further work.

> **Introduced in Version 2.0.** Some articles of some FUNKE newspapers will be "encrypted" with a Caesar chiffre. This is easily decrypted with no further work required.

### VRM (e.g. Mittelhessen, Echo Online, Allgemeine Zeitung)

> The CMS of the Verlagsgruppe Rhein-Main encrypts the article afterwards. They use a solution of the company LaterPay, whose encryption can be prevented by removing the configuration key used by LaterPay.

### DuMont Newsnet (e.g. Kölner Stadtanzeiger & Mitteldeutsche Zeitung)

> DuMont hides the article with CSS rules and displays a paywall container over it.

### Saarbrücker Zeitung

> The Saarbrücker Zeitung saves the complete article and replaces it afterwards. Their paywall script is pretty bad and blocked by all common adblockers.

### Frankfurter Allgemeine Zeitung

> ***Never introduced.*** The FAZ has a social media section [here](https://www.faz.net/social-media/instagram/), which is linked in their Instagram biography and shall be used to find articles they post about. Articles in this category can be unlocked by adding a ```?premium``` at the end.

> Fixed as of 03/16/2020

> ***Introduced in Version 2.0.*** Article text will be loaded from meta data (JSON-LD) only available on the mobile page using a XMLHttpRequest with a spoofed user-agent.

### NahverkehrHAMBURG / NRWZ / Titanic Magazin

> ***Introduced in Version 1.1/2.0/2.2.***
> These sites use Steady to earn money. Only the view is blocked by an element paywallr simply removes.

### Lensing Media (e.g. Ruhrnachrichten)

> ***Introduced in Version 2.0.***
> The CMS of Lensing Media uses a solution by Piano, where the content gets removed afterwards. Blocking this script works fine. Additionally, the content is blurred, but this blur is easily removeable by removing the class of the article object.

### Bergedorfer Zeitung

> ***Introduced in Version 2.0.***
> The Bergedorfer Zeitung uses a solution by Laterpay, which decrypts the text after paying. They use a Caesar chiffre which is easily decrypted.

### ze.tt (Youth magazine of ZEIT)

> **Introduced in Version 2.0.**
> ze.tt uses a ```max-height``` inline style on the article container to hide the content. This is removeable by overwriting the style with ```!important```.

## License

paywallr is licensed under the [MIT License](./LICENSE).