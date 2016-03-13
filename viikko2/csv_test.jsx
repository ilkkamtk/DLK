//@include ../bin/porky.jsx;

var doc = app.activeDocument; 

// read an existing text file from a specific folder
var myCSVFileContent = readFile('polku_csv_tiedostoon');

if(myCSVFileContent){
    // muuta csv taulukoksi (porky)
    var myArray = csvToTwoDArray(myCSVFileContent, { rSep:'\n' , fSep:',' , quot:"\"" , trim:false });
    // haetaan dataa taulukosta
    var post = myArray[1][5];
    var title = myArray[1][4];
    alert(post);
    alert(title);
    
    // haetaan HTML:n joukosta kuvalinkki
    var kuvaPatt = new RegExp ('src\s*=\s*(.+?) ');
    var imageSrc = kuvaPatt.exec(post)[1];
    alert(imageSrc);
    
    // isokokoinen kuva on ilman osoitteesta löytyvää -400x300 tekstiä
    var origImageSrc = imageSrc.replace (/-[0-9]+x[0-9]+/, '');
    origImageSrc = origImageSrc.replace (/"/, '');
    origImageSrc = origImageSrc.replace (/"/, '');
    alert(origImageSrc);
    
    // tallennetaan kuva haluttuun kansioon
    var f = httpGetBinaryFile(origImageSrc, 80, 'polku_kansioon');
    
}else{
    alert('File does not exist');
}

