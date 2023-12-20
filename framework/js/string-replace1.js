var links, x, le;
links = document.getElementsByClassName('w');
for (x = 0, le = links.length; x < le; x++) {
    links[x].href = "https://pt.m.wikipedia.org/wiki" + (links[x].pathname);
}