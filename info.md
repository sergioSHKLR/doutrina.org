---
title: ⚖️ Informações
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

## Método

Em primeiro lugar, teríamos que estabelecer padrões de divisão, hierarquia, e formatação de texto que mantivessem a fidelidade ao original, não em forma, mas em conteúdo.

Analisando a divisão do livro em partes, decidimos criar uma seção anterior à `LDE-1` 🗂️ Parte 1 como `LDE-0` 🗂️ Parte 0, e dar-lhe o título de Pré-textual. Similarmente, criamos uma seção posterior à `LDE-5` 🗂️ Parte 5, e por dar-lhes o nome de `LDE-6` 🗂️ Parte 6 e o título de Pós-textual.

## Padrões

### Livros

Individualmente, iremos identificar os livros pelos emojis e/ou siglas abaixo.

| **Emoji** | **Sigla** | **Livro** |
|---|---|---|
| 👻 | `LDE` | O Livro dos Espíritos |
| ✒️ | `LDM` | O Livro dos Médiuns |
| 🕊️ | `ESE` | O Evangelho segundo o Espiritismo |
| 🔥 | `CEU` | O Céu e o Inferno |
| 🌱 | `GEN` | A Gênese |

### Hierarquia

Dentro deste livro, usaremos os emojis abaixo para identificar elementos individuais ou grupamentos dos mesmos. Note também o correspondente código mestre.

<pre>
📔 livro
 |
 └── 🗂️ parte
      |
      └── 📑 capítulo
           |
           └── 📃 seção
                |     
                └── #️⃣ questão
</pre>

Para facilitar a organização hierárquica, localização, correlação de items, e brevidade, um código chave foi criado. Para isso, pequenas mudanças foram feitas ─ em forma, não em conteúdo. Este código alfanúmerico é demonstrado abaixo.

### Código chave

<pre>
LDE-X-XX-XX
 |  |  |  |
 |  |  |  └── 📃 seção
 |  |  | 
 |  |  └── 📑 capítulo
 |  |
 |  └── 🗂️ parte
 |
 └── 📔 livro
</pre>

E em especial no LDE, o código para questões é modificado da sequência lógica de `LDE-X-XX-XX-XXXX` para:

<pre>
LDE-qXXXXa
 |   |   |
 |   |   └── sub-questão
 |   |
 |   └── #️⃣ questão
 |
 └── 📔 livro
</pre>

Como ilustrado acima, usamos três letras para o livro, um dígito para partes, e dois dígitos para capítulos e itens. Em especial, no LDE, usamos a letra `q`, de um a quatro dígitos, e uma letra minúscula para sub-questões de modo a designar uma pergunta específica (ex. `LDE-q909a`).

Em suma, temos esta tabela descritiva abaixo:

| **Emoji** | **Descrição** | **Conteúdo** | **Código chave** |
|---|---|---|---|
| 📔 | livro | obra completa | `LDE` |
| 🗂️ | parte | subdivisão da obra | `LDE-X` |
| 📑 | capítulo | subdivisão de partes | `LDE-X-XX` |
| 📃 | seção | subdivisão de capítulos | `LDE-X-XX-XX` |
| #️⃣ | questão | pergunta, reposta e comentário * | `LDE.qX` |

/* Existem exceções deste formato, tais como 59, 100-113, 222, 257, 455 e 872.

**Adicionais**

| **Emoji** | **Descrição** | **Conteúdo** |
|---|---|---|
| ✝️ | trecho bíblico | trecho atribuído com livro, capítulo e versículo |
| 👉 | segmento relacionado | indicação para leitura complementar |

<!--
| 🗃️ | Índice Geral | coleção de 🏷️ _tags_ |
| 🏷️ | _tag_ | agrupa #️⃣ questões e/ou 📃 seções por assunto |
| ⚜️ | fim | término de um elemento | 
-->

## Padrões estabelecidos

Decidimos utilizar um tipo *sans-serif*, mais apropriada para o consumo digital e formatar todo o texto em estilo normal com a seguinte exceção: comunicações mediúnicas e trechos bíblicos serão em *itálico* e trechos originalmente realçados em _itálico_ serão mudados para **negrito**.

Usaremos o _blockquote_ para identificar visualmente as comunicações mediúnicas. Destacaremos trechos bíblicos usando o mesmo método e atribuindo o livro, capítulo, e versículo, assim realçando a concordância entre as duas obras.

Adicionalmente, numerais romanos foram substituídos por seus equivalentes arábicos (exceção para títulos, tais como São Luís, IX da França, e séculos).

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>