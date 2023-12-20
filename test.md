---
layout: 0-generic
version: 23.12.15
---

# Admonitions

[wikipedia short link](Deus){:.wik}

[wiktionary short link](Deus){:.dic}

[luz espírita short link](Deus){:.luz}

<a href="Deus">Deus</a>

> ✝️ ▸ Mensagem (*Jesus*) [Jesus](https://pt.m.wikipedia.org/wiki/Jesus)  (Bible)
{:.bible}

> ✝️ ▸ Mensagem (*Jesus*) [Deus](https://pt.m.wikipedia.org/wiki/Deus)  (Bible-Multi)
>
> Livro, cap. X, vers. Y, ARC
{:.bible-multi}

> 🏺 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
{:.greek}

> Grey blockquote - Lorem ipsum dolor sit amet, *consectetur* adipiscing elit, sed do reprehenderit in [voluptate](page.html) velit cupidatat non laborum.
{:.grey}

> 👻 ▸ Mensagem *Jesus* [link](link.html)  (Spirit)
{:.spirit}

> 👻 ▸ Mensagem *Jesus* [link](link.html) (Spirit-Multi)
>
> Espírito
{:.spirit-multi}

> 👻 Regular - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna dolor in.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.

<img src="./content/images/vine.png">

<script>
var links, i, le;
links = document.getElementsByClassName('wik');
for (i = 0, le = links.length; i < le; i++) {
    links[i].href = "https://pt.m.wikipedia.org/wiki" + (links[i].pathname);
}
</script>

<script>
var links, i, le;
links = document.getElementsByClassName('dic');
for (i = 0, le = links.length; i < le; i++) {
    links[i].href = "https://pt.m.wiktionary.org/wiki" + (links[i].pathname);
}
</script>

<script>
var links, i, le;
links = document.getElementsByClassName('luz');
for (i = 0, le = links.length; i < le; i++) {
    links[i].href = "https://www.luzespirita.org.br/index.php?lisPage=enciclopedia&item=" + (links[i].pathname.slice(1));
}
</script>

<script>
         const links = document.querySelectorAll(
         "a[href^='https://pt'], a[href^='https://www'")
     const host = window.location.hostname
 
     const isInternalLink = link => new URL(link).hostname === host
 
     links.forEach(link => {
         if (isInternalLink(link)) return
 
         link.setAttribute("target", "ext")
         link.setAttribute("rel", "noopener")
     })
 </script>
