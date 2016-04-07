//@include ../bin/porky.jsx;

var doc = app.activeDocument;

// JSON remote access
settings.dataSource.type = "JSON";
settings.dataSource.name = "http://users.metropolia.fi/~TUNNUS/WP-KANSIO/wp-json/wp/v2/posts";

var myArray = JSON.parse(connectToDataSource(""));

for (var i = 0; i < myArray.length; i++) {
    // kopioidaan mallisivu
    var currentPage = app.layoutWindows[0].activePage;
    var tempPage = currentPage.duplicate(LocationOptions.AFTER, currentPage);
    app.activeWindow.activePage = tempPage;


    // haetaan dataa taulukosta
    var post = myArray[i].content.rendered;
    var title = myArray[i].title.rendered;
    var kuvanID = myArray[i].featured_media;
    //alert(post);
    //alert(title);
    //alert(osoite);

    // lisää tekstit
    addText(post, title, tempPage);

    // lisää kuvat
    addImage(kuvanID, tempPage);
}
// mallisivun poisto
var pages = app.activeDocument.pages;
pages[0].remove();



function addText(post, title, tempPage) {
    post = post.replace(/<a.*\/a>/, '');
    
    // valitse kentät
    var otsikkoKentta = tempPage.textFrames.itemByName("otsikko");
    var tekstiKentta = tempPage.textFrames.itemByName("teksti");
    // aseta tekstit
    otsikkoKentta.contents = title;
    // tekstiKentta.contents = post; // indesignin vakiotapa

    // porkyllä saadaan html tägit tyyleiksi
    tekstiKentta = placeHTML(tekstiKentta, post, "strong, em", "p, h1, div");
    tekstiKentta.contents = erikoismerkitPois(tekstiKentta.contents);
}

function addImage(kuvanID, tempPage) {
    settings.dataSource.name = "http://users.metropolia.fi/~TUNNUS/WP-KANSIO/wp-json/wp/v2/media/"+kuvanID;
    var vastaus2 = JSON.parse(connectToDataSource(""));
    var osoite = vastaus2.guid.rendered 
    var kuvaKentta = tempPage.rectangles.itemByName("kuva");
    // tallennetaan kuva haluttuun kansioon (porky)
    var kuva = httpGetBinaryFile(osoite, 80, '~/Desktop/kuvat');
    kuvaKentta.place(kuva, false);
    kuvaKentta.images[0].fit(FitOptions.FILL_PROPORTIONALLY);
    kuvaKentta.images[0].fit(FitOptions.centerContent);
}

function erikoismerkitPois(teksti) {
     var map = {"gt":">" /* , … */};
    return teksti.replace(/&(#(?:x[0-9a-f]+|\d+)|[a-z]+);?/gi, function($0, $1) {
        if ($1[0] === "#") {
            return String.fromCharCode($1[1].toLowerCase() === "x" ? parseInt($1.substr(2), 16)  : parseInt($1.substr(1), 10));
        } else {
            return map.hasOwnProperty($1) ? map[$1] : $0;
        }
    });
}