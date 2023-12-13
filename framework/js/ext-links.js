// SETS COL2 LINKS TO TARGET EXT --------------------------------
(function () {
  const links = document.querySelectorAll(
    "a[href^='https://pt']")
  const host = window.location.hostname

  const isInternalLink = link => new URL(link).hostname === host

  links.forEach(link => {
    if (isInternalLink(link)) return

    link.setAttribute("target", "ext")
    link.setAttribute("rel", "noopener")
  })
})()