---
title: Informações
layout: 0-default
version: 24.1.27
---

<style>
     .spirit-multi, .bible-multi, .grey-multi {font-family: 'Roboto Serif', serif; }
     td, pre {font-family: 'Roboto Mono', monospace;}
</style>

<p style="background-color: var(--body-bground); position: sticky; top: 0px; color: var(--body-color); border-bottom: 1px solid var(--border-color)"><span class="emoji">🚧</span> Página em desenvolvimento <span class="emoji">🚧</span></p>
{:.banner}

# <span class="emoji">📋</span> Informações  

*[LDE]: O Livro dos Espíritos
*[LDM]: O Livro dos Médiuns
*[ESE]: O Evangelho segundo o Espiritismo
*[CEU]: O Céu e o Inferno
*[GEN]: A Gênese
*[PDF]: Portable Document Format
*[MD]: Markdown file
*[LIV]: Abreviatura de livro

## Interface

Lorem ipsum

### Colunas

Lorem ipsum

### Ajustes de interface

Lorem ipsum

### Ajustes tipográficos

Lorem ipsum

## Descrição  

Nosso projeto integra ferramentas dispersas em uma plataforma integrada, aonde se permite a consulta de fontes externas sem que se saia da janela original. Além disso, adicionamos várias ferramentas normalmente achadas em aplicativos de leitura digital (eBooks). Estas são: consulta à dicionário, consulta à enciclopédia, ferramentas de grifo de texto (highlight), anotações, e ajustes tipográficos (tamanho de letra, espaço entre-linhas, tipo de letra, e fundo de contraste).

## Livros

Decidimos por utilizar os cinco livros das [Obras Básicas](Obras%20Básicas%20do%20Espiritismo){:.l}, sendo especificamente os da Editora FEB, pela sua maior disseminação, tanto nas sociedades Espíritas como online. Veja a página <kbd><a href="../pages/3-legal.html" style="text-decoration: none;"><span class="emoji">⚖️</span> Avisos Legais</a></kbd> para detalhes acerca de direitos autorais e uso justo.

### Método  

Em primeiro lugar, estabelecemos padrões de divisão, hierarquia, e formatação de texto que mantivessem a fidelidade ao original, não em forma, mas em conteúdo. Todas as modificações são produto de uma escolha racional e visam atender ao padrão de formatação melhor disposto ao consumo digital.

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

O seguintes formato será utilizado para as mensagens de origem mediúnica  

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

### Etapas de desenvolvimento

|---|:---:|
| **Fase** | **Estado** |
| Estabelecer um padrão hierárquico, de diagramação, e de tipografia que permita seu uso através dos cinco livros distintos | 🟢 |
| Copiar e colar cada parágrafo da obra original, utilizando-se do PDF livremente disponível no site da FEB (veja [Avisos legais](./legal.md)) | 🟢 |
| Desenvolver uma interface que permita a leitura e consulta de fontes complementares sem que saia da janela original | 🟢 |
| Combinar ferramentas de EAD, leitor eBook, e outros numa plataforma integrada | 🟢 |
| Estabelecer um padrão programático para facilitar a inclusão de links no arquivo MD | 🟢 |
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

### Manutenção diária

Ao decorrer do ano de 2024, estaremos adicionando links para os items relacionados acima. Nosso objetivo diário é equivalente à 7 páginas da obra original, culminando com o término de A Gênese em 31 de Dezembro.

Concomitantemente, estaremos verificando cada parágrafo manualmente, verificando a ortografia e a diagramação. Itens já verificados, receberão o emoji <span class="emoji">✅</span> ao fim do mesmo.

No ano de 2025, iremos nos concentrar na digitalização dos Índices gerais de cada obra. Ao fim deste, iremos criar um Índice geral combinando todas as cinco obras. Acreditamos que este compêndio será de extremo valor e conveniência para pesquisadores, palestrantes, e líderes de estudo em grupo.

<script type="application/json" class="js-hypothesis-config">
{
"openSidebar": true
}
</script>