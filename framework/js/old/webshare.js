// VERSION 23.12.22

// WEBSHARE START

const shareData = {
    title: "<span class="emoji">💧</span> doutrina.org",
    text: "<span class="emoji">❤️</span> Amai-vos e 🎓 instruí-vos!",
    url: "https://doutrina.org",
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

// WEBSHARE END