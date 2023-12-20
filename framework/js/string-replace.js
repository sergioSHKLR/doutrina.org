var links, i, le;
links = document.getElementsByClassName('wik');
for (i = 0, le = links.length; i < le; i++) {
    links[i].href = "https://pt.m.wikipedia.org/wiki" + (links[i].pathname);
}

var links, i, le;
links = document.getElementsByClassName('dic');
for (i = 0, le = links.length; i < le; i++) {
    links[i].href = "https://pt.m.wiktionary.org/wiki" + (links[i].pathname);
}

var links, i, le;
links = document.getElementsByClassName('luz');
for (i = 0, le = links.length; i < le; i++) {
    links[i].href = "https://www.luzespirita.org.br/index.php?lisPage=enciclopedia&item=" + (links[i].pathname.slice(1));
}

         const links = document.querySelectorAll(
         "a[href^='https://pt'], a[href^='https://www'")
     const host = window.location.hostname
 
     const isInternalLink = link => new URL(link).hostname === host
 
     links.forEach(link => {
         if (isInternalLink(link)) return
 
         link.setAttribute("target", "ext")
         link.setAttribute("rel", "noopener")
     })
