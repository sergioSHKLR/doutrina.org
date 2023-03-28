let shareData = {
  title: 'Amai-vos e instruí-vos',
  text: 'Repositório de Estudos Integrados',
  url: 'https://doutrina.org',
}

const btn = document.querySelector('input');
const resultPara = document.querySelector('.result');

btn.addEventListener('click', () => {
  navigator.share(shareData)
    .then(() =>
      resultPara.textContent = 'Compartilhado com sucesso!'
    )
    .catch((e) =>
      resultPara.textContent = 'Erro! Tente mais tarde.'
    )
});