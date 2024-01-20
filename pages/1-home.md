---
title: Início
layout: 0-default
version: 24.1.11
---

<style>
#ff-se-btn *,
#ff-sa-btn *,
#ff-mo-btn * { 
    color: #aaa !important;
}  

.wrapper {border-left: 1px solid var(--border-color); border-right: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); background-color: #eeeeee10
}
.mySlides {display: none}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 90%;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: grey;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  margin-left: -35px;
}

/* Position the "next button" to the right */
.next {
  right: -35px;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(200,200,200.8);
  color: white;
}

/* Caption text */
.text {
  color: grey;
  font-size: 16px;
  padding: 20px 12px;
  position: absolute;
  bottom: -40px;
  width: 100%;
  margin-left: -12px;
  text-align: center;
  font-family: sans-serif;
}

/* Number text (1/3 etc) */
.numbertext {
  color: currentColor;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
  font-family: sans-serif;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 0.5s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}
</style>

*[LDE]: O Livro dos Espíritos
*[LDM]: O Livro dos Médiuns
*[ESE]: O Evangelho segundo o Espiritismo
*[CEU]: O Céu e o Inferno
*[GEN]: A Gênese
*[PDF]: Portable Document Format
*[ARC]: Almeida Revista e Corrigida
*[MD]: Markdown file

# <span class="emoji">🏠</span> Início

## Inspiração 

Com admiração em outras iniciativas de educação e comunicação digital, criamos esta alternativa que agrega ferramentas e fontes dispersas de modo a permitir aos usuários uma plataforma inédita de estudos integrados.

## Interface

Nosso <i>layout</i> é composto de três colunas, que são **seletivamente** mostradas de acordo com a largura do dispositivo em que é visualizada. Da esquerda para a direita, temos:

<table style="font-family: sans-serif; font-size: 14px; background-color: #eeeeee80">
  <tbody>
    <tr>
      <td>1. Menu</td>
      <td>2. Painel Principal</td>
      <td>3. Painel Complementar</td>
    </tr>
  </tbody>
</table>

<div class="wrapper">

<br>

<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 6</div>
  <img src="../assets/images/doutrina-column-demo-1.png" style="width:100%">
  <div class="text">Adaptação automática</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 6</div>
  <img src="../assets/images/doutrina-column-demo-2.png" style="width:100%">
  <div class="text">Desktop</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 6</div>
  <img src="../assets/images/doutrina-column-demo-3.png" style="width:100%">
  <div class="text">Notebook</div>
</div>

<div class="mySlides fade">
    <div class="numbertext">4 / 6</div>
    <img src="../assets/images/doutrina-column-demo-4.png" style="width:100%">
    <div class="text">Tablet</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">5 / 6</div>
    <img src="../assets/images/doutrina-column-demo-5.png" style="width:100%">
    <div class="text">Mobile (de pé)</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">6 / 6</div>
    <img src="../assets/images/doutrina-column-demo-6.png" style="width:100%">
    <div class="text">Mobile (deitado)</div>
  </div>

<a class="prev" onclick="plusSlides(-1)">❮</a>
<a class="next" onclick="plusSlides(1)">❯</a>

</div>
<br>

<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span>
  <span class="dot" onclick="currentSlide(4)"></span> 
  <span class="dot" onclick="currentSlide(5)"></span> 
  <span class="dot" onclick="currentSlide(6)"></span>
</div>
</div>


<!-- <iframe style="filter: none" src="https://docs.google.com/presentation/d/e/2PACX-1vRESbamVWKVF0_u4WuiG5c4dksBqoLB8F4JR7PYJbIKSZwUIgUilb5MtxrbbvdQpkNvtTEs_iQO0XMW/embed?start=true&loop=true&delayms=2000" frameborder="0" width="100%" height="40%%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe> -->

Consulte a página <kbd><a href="./2-info.html" style="text-decoration: none;"><span class="emoji">📋</span> Informações</a></kbd> para ficar a par dos padrões utilizados em nosso projeto.

## Modificações

Embora baseadas nas obras impressas, nossas versões foram modificadas para:

- realçar a origem mediúnica de mensagens
- realçar a concordância entre a Doutrina e a Bíblia
- facilitar o consumo digital (telas de tamanho variado)

Em suporte às nossas alterações, citamos aqui uma mensagem mediúnica, de vários Espíritos Superiores, extraída do Prefácio de O Livro dos Espíritos (grifo nosso).

<blockquote class="spirit" style="font-family: 'Roboto Serif', serif; padding: 10px 20px">
<span class="emoji">👻</span> … Mas todos os que tiverem em vista o grande princípio de Jesus se confundirão num só sentimento: o do amor do bem e <strong>se unirão por um laço fraterno</strong>, que prenderá o mundo inteiro. Estes <strong>deixarão de lado as miseráveis questões de palavras</strong>, para só se ocuparem com o que é essencial. <strong>E a Doutrina será sempre a mesma</strong> … </blockquote>

<!--
## Contato

Caso tenha alguma dúvida, entre em contato utilizando o botão do chat (canto inferior direito). 

<!--
<img src="./images/crisp-logo.svg" width="30" height="30" alt="botão do crisp chat" style="all: unset; height: 30px; vertical-align: text-bottom;">
-->

## Contato

Por fim, ficaríamos gratos com seus:

- comentários
- sugestões
- correções

Utilize a página <kbd><a href="./4-contact.html" style="text-decoration: none;"><span class="emoji">❤️</span> Contato</a></kbd> para tais fins.

---

Confiem em Deus e tenham um bom estudo!

Mai & Sergio
{:.cursive}

<img src="../assets/images/us-round.jpg" width="200" height="200" alt="foto do casal" style="all: unset; background-color: transparent;  margin-top: -30px; width: 200px; overflow:clip !important">

<p>&nbsp;</p>

<script>
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
</script>

