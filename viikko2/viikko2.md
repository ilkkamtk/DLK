#Dynaamista sisältöä InDesigniin
## Viikon tavoitteena on saada luotua InDesignissa lehdykkä WordPressiin tallennetuista artikkeleista käyttäen CSV ja JSON formaatteja.
### Tehtävä 1. Tuo CSV dataa WordPressistä
1. Käytä WordPressin pluginia CSV-tiedoston luomisessa ja tee InDesignissa dokumentti, jossa on jokainen artikkeli kuvineen WordPress -sivustoltasi
2. Luo CSV tiedosto phpmyadminissä suoraan tietokannasta  ja tee InDesignissa dokumentti, jossa on jokainen artikkeli kuvineen WordPress -sivustoltasi

[Esimerkki template InDesigniin](https://github.com/ilkkamtk/DLK/blob/master/viikko2/malli.indt)

### Tehtävä 2. Asenna seuraavass vaiheessa tarvittavat työkalut ja kirjastot
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
    * Testaa porkyn toimivuus ajamalla skripi 'src/start-porky-data-source-access.jsx'
    * Kokeile eri porkyn esimerkkejä, kuten 'src/examples/test-file-csv-to-array-to-table.jsx' sekä 'src/examples/test-remote-json-data-access.jsx' 

### Tehtävä 3. Tuo dataa WordPressistä ExtendScriptin avulla
1. Haetaan data CSV tiedostosta (tarkennetaan myöh...)
2. Haetaan data WordPressin Rest API pluginin avulla (tarkennetaan myöh...)

### Apuja
* https://www.linux.fi/wiki/Säännöllinen_lauseke
* https://gist.github.com/ccstone/5385334
* http://www.adobe.com/devnet/indesign/documentation.html
* https://forums.adobe.com/thread/708488?tstart=0
* https://forums.adobe.com/thread/899665?tstart=0
* http://indesignsecrets.com/topic/script-to-duplicate-pagespread-after-current
