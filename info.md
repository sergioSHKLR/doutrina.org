---
title: 📋 Informações
layout: 0-generic
version: 23.12.21
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

Nos inspiramos nos esforços de:

- [Portal Luz Espírita](https://www.luzespirita.org.br){:target="ext"}
- [Kardecpedia](https://kardecpedia.com/pt){:target="ext"}

Agregamos ferramentas externas de:

- [Hypothes.is](https://web.hypothes.is/everyone/){:target="ext"}
- [Whereby](https://whereby.com/){:target="ext"}

Mostramos conteúdo proveniente de:

- [Wikipedia](https://pt.m.wikipedia.org){:target="ext"}
- [Wikicionário](https://pt.m.wiktionary.org){:target="ext"}
- [Bible.com](https://www.bible.com/pt){:target="ext"}
- [A Igreja de Jesus Cristo dos Santos dos Últimos Dias](https://www.churchofjesuschrist.org/?lang=por){:target="ext"}
- [O Escolhido, Série](https://osescolhidos.tv/){:target="ext"}

Nosso projeto integra ferramentas geralmente achadas em eReaders (dicionário, tipo de letra, fundo de contraste, espaço entre-linhas, etc)

<p>Os botões no canto superior direito pertencem ao Anotador <a target="_blank" href="https://web-hypothes-is.translate.goog/everyone/?_x_tr_sl=es&_x_tr_tl=pt&_x_tr_hl=en&_x_tr_pto=wapp">Hypothes.is</a> e servem para:</p>

<table class="border p-10 fs-3 ff-slab col2-w ml-10">
<tr class="bg-lg"><th style="width: 20%">Ícone</th><th>Ação</th></tr>
<tr><td class="center"><img src="./framework/hypo-a.svg" style="all: unset; height: 45px; vertical-align: middle; padding: 5px"></td><td>Mostrar/esconder barra de anotações</td></tr>
<tr><td class="center"><img src="./framework/hypo-b.svg" style="all: unset; width: 30px; vertical-align: middle; padding: 5px"></td><td>Mostras/esconder anotações (grifados em amarelo)</td></tr>
<tr><td class="center"><img src="./framework/hypo-c.svg" style="all: unset; width: 30px; vertical-align: middle; padding: 5px"></td><td>Criar nova anotação de página</td></tr>
</table>

## Método

Em primeiro lugar, teríamos que estabelecer padrões de divisão, hierarquia, e formatação de texto que mantivessem a fidelidade ao original, não em forma, mas em conteúdo.

Analisando a divisão dos livro em partes, decidimos por nomear as seções anteriores ao conteúdo principal de Pré-textual. Similarmente, nomeamos as seções posteriores ao conteúdo principal de Pós-textual. Partes Pré-textuais são numeradas 0 (zero) e as Pós-textuais assumem o número posterior ao último capítulo original.

Modificações feitas são uma escolha racional e visam atender ao padrão de formatação melhor disposto ao consumo digital.

### Livros

Individualmente, iremos identificar os livros pelos emojis e/ou siglas abaixo.

<table class="ff-slab fs-3 border">
 <thead class="bg-lg">
 <tr>
 <th style="width: 20%">Emoji</th>
 <th style="width: 30%">Sigla</th>
 <th>Livro</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td class="center">👻<br>(fantasma)</td>
 <td class="center">LDE</td>
 <td>O Livro dos Espíritos</td>
 </tr>
 <tr>
 <td class="center"><span style="transform: scaleX(-1);">✒️</span><br>(ponta de caneta tinteiro)</td>
 <td class="center">LDM</td>
 <td>O Livro dos Médiuns</td>
 </tr>
 <tr>
 <td class="center">🕊️<br>(pomba branca)</td>
 <td class="center">ESE</td>
 <td>O Evangelho segundo o Espiritismo</td>
 </tr>
 <tr>
 <td class="center">🔥<br>(fogo)</td>
 <td class="center">CEU</td>
 <td>O Céu e o Inferno</td>
 </tr>
 <tr>
 <td class="center">🌱<br>(muda de planta)</td>
 <td class="center">GEN</td>
 <td>A Gênese</td>
 </tr>
 </tbody>
</table>

### Hierarquia

Dentro deste livro, usaremos os emojis abaixo para identificar elementos individuais ou grupamentos dos mesmos. Note também o correspondente código mestre.

<pre class="fs-3 col2-w bg-lg">
❓ livro (👻, ✒️, 🕊️, 🔥 ou 🌱)
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

<pre class="fs-3 col2-w bg-lg">
LIV-X-XX-XX
 |  |  |  |
 |  |  |  └── 📃 seção
 |  |  | 
 |  |  └── 📑 capítulo
 |  |
 |  └── 🗂️ parte
 |
 └── 📔 livro (LDE, LDM, ESE, CEU ou GEN)
</pre>

E em especial no LDE, o código para questões é modificado da sequência lógica de LDE-X-XX-XX-XXXX para:

<pre class="fs-3 col2-w bg-lg">
LIV-qXXXXa
 |  |    |
 |  |    └── sub-questão
 |  |
 |  └── questão
 |
 └── livro (LDE, LDM, ESE, CEU ou GEN)
</pre>

Como ilustrado acima, usamos três letras para o livro, um dígito para partes, e dois dígitos para capítulos e itens. Em especial, no LDE, usamos a letra <kbd>q</kbd>, de um a quatro dígitos, e uma letra minúscula para sub-questões de modo a designar uma pergunta específica (ex. `LDE-q909a`). Nos outros livros, usamos a letra <kbd>p</kbd>, de um a quatro dígitos, para identificar parágrafos numericamente.

Em suma, temos esta tabela descritiva abaixo:

<table class="ff-slab fs-3 border">
 <thead class="bg-lg">
 <tr>
 <th style="width: 20%">Emoji</th>
 <th style="width: 30%">Descrição</th>
 <th>Código chave</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td class="center">📔</td>
 <td class="center">livro</td>
 <td class="center">LIV</td>
 </tr>
 <tr>
 <td class="center">🗂️</td>
 <td class="center">parte</td>
 <td class="center">LIV-X</td>
 </tr>
 <tr>
 <td class="center">📑</td>
 <td class="center">capítulo</td>
 <td class="center">LIV-X-XX</td>
 </tr>
 <tr>
 <td class="center">📃</td>
 <td class="center">seção</td>
 <td class="center">LIV-X-XX-XX</td>
 </tr>
 <tr>
 <td class="center">#️⃣</td>
 <td class="center">questão</td>
 <td class="center">LIV-(q)(p)X</td>
 </tr>
 </tbody>
</table>

Aonde LIV é substituído por LDE, LDM, ESE, CEU ou GEN.

**Adicionais**

<table class="ff-slab fs-3 border">
 <thead class="bg-lg">
 <tr>
 <th style="width: 20%">Emoji</th>
 <th style="width: 30%">Descrição</th>
 <th>Conteúdo</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td class="center">👉</td>
 <td class="center">segmento relacionado</td>
 <td class="center">indicação para leitura complementar</td>
 </tr>
 </tbody>
</table>

Usaremos o _blockquote_ para identificar visualmente as comunicações mediúnicas. Destacaremos trechos bíblicos usando o mesmo método e atribuindo o livro, capítulo, e versículo, assim realçando a concordância entre as duas obras.

De modo a realçar certos trechos, usaremos o seguinte formato para as mensagens de origem mediúnica

> 👻 ▸ Mensagem
>
> Espírito
{:.spirit-multi}

e este outro formato para mensagesn bíblicas

> ✝️ ▸ Mensagem (*Jesus*)
>
> Livro, cap. X, vers. Y, ARC
{:.bible-multi}

Nas passagens acima, trechos atribuídos à Jesus serão indicados por letras avermelhadas.

<!--
| 🗃️ | Índice Geral | coleção de 🏷️ _tags_ |
| 🏷️ | _tag_ | agrupa #️⃣ questões e/ou 📃 seções por assunto |
| ⚜️ | fim | término de um elemento | 
-->

## Tipografia

Decidimos utilizar um tipo *serif* moderno, mais apropriado para o consumo digital e formatar todo o texto em estilo normal com as seguinte exceções: comunicações mediúnicas e trechos bíblicos serão em *itálico* e trechos originalmente realçados em _itálico_ serão mudados para **negrito**.

Adicionalmente, numerais romanos foram substituídos por seus equivalentes arábicos (exceção para títulos, tais como São Luís, IX da França, e séculos).
 
Ao invés do tradicional livro, exclusivamente em preto e branco, utilizaremos de emojis, painéis coloridos, e ilustrações.

---

## Etapas de desenvolvimento

| --- | --- |
| Fase | Estado |
| Estabelecer um padrão hierárquico, de diagramação, e de tipografia que permita seu uso através dos cinco livros distintos | 🟢 |
| Copiar e colar cada parágrafo da obra original, utilizando-se do PDF livremente disponível no site da FEB (veja [Avisos legais](./legal.md)) | 🟢 |
| Criar um repositório de nosso código fonte para acesso de programadores afins | 🟢 |
| Verificar que cada termo grifado em itálico no original está também grifado em nosso projeto | 🟡 |
| Substituir numerais romanos por seus equivalentes | 🟡 |
| Substituir Bíblia de Sacy por Almeida Revista e Corrigida | 🟡 |
| Assinalar cada comunicação mediúnica com o padrão determinado em fase anterior | 🟡 |
| Assinalar cada trecho bíblico com o padrão determinado em fase anterior, adicionar livro, capítulo, versículos e versão | 🟡 |
| Adicionar links de artigos, definicões, mapas, vídeos e etc | 🟡 |
| Estabelecer links entre partes do mesmo livro e entre livros | 🟡 |
| Digitalizar o indíce geral de cada livro e estabelecer links | 🟡 |
| Implementar uma licensa que permita a utilização, modificação, e tradução de nosso projeto para o mesmo sirva outras obras originais, em línguas diversas | 🟡 |
| Criar um indíce combinado de todos os cinco livros | 🔴 |

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>