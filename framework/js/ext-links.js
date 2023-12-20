window.onload = function() {
    /* onload code */
 
     const extLinks = document.querySelectorAll(
         "a[href^='https://pt'], a[href^='https://www'")
     const host = window.location.hostname
 
     const isInternalLink = link => new URL(link).hostname === host
 
     extLinks.forEach(link => {
         if (isInternalLink(link)) return
 
         link.setAttribute("target", "ext")
         link.setAttribute("rel", "noopener")
     })
 }