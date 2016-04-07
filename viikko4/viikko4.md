#Dynaamista sisältöä InDesigniin jatkuu
## Viikon tavoitteena on saada luotua InDesignissa lehdykkä WordPressiin tallennetuista artikkeleista käyttäen CSV ja JSON formaatteja.

### Tehtävä 3. jatkuu edellisviikolta. Tuo dataa WordPressistä ExtendScriptin avulla
1. Haetaan data CSV tiedostosta. [Aloitustiedosto](https://github.com/ilkkamtk/DLK/blob/master/viikko2/csv_test.jsx)
    * [Valmis tiedosto](https://github.com/ilkkamtk/DLK/blob/master/viikko4/csv_valmis.jsx)
2. Haetaan data WordPressin Rest API pluginin avulla
    * Tutustu porky/src/examples/test-remote-json-data-access.jsx -tiedostoon
    * Tulosta alert-komennon avulla Wordpressin artikkelien tekstisisältöä, otsikoita sekä artikkelien kuvien osotteita. Tätä varten vaihda em. esimerkkitiedostossa osoitteeksi http://users.metropolia.fi/~TUNNUS/WP_KANSIO/wp-json/wp/v2/posts
3. Luo InDesignissa lehdykkä WordPressiin tallennetuista artikkeleista käyttäen WP-Rest API:a (kokeiltiin kohdassa 2). Aloita homma muokkaamall skriptiä, joka tehtiin CSV:tä varten. Vaihda datalähteeksi CSV:n sijasta 2. kohdan mallin mukaan JSON.