# unpaywall [![Mozilla Add-on](https://img.shields.io/amo/v/unpaywall-germany?style=flat-square&logo=mozilla-firefox)](https://addons.mozilla.org/firefox/addon/unpaywall-germany/?src=external-github-shield-downloads)

Read articles locked behind paywalls of over 40 german local newspapers.

This extension is provided for **educational purposes *only***. I do not endorse the use of it and **strongly** encourage you to subscribe to your favourite newspaper and support local journalism.

**[<img src="https://addons.cdn.mozilla.net/static/img/addons-buttons/AMO-button_1.png" height="40">](https://addons.mozilla.org/firefox/addon/unpaywall-germany/?src=external-github-bigbutton-downloads)**
**[<img src="https://developer.chrome.com/webstore/images/ChromeWebStore_BadgeWBorder_v2_496x150.png" height="39">](https://chrome.google.com/webstore/detail/unpaywall/afeichgdccjeclmcfiofcacpecigafoi/?src=external-github-bigbutton-downloads)**

## Supported sites

* [Berliner Morgenpost](https://morgenpost.de/)
* [Hamburger Abendblatt](https://abendblatt.de/)
* [Westdeutsche Allgemeine Zeitung](https://waz.de/)
* [Thüringer Allgemeine](https://thueringer-allgemeine.de/)
* [Neue Ruhr Zeitung (NRZ)](https://nrz.de/)
* [Westfalenpost](https://wp.de/)
* [Ostthüringer Zeitung](https://otz.de/)
* [Iserlohner Kreisanzeiger und Zeitung](https://ikz-online.de)
* [Kölner Stadtanzeiger](https://ksta.de/)
* [Kölnische Rundschau](https://www.rundschau-online.de/)
* [Mitteldeutsche Zeitung](https://www.mz-web.de/)
* [Wolfsburger Allgemeine/Aller-Zeitung](https://waz-online.de/)
* [Cellesche Zeitung](https://www.cellesche-zeitung.de/)
* [Dresdner Neuste Nachrichten](https://www.dnn.de/)
* [Göttinger Tageblatt](https://www.goettinger-tageblatt.de/)
* [Hannoversche Allgemeine Zeitung](https://www.haz.de/)
* [Kieler Nachrichten](https://www.kn-online.de/)
* [Leipziger Volkszeitung](https://www.lvz.de/)
* [Lübecker Nachrichten](https://www.ln-online.de/)
* [Märkische Allgemeine](https://www.maz-online.de/)
* [Neue Presse](https://www.neuepresse.de/)
* [Ostsee-Zeitung](https://www.ostsee-zeitung.de/)
* [Peiner Allgemeine](https://www.paz-online.de/)
* [Schaumburger Nachrichten](https://www.sn-online.de/)
* [Allgemeine Zeitung](https://www.allgemeine-zeitung.de/)
* [Burgstädter Zeitung](https://www.buerstaedter-zeitung.de/)
* [Echo Online](https://www.echo-online.de/)
* [Mittelhessen.de](https://www.mittelhessen.de/)
* [Giessener Anzeiger](https://www.giessener-anzeiger.de/)
* [Hochheimer Zeitung](https://www.hochheimer-zeitung.de/)
* [Hofheimer Zeitung](https://www.hofheimer-zeitung.de/)
* [Wiesbadener Kurier](https://www.wiesbadener-kurier.de/)
* [Kreis-Anzeiger](https://www.kreis-anzeiger.de/)
* [Lampertheimer Zeitung](https://www.lampertheimer-zeitung.de/)
* [Lauterbacher Anzeiger](https://www.lauterbacher-anzeiger.de/)
* [Main-Spitze](https://www.main-spitze.de/)
* [Oberhessische Zeitung](https://www.oberhessische-zeitung.de/)
* [Usinger Anzeiger](https://www.usinger-anzeiger.de/)
* [Wormser Zeitung](https://www.wormser-zeitung.de/)
* [Saarbrücker Zeitung](https://www.saarbruecker-zeitung.de/)
* [NahverkehrHAMBURG](https://www.nahverkehrhamburg.de/)
* [Ruhrnachrichten](https://www.ruhrnachrichten.de)
* [Hellweger Anzeiger](https://www.hellwegeranzeiger.de)
* [Dorstener Zeitung](https://www.dorstenerzeitung.de)
* [Münsterlandzeitung](https://www.muensterlandzeitung.de)
* [Halterner Zeitung](https://www.halternerzeitung.de)

## Why (and how) does this work?!

### Madsack (e.g. Leipziger Volkszeitung, Hannoversche Allgemeine Zeitung, Kieler Nachrichten)

> Madsack stores the complete article in text form (i.e. without media and formatting) in the source code of the page to enable indexing of paywalled articles in search engines like Google & Co. They also indicate that their article is available for free, presumably to achieve a higher ranking. The Web extension just reads this text and replaces the preview with it.

### FUNKE Mediengruppe (e.g. Hamburger Abendblatt, Berliner Morgenpost, Thüringer Allgemeine, Westfalenpost)

> The CMS of the FUNKE Mediengruppe uses a solution by Piano, where the content gets removed afterwards. This script is easily blocked and requires no further work.

### VRM (e.g. Mittelhessen, Echo Online, Allgemeine Zeitung)

> The CMS of the Verlagsgruppe Rhein-Main encrypts the article afterwards. They use a solution of the company LaterPay, whose encryption can be prevented by removing the configuration key used by LaterPay.

### DuMont Newsnet (e.g. Kölner Stadtanzeiger & Mitteldeutsche Zeitung)

> DuMont Newsnet stores the complete article in text form (i.e. without media and formatting) in the source code of the page to enable indexing of paywalled articles in search engines like Google & Co.

### Frankfurter Allgemeine Zeitung

> ***Never introduced.*** The FAZ has a social media section [here](https://www.faz.net/social-media/instagram/), which is linked in their Instagram biography and shall be used to find articles they post about. Articles in this category can be unlocked by adding a ```?premium``` at the end.

> Fixed as of 03/16/2020

### Saarbrücker Zeitung

> The Saarbrücker Zeitung saves the complete article and replaces it afterwards. Their paywall script is pretty bad and blocked by all common adblockers.

### NahverkehrHAMBURG

> ***Introduced in Version 1.1.***
> NahverkehrHAMBURG uses Steady to finance their site. All articles are available for free at release, but will be blocked with a popup after a few days. Only the view is blocked, so Unpaywall removes the element that advertises the paywall.

### Lensing Media (e.g. Ruhrnachrichten)

> ***Introduced in Version 1.2/2.0.***
> The CMS of Lensing Media uses a solution by Piano, where the content gets removed afterwards. Blocking this script works fine. Additionally, the content is blurred, but this blur is easily removeable by removing the class of the article object.