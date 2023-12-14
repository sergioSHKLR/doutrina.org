---
layout: 0-generic
version: 23.14
---

<style>

blockquote a {color: inherit !important}

blockquote a:hover {color: unset !important}
    </style>

<script>
const shareData = {
    title: "💧 doutrina.org",
    text: "Venha estudar ativamente!",
    url: "https://pt.doutrina.org",
  };
  
  const btn = document.querySelector("#webshare");
  const resultPara = document.querySelector(".result");
  
  // Share must be triggered by "user activation"
  btn.addEventListener("click", async () => {
    try {
      await navigator.share(shareData);
      resultPara.textContent = "Compartilhado com sucesso!";
    } catch (err) {
      resultPara.textContent = `Erro ao compartilhar`;
    }
  });
</script>

<button id="webshare">share</button>

<button id="install">Install</button>

<script>
    // main.js

installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}
</script>

> 👻 ▸ Mensagem *Jesus* [link](link.html)  (Spirit)
{:.spirit}

> 👻 ▸ Mensagem *Jesus* [link](link.html) (Spirit-Multi)
>
> Espírito
{:.spirit-multi}

> ✝️ ▸ Mensagem (*Jesus*) [link](link.html)  (Bible)
{:.bible}

> ✝️ ▸ Mensagem (*Jesus*) [link](link.html)  (Bible-Multi)
>
> Livro, cap. X, vers. Y, ARC
{:.bible-multi}

> Regular blockquote
>
> Lorem ipsum dolor sit amet, *consectetur* adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in [voluptate](page.html) velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{:.grey}

> Grey center
>
> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{:.grey-center}

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<img src="./content/images/vine.png">




