var tekst ="Hij lijkt een beetje op nelson mandela";
lengte = tekst.length;
spaties = 0;
document.write("<br>");
for (x = 0; x < lengte; x++) {
    teken = tekst.charAt(x);
    document.write(teken);
    if (teken == " ") {
        spaties ++;
    }
} 
document.write("<br> Tekst bevat " + spaties + " spaties <br>");

tekst = "Hij lijkt een beetje op nelson mandela";
length = tekst.length;
klinkera = 0;
klinkere = 0;
klinkeri = 0;
klinkero = 0;
klinkeru = 0;
woorden = 1;

for (i = 0; i <= length; i++) {
    if (tekst.charAt(i) == "a") {
        klinkera++;
    }
    if (tekst.charAt(i) == "e") {
        klinkere++;
    }
    if (tekst.charAt(i) == "i") {
        klinkeri++;
    }
    if (tekst.charAt(i) == "o") {
        klinkero++;
    }
    if (tekst.charAt(i) == "u") {
        klinkeru++;
    }
    if (tekst.charAt(i) == " ") {
        woorden++;
    }
}

document.write("De zin is: " + tekst);
document.write("<br>Er zijn " + klinkera + " a's");
document.write("<br>Er zijn " + klinkere + " e's");
document.write("<br>Er zijn " + klinkeri + " i's");
document.write("<br>Er zijn " + klinkero + " o's");
document.write("<br>Er zijn " + klinkeru + " u's");
document.write("<br>Aantal woorden: " + woorden);


