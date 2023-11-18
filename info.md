---
title: 📋 Informações
layout: template-generic
---

# 📋 Informações

*[LDE]: O Livro dos Espíritos
*[LDM]: O Livro dos Médiuns
*[ESE]: O Evangelho segundo o Espiritismo
*[CEU]: O Céu e o Inferno
*[GEN]: A Gênese
*[PDF]: Portable Document Format
*[MD]: Markdown file
*[LIV]: Abreviatura de livro

**Pré-release Alpha <kbd>11.23</kbd>. Em desenvolvimento diário. Atualização mais recente em 14 Nov 2023.**

Inspirado em outras iniciativas de ensino digital, tais como [Kardecpedia](https://kardecpedia.com/pt){:target="ext"} e [Portal Luz Espírita](https://www.luzespirita.org.br/){:target="ext"}, decidimos criar esta alternativa.

Aqui permitiremos ao estudante a consulta direta de fontes complementares sem que seu foco se perca se fosse forçado a navegar em janelas externas. 

Para tal fim desenvolvemos uma interface inédita em três colunas, que se ajustam automaticamente de acordo com a largura do dispositivo em que é visualizado. Assim sendo, em telas largas você verá as 3 colunas, em telas médias, 2 colunas (1 escondida) e em telas pequenas, somente 1 coluna (2 escondidas).

Abaixo você verá uma representação de acordo a sua tela. Caso esteja usando um tablet ou celular, você pode mudar a orientação (de pé para deitado) para obter uma largura maior.

<iframe id="screenshot1" src="./iframe_content/desktop.html" style="width: 100%; border: none; height: 400px; overflow: hidden; "></iframe>

<iframe id="screenshot2" src="./iframe_content/tablet.html" style="width: 100%; border: none; height: 400px; overflow: hidden; "></iframe>

<iframe id="screenshot3" src="./iframe_content/celular.html" style="width: 100%; border: none; height: 400px; overflow: hidden; "></iframe>

Os botões ao topo da página servem aos seguintes propósitos:

<div style="padding: 10px; border: 1px solid gainsboro;  background-color: rgba(238, 238, 238, .25);
">
<p class="hidebtn2"><span class="material-symbols-outlined" style="font-size: 18px; vertical-align: bottom;">menu</span>&nbsp;-&nbsp;Mostrar/esconder Coluna 1</p>
<p class="hidebtn"><span class="material-symbols-outlined" style="font-size: 18px; vertical-align: bottom;">language</span>&nbsp;-&nbsp;Abrir página do Wikipédia</p>
<p class="hidebtn"><span class="material-symbols-outlined" style="font-size: 18px; vertical-align: bottom;">book_2</span>&nbsp;-&nbsp;Abrir página do Wikicionário</p>
<p class="hidebtn"><span class="material-symbols-outlined" style="font-size: 18px; vertical-align: bottom;">video_call</span>&nbsp;-&nbsp;Iniciar vídeo reunião (estudos em grupo)</p>
<p class="hidebtn"><span class="material-symbols-outlined" style="font-size: 18px; vertical-align: bottom;">visibility_off</span> | <span class="material-symbols-outlined" style="font-size: 18px; vertical-align: bottom;">visibility</span>&nbsp;-&nbsp;Ativar ou desativar cortina anti-distração</p>
<p><span class="material-symbols-outlined" style="font-size: 18px; vertical-align: bottom;">dark_mode</span> | <span class="material-symbols-outlined" style="font-size: 18px; vertical-align: bottom;">light_mode</span>&nbsp;-&nbsp;Alternar entre modo escuro e modo claro</p>
<p><span class="material-symbols-outlined" style="font-size: 18px; vertical-align: bottom;">fullscreen</span> | <span class="material-symbols-outlined" style="font-size: 18px; vertical-align: bottom;">fullscreen_exit</span>&nbsp;-&nbsp;Alternar entre tela cheia e tela normal</p></div>

<p>Os botões no canto superior direito pertencem ao Anotador <a target="_blank" href="https://web-hypothes-is.translate.goog/everyone/?_x_tr_sl=es&_x_tr_tl=pt&_x_tr_hl=en&_x_tr_pto=wapp">Hypothes.is</a> e servem para:</p>

<div style="padding: 10px; border: 1px solid gainsboro;  background-color: rgba(238, 238, 238, .25);
">
<p><img src="./framework/hypo-a.svg" style="all: unset; width: 35px; vertical-align: middle"> - Mostrar/esconder barra de anotações</p>
<p><img src="./framework/hypo-b.svg" style="all: unset; width: 30px; vertical-align: middle"> - Mostras/esconder anotações (grifados em amarelo)</p>
<p><img src="./framework/hypo-c.svg" style="all: unset; width: 30px; vertical-align: middle"> - Criar nova anotação de página</p>
</div>


## Método

Em primeiro lugar, teríamos que estabelecer padrões de divisão, hierarquia, e formatação de texto que mantivessem a fidelidade ao original, não em forma, mas em conteúdo.

Analisando a divisão dos livro em partes, decidimos por nomear as seções anteriores ao conteúdo principal de Pré-textual. Similarmente, nomeamos as seções posteriores ao conteúdo principal de Pós-textual. Partes Pré-textuais são numeradas 0 (zero) e as Pós-textuais assumem o número posterior ao último capítulo original.

## Padrões

### Livros

Individualmente, iremos identificar os livros pelos emojis e/ou siglas abaixo.

| **Emoji** | **Sigla** | **Livro** |
| :--- | :--- | :--- |
| 👻 (fantasma) | `LDE` | O Livro dos Espíritos |
| ✒️ (caneta tinteiro) | `LDM` | O Livro dos Médiuns |
| 🕊️ (pomba branca) | `ESE` | O Evangelho segundo o Espiritismo |
| 🔥 (fogo) | `CEU` | O Céu e o Inferno |
| 🌱 (muda de planta) | `GEN` | A Gênese |
{:.grid}

### Hierarquia

Dentro deste livro, usaremos os emojis abaixo para identificar elementos individuais ou grupamentos dos mesmos. Note também o correspondente código mestre.

<pre>
❓ livro (podendo ser 👻, ✒️, 🕊️, 🔥 ou 🌱)
 |
 └── 🗂️ parte
      |
      └── 📑 capítulo
           |
           └── 📃 seção
                |     
                └── #️⃣ questão
</pre>

Para facilitar a organização hierárquica, localização, correlação de items, e brevidade, um código chave foi criado. Este código alfanúmerico é demonstrado abaixo.

### Código chave

<pre>
LIV-X-XX-XX
 |  |  |  |
 |  |  |  └── 📃 seção
 |  |  | 
 |  |  └── 📑 capítulo
 |  |
 |  └── 🗂️ parte
 |
 └── 📔 livro (podendo ser LDE, LDM, ESE, CEU ou GEN)
</pre>

E em especial no LDE, o código para questões é modificado da sequência lógica de `LDE-X-XX-XX-XXXX` para:

<pre>
LIV-qXXXXa
 |   |   |
 |   |   └── sub-questão
 |   |
 |   └── questão
 |
 └── livro (podendo ser LDE, LDM, ESE, CEU ou GEN)
</pre>

Como ilustrado acima, usamos três letras para o livro, um dígito para partes, e dois dígitos para capítulos e itens. Em especial, no LDE, usamos a letra `q`, de um a quatro dígitos, e uma letra minúscula para sub-questões de modo a designar uma pergunta específica (ex. `LDE-q909a`). Nos outros livros, usamos a letra `p`, de um a quatro dígitos, para identificar parágrafos numericamente.

Em suma, temos esta tabela descritiva abaixo:

| **Emoji** | **Descrição** | **Código chave** |
| :--- | :--- | :--- | :--- |
| 📔 | livro | `LIV` |
| 🗂️ | parte | `LIV-X` |
| 📑 | capítulo | `LIV-X-XX` |
| 📃 | seção | `LIV-X-XX-XX` |
| #️⃣ | questão | `LIV.(q)(p)X` |

Aonde LIV é substituído por LDE, LDM, ESE, CEU ou GEN.

**Adicionais**

| **Emoji** | **Descrição** | **Conteúdo** |
| :--- | :--- | :--- |
| 👉 | segmento relacionado | indicação para leitura complementar |

Usaremos o _blockquote_ para identificar visualmente as comunicações mediúnicas. Destacaremos trechos bíblicos usando o mesmo método e atribuindo o livro, capítulo, e versículo, assim realçando a concordância entre as duas obras.

De modo a realçar certos trechos, usaremos o seguinte formato para as mensagens de origem mediúnica

> 👻 ▸ Mensagem
>
> Espírito
{:.spirit}

e este outro formato para mensagesn bíblicas

> ✝️ ▸ Mensagem (*Jesus*)
>
> Livro, cap. X, vers. Y, ARC
{:.bible}

Nas passagens acima, trechos atribuídos à Jesus serão indicados por letras avermelhadas.

<!--
| 🗃️ | Índice Geral | coleção de 🏷️ _tags_ |
| 🏷️ | _tag_ | agrupa #️⃣ questões e/ou 📃 seções por assunto |
| ⚜️ | fim | término de um elemento | 
-->

## Padrões estabelecidos

Decidimos utilizar um tipo *serif* moderno, mais apropriado para o consumo digital e formatar todo o texto em estilo normal com as seguinte exceções: comunicações mediúnicas e trechos bíblicos serão em *itálico* e trechos originalmente realçados em _itálico_ serão mudados para **negrito**.

Adicionalmente, numerais romanos foram substituídos por seus equivalentes arábicos (exceção para títulos, tais como São Luís, IX da França, e séculos).
  
Ao invés do tradicional livro, exclusivamente em preto e branco, utilizaremos de emojis, painéis coloridos, e ilustrações.

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>