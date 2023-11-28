
// SETS COL2 LINKS TO TARGET EXT --------------------------------
(function () {
<<<<<<< HEAD
  const links = document.querySelectorAll("a[href^='https://pt.m.wikipedia'], a[href^='https://pt.m.wiktionary'], a[href^='https://www.bible'], a[href^='https://www.youtube.com/embed', a[href^='https://www.luzespirita.org.br']]")
=======
  const links = document.querySelectorAll("a[href^='https://pt.m.wikipedia'], a[href^='https://pt.m.wiktionary'], a[href^='https://www.bible'], a[href^='https://www.youtube.com/embed'], a[href^='https://www.luzespirita.org.br']")
>>>>>>> d2b7b5a6f81554089b1a08ac4c7121d1c1129e29
  const host = window.location.hostname

  const isInternalLink = link => new URL(link).hostname === host

  links.forEach(link => {
    if (isInternalLink(link)) return

    link.setAttribute("target", "ext")
    link.setAttribute("rel", "noopener")
  })
})()