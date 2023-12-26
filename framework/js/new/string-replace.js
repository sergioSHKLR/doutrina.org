// STRING REPLACE 1 START

var links, x, le;
links = document.getElementsByClassName('w');
for (x = 0, le = links.length; x < le; x++) {
    links[x].href = "https://pt.m.wikipedia.org/wiki" + (links[x].pathname);
}

// STRING REPLACE 1 END

// STRING REPLACE 2 START

var links, y, le;
links = document.getElementsByClassName('d');
for (y = 0, le = links.length; y < le; y++) {
    links[y].href = "https://pt.m.wiktionary.org/wiki" + (links[y].pathname);
}

// STRING REPLACE 2 END

// STRING REPLACE 3 START

var links, z, le;
links = document.getElementsByClassName('l');
for (z = 0, le = links.length; z < le; z++) {
    links[z].href = "https://www.luzespirita.org.br/index.php?lisPage=enciclopedia&item=" + (links[z].pathname.slice(1));
}

// STRING REPLACE 3 END

// STRING REPLACE 4 START

var links, k, le;
links = document.getElementsByClassName('m');
for (k = 0, le = links.length; k < le; k++) {
    links[k].href = "https://maps.google.com/maps?hl=en&t=k&z=12&ie=UTF8&iwloc=B&output=embed&q=" + (links[k].pathname.slice(1));
}

// STRING REPLACE 4 END

// STRING REPLACE 5 START

var links, u, le;
links = document.getElementsByClassName('v');
for (u = 0, le = links.length; u < le; u++) {
    links[u].href = "https://www.youtube.com/embed/" + (links[u].pathname.slice(1)) + (links[u].search);
}

// STRING REPLACE 5 END

// STRING REPLACE 6 START

var links, b, le;
links = document.getElementsByClassName('b');
for (b = 0, le = links.length; b < le; b++) {
    links[b].href = "https://www.bible.com/pt/bible/212/" + (links[b].pathname);
}

// STRING REPLACE 6 END