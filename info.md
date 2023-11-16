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

| 💧doutrina.org  |  |  |
| :---: | :---: | :---: |
<br>**Coluna 1**<br><br>menu<br><br>  | <br>**Coluna 2**<br><br>principal<br><br> | <br>**Coluna 3**<br><br>complementar<br><br> |  

<details><summary>detalhes</summary><small>
<ol>
<li>Coluna 1, contendo links dos livros, o sumário do mesmo, e detalhes do projeto (visível em telas grandes)</li>
<li>Coluna 2, dispondo da obra original em uma página única (visível em telas grandes, médias e pequenas)</li>
<li>Coluna 3, possibilitando a consulta de enciclopédia, dicionário, atlas (somente ESE) e vídeo reunião (visível em telas grandes e médias)</li>
<li>Adicionalmente, existe um quarto painel, escamoteavel, que possibilita grifos em amarelo e anotações (interface em Inglês, requere uma conta)</li></ol>
<hr></small>

</details>
  
Ao invés do tradicional livro, exclusivamente em preto e branco, utilizaremos de emojis, painéis coloridos, e ilustrações.

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>