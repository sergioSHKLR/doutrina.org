// VERSION 23.12.21

// EXT LINKS START

// SETS COL2 LINKS TO TARGET EXT --------------------------------
(function () {
  const links = document.querySelectorAll(
    "a[href^='https://pt'], a[href^='https://www'")
  const host = window.location.hostname

  const isInternalLink = link => new URL(link).hostname === host

  links.forEach(link => {
    if (isInternalLink(link)) return

    link.setAttribute("target", "ext")
    link.setAttribute("rel", "noopener")
  })
})()

// EXT LINKS END