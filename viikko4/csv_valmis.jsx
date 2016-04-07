//@include ../bin/porky.jsx;

var doc = app.activeDocument;

// tiedoston valinta (Dialog)
var myFile = File.openDialog();

// read an existing text file from a specific folder
var myCSVFileContent = readFile(myFile);

if (myCSVFileContent) {
    // muuta csv taulukoksi (porky)
    var myArray = csvToTwoDArray(myCSVFileContent, {
        rSep: '\n',
        fSep: ',',
        quot: "\"",
        trim: false
    });
    for (var i = 1; i < myArray.length; i++) {
        // kopioidaan mallisivu
        var currentPage = app.layoutWindows[0].activePage;
        var tempPage = currentPage.duplicate(LocationOptions.AFTER, currentPage);
        app.activeWindow.activePage = tempPage;


        // haetaan dataa taulukosta
        var post = myArray[i][1];
        var title = myArray[i][0];
        var osoite = myArray[i][2];
        //alert(post);
        //alert(title);
        //alert(osoite);

        // lisää tekstit
        addText(post, title, tempPage);

        // lisää kuvat
        addImage(osoite, tempPage);
    }
    // mallisivun poisto
    var pages = app.activeDocument.pages;
    pages[0].remove();
    
} else {
    alert('File does not exist');
}


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
    
}

function addImage(osoite, tempPage) {
    var kuvaKentta = tempPage.rectangles.itemByName("kuva");
    // tallennetaan kuva haluttuun kansioon (porky)
    var kuva = httpGetBinaryFile(osoite, 80, '~/Desktop/kuvat');
    kuvaKentta.place(kuva, false);
    kuvaKentta.images[0].fit(FitOptions.FILL_PROPORTIONALLY);
    kuvaKentta.images[0].fit(FitOptions.centerContent);
}