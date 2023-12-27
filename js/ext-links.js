// EXT LINKS START

window.onload = function () {
  /* onload code */

  var extLinks = document.querySelectorAll(
      "a[href^='https://pt'], a[href^='https://maps'], a[href^='https://www']");
  var host = window.location.hostname;

  var isInternalLink = link => new URL(link).hostname === host;

  extLinks.forEach(link => {
      if (isInternalLink(link)) return;

      link.setAttribute("target", "ext");
      link.setAttribute("rel", "noopener");
  });
};

// EXT LINKS END