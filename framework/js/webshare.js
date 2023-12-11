const shareData = {
    title: "💧doutrina.org",
    text: "💧 doutrina.org | 📝 Venha estudar ativamente! | 🌐 ",
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