var links, x, le;
links = document.getElementsByClassName('w');
for (i = 0, le = links.length; x < le; x++) {
    links[x].href = "https://pt.m.wikipedia.org/wiki" + (links[x].pathname);
}

var links, y, le;
links = document.getElementsByClassName('d');
for (y = 0, le = links.length; y < le; y++) {
    links[y].href = "https://pt.m.wiktionary.org" + (links[y].pathname);
}

var links, z, le;
links = document.getElementsByClassName('l');
for (z = 0, le = links.length; z < le; z++) {
    links[z].href = "https://www.luzespirita.org.br/index.php?lisPage=enciclopedia&item=" + (links[z].pathname.slice(1));
}

const extLinks = document.querySelectorAll(
    "a[href^='https://pt'], a[href^='https://www'")
const host = window.location.hostname

const isInternalLink = link => new URL(link).hostname === host

extLinks.forEach(link => {
    if (isInternalLink(link)) return

    link.setAttribute("target", "ext")
    link.setAttribute("rel", "noopener")
})
