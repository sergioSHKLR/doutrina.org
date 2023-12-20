var links, y, le;
links = document.getElementsByClassName('d');
for (y = 0, le = links.length; y < le; y++) {
    links[y].href = "https://pt.m.wiktionary.org" + (links[y].pathname);
}