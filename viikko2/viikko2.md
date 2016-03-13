#Dynaamista sisältöä InDesigniin
## Viikon tavoitteena on saada luotua InDesignissa lehdykkä WordPressiin tallennetuista artikkeleista.
### Asenna tarvittavat työkalut ja kirjastot
1. Jos teet harjoitusta omalla tietokoneella, asenna [node.js](https://nodejs.org/). Valitse Stable versio. Koulun koneilla se on jo valmiina.
2. Jos teet harjoitusta omalla tietokoneella, asenna git-työkalut Koulun koneilla ne ovat jo valmiina.
    * Windows: [Git for windows](https://msysgit.github.io/) provides command line tools (git bash) and Graphic UI tools/integration to Windows explorer
    * OS X: [Git for Mac](http://git-scm.com/download/mac)
3. Asenna porky-lisäosa InDesigniin:
    * Ota selvää missä koneellasi on InDesignin Scripts Panel -kansio (ohjeet tunnilla)
    * Mene ko. kansioon Terminalilla tai Git Bashillä
    * aja seuraavat komennot: 
        * git clone https://github.com/Schreiber-und-Freunde/porky.git
        * cd porky
        * npm install
    * Nyt InDesignin Scripts ikkunasta pitäisi löytyä kansio 'porky'

..jatkuu
http://www.adobe.com/devnet/indesign/documentation.html
https://forums.adobe.com/thread/708488?tstart=0
https://forums.adobe.com/thread/899665?tstart=0
http://indesignsecrets.com/topic/script-to-duplicate-pagespread-after-current