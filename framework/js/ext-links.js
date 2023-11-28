
// SETS COL2 LINKS TO TARGET EXT --------------------------------
(function () {
  const links = document.querySelectorAll("a[href^='https://pt.m.wikipedia'], a[href^='https://pt.m.wiktionary'], a[href^='https://www.bible'], a[href^='https://www.youtube.com/embed'], a[href^='https://www.luzespirita.org.br']")
  const host = window.location.hostname

  const isInternalLink = link => new URL(link).hostname === host

  links.forEach(link => {
    if (isInternalLink(link)) return

    link.setAttribute("target", "ext")
    link.setAttribute("rel", "noopener")
  })
})()