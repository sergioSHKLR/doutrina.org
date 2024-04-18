---
title: Manual
layout: 0-default
version: 24.2.11
---

<style>
  .spirit-multi,
  .bible-multi,
  .grey-multi {
    font-family: 'Roboto Serif', serif;
  }

  td,
  pre {
    font-family: 'Roboto Mono', monospace;
  }
</style>

<!--
<p style="
 background-color: var(--body-bground);
 position: sticky;
 top: 0px;
 color: var(--body-color);
 border-bottom: 1px solid var(--border-color)">
  <span class="emoji">🚧</span> Página em desenvolvimento <span class="emoji">🚧</span>
</p> {:.banner} -->

# <span class="emoji">📋</span> Manual  

*[LDE]: O Livro dos Espíritos
*[LDM]: O Livro dos Médiuns
*[ESE]: O Evangelho segundo o Espiritismo
*[CEU]: O Céu e o Inferno
*[GEN]: A Gênese
*[PDF]: Portable Document Format
*[MD]: Markdown file
*[LIV]: Abreviatura de livro

## Descrição  

Nosso projeto visa suprir os usuários interessados no estudo ativo da Doutrina Espírita, integrando as obras orginais numa plataforma que integra várias ferramentas, previamente dispersas. Nossos cuidados principais são:

- manter a fidelidade ao conteúdo, ajustando o formato
- ampliar o alcance da obra original com links
- facilitar seu consumo em telas diversas
- criar uma interface livre de elementos gráficos desnecessários ou distrações

Embora o uso ideal de nossa plataforma seja através de um computador com teclado (desktop, laptop ou certos tablets), a mesma se adapta automaticamente para telas mais estreitas (tablets e celulares). A sessão de estudo pode ser invididual ou coletiva, lembrando que a ferramenta de anotações Hypothes.is permite a seleção de compartilhamento (privada, pública, ou de grupo).

## Interface

Nossa plataforma se distingue pela interface em colunas. Essas permitem ao usuário navegar o conteúdo principal usando os links do sumário e visualizar mídia complementar sem sair da tela principal, prevenindo distrações e perda de concentração. Igualmente importante é a coluna de anotações, que facilita o estudo ativo, no qual grifos são feitos e notas são tomadas. Veja mais abaixo sobre como utilizar esta ferramenta incrível.

### Colunas

Da esquerda para a direita (dependendo da largura da sua tela), temos:

1. Menu - sumário da página principal e links para outras páginas
2. Principal - conteúdo da obra original, com links para mídia complementar
3. Complementar - mídia complementar, links da coluna Principal abrem aqui
4. Anotações - grifos e notas relacionadas à coluna Principal (requere conta)

#### Adaptável

Nossa plataforma utiliza de regras automáticas que determinam quais colunas serão mostradas. Assim sendo, temos em telas:

- extra largas, tipo desktop: 4 colunas
- largas, tipo notebook: 3 colunas
- médias, tipo tablet: 2 colunas
- pequenas, tipo celular: 1 colunas

Volte à pagina inicial para ver uma representação gráfica deste arranjo.

### Ajustes tipográficos

Tomando por exemplo os aplicativos de leitura digital (eBook reader), como Kindle e similares, visamos por recriar as seguintes ferramentas:

- consulta à dicionário
- consulta à enciclopédia
- grifos, marcações e notas
- ajustes tipográficos (letra, linhas, parágrafo, fundo, etc)

## Livros

Decidimos por utilizar os cinco livros das [Obras Básicas](Obras%20Básicas%20do%20Espiritismo){:.l}, sendo especificamente os da Editora FEB, pela sua maior disseminação, tanto nas sociedades Espíritas, como por sua livre disponibilidade online. Consulte a página <kbd><a href="../pages/3-legal.html" style="text-decoration: none;"><span class="emoji">⚖️</span> Avisos Legais</a></kbd> para detalhes acerca de direitos autorais e uso justo.

### Método  

Em primeiro lugar, estabelecemos padrões de divisão, hierarquia, e formatação de texto que mantivessem a fidelidade ao original, não em formato, mas em espírito. Todas as modificações são produto de uma escolha racional e visam atender ao padrão de formatação melhor disposto ao consumo digital.

### Elementos  

Analisando a divisão dos livro em partes, decidimos por nomear as seções anteriores ao conteúdo principal como **Pré-textual**. Similarmente, nomeamos as seções posteriores ao conteúdo principal de **Pós-textual**. Partes Pré-textuais são numeradas 0 (zero) e as Pós-textuais assumem o número posterior ao último capítulo original.

### Obras  

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
 <td class="center"><span style="transform: scaleX(-1);"><span class="emoji">✒️</span><br>(ponta de caneta tinteiro)</span></td>
 <td class="center">LDM</td>
 <td>O Livro dos Médiuns</td>
 </tr>
 <tr>
 <td class="center"><span class="emoji">🕊️</span><br>(pomba branca)</td>
 <td class="center">ESE</td>
 <td>O Evangelho segundo o Espiritismo</td>
 </tr>
 <tr>
 <td class="center"><span class="emoji">🔥</span><br>(fogo)</td>
 <td class="center">CEU</td>
 <td>O Céu e o Inferno</td>
 </tr>
 <tr>
 <td class="center"><span class="emoji">🌱</span><br>(muda de planta)</td>
 <td class="center">GEN</td>
 <td>A Gênese</td>
 </tr>
 </tbody>
</table>

### Hierarquia  

Dentro de cada livro, usaremos os emojis abaixo para identificar elementos individuais ou grupamentos dos mesmos.  

<pre class="fs-3 col2-w bg-lg">
❓ livro (👻, <span class="emoji">✒️</span>, <span class="emoji">🕊️</span>, <span class="emoji">🔥</span> ou <span class="emoji">🌱</span>)
 |
 └── 🗂️ parte
      |
      └── 📑 capítulo
           |
           └── 📃 seção
                | 
                └── #️⃣ questão
</pre>

| <span class="emoji">🗃️</span> | Índice Geral | coleção de <span class="emoji">🏷️</span> _tags_ |
| <span class="emoji">🏷️</span> | _tag_ | agrupa <span class="emoji">#️⃣</span> questões e/ou <span class="emoji">📃</span> seções por assunto |
| <span class="emoji">⚜️</span> | fim | término de um elemento | 

<!-- 

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

Aonde LIV é substituído por LDE, LDM, ESE, CEU ou GEN. --> 

### Cores de realce

Usaremos o _blockquote_ para realçar as comunicações mediúnicas. Destacaremos trechos bíblicos usando o mesmo método e atribuindo o livro, capítulo, e versículo, assim realçando a concordância entre o Espiritismo e a Bíblia Judaica-Cristã.  

O seguinte formato será utilizado para as mensagens de origem mediúnica  

> 👻 ▸ Mensagem
>
> Espírito
{:.spirit-multi}

e este outro formato para mensagens bíblicas. Nestas, palavras de Jesus, quando presentes, estarão na cor vermelha.

> ✝️ ▸ Mensagem (*Jesus*)
>
> Livro, cap. X, vers. Y, ARC
{:.bible-multi}

Por fim, temos o seguinte formato para passagens de Kardec.

> 👴🏻 ▸ Mensagem
>
> Allan Kardec
{:.grey-multi}

### Tipografia  

Decidimos utilizar um tipo *serif* moderno, mais apropriado para o consumo digital e formatar todo o texto em estilo normal com as seguinte exceções: comunicações mediúnicas e trechos bíblicos serão em *itálico* e trechos originalmente realçados em _itálico_ serão mudados para **negrito**.  

Adicionalmente, numerais romanos foram substituídos por seus equivalentes arábicos (exceção para títulos, tais como São Luís, IX da França, e séculos).  
 
Ao invés do tradicional livro, exclusivamente em preto e branco, utilizaremos de emojis, painéis coloridos, e ilustrações.  

### Adicionais  

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

<details class="links"><summary>🔗</summary><br>
🏷️ Alma, conceito espírita de  <a href="#alma">↩️</a><br>
🏷️ Alma, conceitos de  <a href="#alma">↩️</a>
</details>

Nota de rodapé [^1]

[^1]: Texto da nota de rodapé. Clique na seta para voltar ao local original da nota.

## Ferramentas  

### Anotador  

<p>Os botões no canto superior direito pertencem à ferramenta <a target="_blank" href="https://web-hypothes-is.translate.goog/everyone/?_x_tr_sl=es&_x_tr_tl=pt&_x_tr_hl=en&_x_tr_pto=wapp">Hypothes.is</a> e realizam as seguintes funções:</p>

<table class="border p-10 fs-3 ff-slab col2-w ml-10">
<tr class="bg-lg"><th style="width: 20%">Ícone</th><th>Ação</th></tr>
<tr><td class="center"><img src="../assets/images//hypo-a.svg" style="all: unset; height: 45px; vertical-align: middle; padding: 5px"></td><td>Mostrar/esconder barra de anotações</td></tr>
<tr><td class="center"><img src="../assets/images//hypo-b.svg" style="all: unset; width: 30px; vertical-align: middle; padding: 5px"></td><td>Mostras/esconder anotações (grifados em amarelo)</td></tr>
<tr><td class="center"><img src="../assets/images//hypo-c.svg" style="all: unset; width: 30px; vertical-align: middle; padding: 5px"></td><td>Criar nova anotação de página</td></tr>
</table>

### Ajustes  

Para realizar ajustes tipográficos (letras, linhas, parágrafos, cor de fundo, e links) clique no botão <kbd>Aa</kbd> e escolha dentre as opções abaixo. Suas preferências ficam gravadas e valem para as outras páginas deste site. Para reverter, clique no botão em vermelho e refresque a página.

<table>
<tr><th style="width: 20%">Ícone</th><th>Ação</th></tr>
<tr><td class="center"><span class="icon tools-120">text_increase</span></td><td>Letras maiores</td></tr>
<tr><td class="center"><span class="icon tools-120">text_decrease</span></td><td>Letras menores</td></tr>
<tr><td class="center"><span class="icon tools-120">format_align_justify</span></td><td>Parágrafo justificado</td></tr>
<tr><td class="center"><span class="icon" style="font-size: 100%; font-family: 'Georgia', serif">Se</span></td><td>Tipo serifa</td></tr>
<tr><td class="center"><span class="icon" style="font-size: 100%; font-family: 'Inter', serif">Sa</span></td><td>Tipo sem-serifa</td></tr>
<tr><td class="center"><span class="icon" style="font-size: 100%; font-family: 'Roboto Slab', serif">Mo</span></td><td>Tipo mono-espaço</td></tr>
<tr><td class="center"><span class="icon tools-120">density_small</span></td><td>Entrelinhas estreitas</td></tr>
<tr><td class="center"><span class="icon tools-120">density_large</span></td><td>Entrelinhas largas</td></tr>
<tr><td class="center"><span class="icon tools-100 tools-round" style="background-color: #fffce4;">&nbsp;</span></td><td>Fundo amarelo</td></tr>
<tr><td class="center"><span class="icon tools-100 tools-round" style="background-color: #e8fce4;">&nbsp;</span></td><td>Fundo verde</td></tr>
<tr><td class="center"><span class="icon tools-100 tools-round" style="background-color: #fff4fc;">&nbsp;</span></td><td>Fundo rosa</td></tr>
<!-- <tr><td class="center"><span class="icon" style="color: royalblue;">link_off</span></td><td>Esconder links</td></tr> -->
<tr><td class="center"><span class="icon" style="font-size: 120%; color: red">restart_alt</span></td><td>Reverter tudo</td></tr>
 </table>  

<!--

## Planejamento

Nos inspiramos nos esforços de:

- [Portal Luz Espírita](https://www.luzespirita.org.br){:target="ext"}
- [Kardecpedia](https://kardecpedia.com/pt){:target="ext"}

Agregamos ferramentas externas de:

- [Hypothes.is](https://web.hypothes.is/everyone/){:target="ext"}
- [Whereby](https://whereby.com/){:target="ext"}

Mostramos conteúdo proveniente de:

- [Wikipédia](https://pt.m.wikipedia.org){:target="ext"}
- [Wikicionário](https://pt.m.wiktionary.org){:target="ext"}
- [Bible.com](https://www.bible.com/pt){:target="ext"}
- [A Igreja de Jesus Cristo dos Santos dos Últimos Dias](https://www.churchofjesuschrist.org/?lang=por){:target="ext"}
- [O Escolhido, Série](https://osescolhidos.tv/){:target="ext"}


|  | Livro impresso | PDF no seu PC | PDF online | eBook (Kindle, etc) | Livro online | doutrina.org
|--|--|--|--|--|--|--|
| Cópia física | 🟢 | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 |
| Marcações | 🔴 | 🟢 | 🟢 | 🟢 | 🔴 | 🟢 |  
| Grifos | 🔴 | 🟢 | 🟢 | 🟢 | 🔴 | 🟢 |  |
| Comentários | 🔴 | 🟢 | 🟢 | 🔴 | 🔴 | 🟢 |  |
| Discussões | 🔴 | 🔴 | 🟢 | 🟢 | 🔴 | 🟢 |  |
| Sincronização | 🔴 | 🔴 | 🟢 | 🟢 | 🔴 | 🟢 |  |
| Consulta enciclopédia | 🔴 | 🔴 | 🟢 | 🟢 | 🔴 | 🟢 |  |
| Consulta dicionário | 🔴 | 🔴 | 🟢 | 🟢 | 🔴 | 🟢 |  |
| Ajustes de texto | 🔴 | 🔴 | 🟢 | 🟢 | 🟢 | 🟢 |  |
| Compartilhamento | 🔴 | 🔴 | 🟢 | 🟢 | 🟢 | 🟢 |  |
| Cores | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 | 🟢 |  |
| Ilustrações | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 | 🟢 |  |
| Artigos | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 | 🟢 |  |
| Vídeos | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 | 🟢 |  |
| Mapas | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 | 🟢 |  |
| Consulta bíblia | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 | 🟢 |  |
| Modo escuro | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 |🟢  |  |
| Interface única | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 | 🟢 |  |

-->

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

<script type="application/json" class="js-hypothesis-config">
{
"openSidebar": true
}
</script>