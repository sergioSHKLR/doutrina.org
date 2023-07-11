
<style>
  code {background-color: whitesmoke; border: 1px solid lightgrey; border-radius: 5px; padding: 2px 4px; font-size: 80%;}
  blockquote {font-family: 'Georgia'; font-style: normal; border-left: 2px solid dodgerblue; }
  blockquote > blockquote {border-left: 2px solid grey; font-family: "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 90% }
  code > a:hover {font-style: normal; font-weight: normal;}
  .bible {border-left: 2px solid brown;}
</style>

# Bem-vindo

**Sumário**

  - [0. Direto ao ponto](#0-direto-ao-ponto)
  - [1. Objetivo](#1-objetivo)
  - [2. Análise](#2-análise)
  - [3. Formato de arquivo](#3-formato-de-arquivo)
  - [4. Obra original](#4-obra-original)
  - [5. Método](#5-método)
  - [6. Padronização](#6-padronização)
  - [7. Navegação](#7-navegação)
  - [8. Controle de Qualidade](#8-controle-de-qualidade)
  - [9. Autor](#9-autor)
  - [10. Agradecimentos](#10-agradecimentos)
  - [11. Notas](#11-notas)

## 0. Direto ao ponto                       

- [`LDE` 👻 O Livro dos Espíritos v2023-07-09](https://sergioshklr.github.io/LDE/releases/LDE-v2023-07-09.html)
- [`LDM` ✒️ O Livro dos Médiuns v2023-07-10](https://sergioshklr.github.io/LDM/releases/LDM-v2023-07-10.html)
- [`ESE` 🕊️ O Evangelho segundo o Espiritismo DRAFT](https://sergioshklr.github.io/ESE/draft/ESE-draft.html)
- [`CEU` 🔥 O Céu e o Inferno ]()
- [`GEN` 🌱 A Gênese ]()

[🔼](#-o-livro-dos-espíritos)

## 1. Objetivo

Intencionamos criar versões mais dinâmicas das cinco obras básicas (LDE, LDM, ESE, CEU, e GEN), utilizando emojis, cores, tipografia, padrões de formato, e criando um código mestre que possa ser usado para localizar e correlacionar diferentes partes destas mesmas obras.

[🔼](#-o-livro-dos-espíritos)

## 2. Análise

Gostaríamos que nossa versão não sofresse da rigidez do PDF (páginas de tamanho fixo), fosse de mais fácil uso que um eBook (sem necessidade de um aplicativo especial), e não usasse *DRM* (como AZW do *Kindle*). Formatos de processadores de texto (como DOC, DOCX, ou ODF) foram rejeitados por não serem capazes de lidar com arquivos deste comprimento. Formatos livres e simples como TXT ou RTF são muito pobres em formatação de texto e não permitem a fidelidade desejada.

[🔼](#-o-livro-dos-espíritos)

## 3. Formato de arquivo

~~Decidimos então por adotar o formato *MarkDown* (.md) pela sua fácil edição e capacidade de formatação de texto. Adicionalmente, o formato permite que o mesmo sirva de fonte para conversões em arquivos diversos, tal como HTML & CSS (em SSG), JSON, etc. Isto ainda facilita a utilização por programadores que queiram usar o mesmo para servir de base ou banco de dados para seus próprios projetos, tais como *apps*.~~

[🔼](#-o-livro-dos-espíritos)

## 4. Obra original

Optamos por utilizar a coletânea traduzida do original francês de Allan Kardec para o português de Brasil por Guillon Ribeiro e Manuel Quintão, e impressa pela Federação Espírita Brasileira. Agradecemos a FEB, por disponibilizar gratuitamente o PDF das obras básicas, todas disponíveis [nesta](https://www.febnet.org.br/portal/2022/08/10/obras-de-allan-kardec-3/) página (verificada em 02 de maio de 2023).

### 4.1. Formatação de texto (livro impresso)

Originalmente usou-se a divisão visual (linhas em branco; aspas) e estilística (fonte normal; itálico; fonte menor) para separar elementos (origem humana; origem espiritual) e denotar realce ou grifo, como no exemplo abaixo (modificado do original para ilustração). Trechos bíblicos, em geral, não foram separados ou atribuídos por livro, capítulo e versículo.

---

3. *Poder-se-ia dizer que* Deus *é o infinito?*

“Definição incompleta. Pobreza da linguagem humana, *insuficiente* para definir o que está acima da linguagem dos homens.”

Deus é infinito em suas perfeições, mas o infinito é uma abstração. Dizer que Deus é o infinito é tomar o atributo de uma coisa pela coisa mesma, é definir uma coisa que não está conhecida por uma outra que não o está mais do que a primeira.

E disse Jesus: “A cada um, de acordo com suas obras.”

---

Como se vê, na pergunta, a palavra 'Deus' foi realçada em estilo normal, visto que a sentença se encontra em estilo itálico. Já na resposta, palavra 'insuficiente' foi realçada em estilo itálico, visto que a sentença se encontra em estilo normal. De modo a diferenciar os comentários de Kardec das mensagens de Espíritos, usou-se uma fonte ligeiramente menor em tamanho. 

Consideramos estas escolhas de formatações demasiada sutis (não chamam a atenção do leitor com eficiência), além de introduzir confusão na padronização programática. Adicionalmente, as mesmas não são apropriadas para o formato *Markdown*, ou a análise e formatação automática por meio de *scripts*, sendo o método que nosso maior colaborador, **<a href="https://github.com/JhonnyBn">JhonnyBn</a>**, criou para automatizar o processo.

[🔼](#-o-livro-dos-espíritos)

## 5. Método

Em primeiro lugar, teríamos que estabelecer padrões de formatação de texto que mantivessem a fidelidade ao original, não em forma, mas em conteúdo.

Analisando a divisão do livro em partes, decidimos nomear a seção anterior à `LDE-1` 🗂️ Parte 1 como `LDE-0` 🗂️ Parte 0, e dar-lhe o título de Pré-textual. Considerando as seções que seguem a `LDE-5` 🗂️ Parte 5, decidimos por dar-lhes o nome de `LDE-6` 🗂️ Parte 6 e o título de Pós-textual.

[🔼](#-o-livro-dos-espíritos)

## 6. Padronização

Decidimos formatar todo o texto em estilo normal com as seguintes exceções:

- respostas dos Espíritos (entre aspas) serão em itálico, destacadas em _blockquote_ (linha vertical, simples).
- comentários de Kardec serão _nested blockquotes_ (linha vertical, dupla).
- trechos bíblicos serão em itálico identificados com o emoji ✝️ e atribuídos com livro, capítulo e versículo.
- trechos originalmente realçados em _itálico_ foram mudados para **negrito**.

Considero que estas escolhas fazem um bom uso de elementos mais apropriados para o consumo digital (cores, tipografia sans-serif, emojis, código hierárquico, etc). Adicionalmente, numerais romanos foram substituídos por seus equivalentes arábicos (exceção para títulos, tais como São Luís, IX da França, e séculos).

### 6.1. Formatação de texto (LDE.md)

#### 6.1.1 Questões

`LDE.q3`

#️⃣ 3. Poder-se-ia dizer que **Deus** é o infinito?

> “_Definição incompleta. Pobreza da linguagem humana, **insuficiente** para definir o que está acima da linguagem dos homens._”
>> Deus é infinito em suas perfeições, mas o infinito é uma abstração. Dizer que Deus é o infinito é tomar o atributo de uma coisa pela coisa mesma, é definir uma coisa que não está conhecida por uma outra que não o está mais do que a primeira. 

---

#### 6.1.2 Trechos bíblicos

E disse Jesus:

“_A cada um, de acordo com suas obras._”

✝️ Romanos, cap. 2, vers. 6

---

### 6.2. Legenda
Genericamente, usaremos 📔 para denotar um dos livros das obras básicas. Individualmente, iremos identificá-los pela abreviação de três letras ou visualmente pelo seguintes emojis:

| **Emoji** | **Abreviação** | **Livro** |
|---|---|---|
| 👻 | LDE | O Livro dos Espíritos |
| ✒️ | LDM | O Livro dos Médiuns |
| 🕊️ | ESE | O Evangelho segundo o Espiritismo |
| 🔥 | CEU | O Céu e o Inferno |
| 🌱 | GEN | A Gênese |

Dentro de cada livro individual, usaremos os emojis abaixo para identificar elementos ou grupamento.

| **Emoji** | **Descrição** | **Conteúdo** | **Código mestre** |
|---|---|---|---|
| 📔 | livro | obra completa | `LDE` |
| 🗂️ | parte | subdivisão da obra | `LDE-X` |
| 📑 | capítulo | subdivisão de partes | `LDE-X-XX` |
| 📃 | seção | subdivisão de capítulos | `LDE-X-XX-XX` |
| #️⃣ | questão | pergunta, reposta e comentário * | `LDE.qX` |

/* Existem exceções deste formato, tais como 59, 100-113, 222, 257, 455 e 872.

##### 6.2.1. Adicionais

| **Emoji** | **Descrição** | **Conteúdo** |
|---|---|---|
| ✝️ | trecho bíblico | trecho, livro, capítulo, versículo |
| 👉 | segmento relacionado | questões, capítulos, etc |

<!--
| 🗃️ | Índice Geral | coleção de 🏷️ _tags_ |
| 🏷️ | _tag_ | agrupa #️⃣ questões e/ou 📃 seções por assunto |
| ⚜️ | fim | término de um elemento | -->

### 6.3. Hierarquia 

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

### 6.4. Código mestre

Para facilitar a organização hierárquica, localização, correlação de items, e brevidade, um código mestre foi criado. Para isso, pequenas mudanças foram feitas ─ em forma, não em conteúdo. Este código alfanúmerico é demonstrado abaixo.

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

E em especial no LDE, o código para questões é modificado de `LDE-X-XX-XX-XXXX` para:

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

[🔼](#-o-livro-dos-espíritos)

## 7. Navegação

De modo a evitar um sumário extremamente longo, decidimos por dividi-lo em partes incrementais. Ao começo do livro temos o sumário das partes e ao começo dos capítulos temos o sumário de seções. Ao término de cada segmento, você encontra este emoji 🔼, que ao ser clicado, lhe retorna ao nível imediatamente superior (por exemplo, de seção para capítulo ou de capítulo para parte).

[🔼](#-o-livro-dos-espíritos)

## 8. Controle de Qualidade

Tentamos ao máximo manter a integralidade e fidelidade da obra, entretanto, no curso de adaptação do conteúdo para o consumo móvel (*tablets* e celulares) e por claridade/brevidade se achou mais apropriado a mudança do título de alguns capítulos ou sua ordem de apresentação, de modo a obedecer a um padrão de conjunto. Extremo cuidado foi tomado para que somente a forma fosse alterada, e em nenhum modo, o conteúdo do mesmo.

Em caso de erros, por favor, entrem em contato conosco para assegurar que a devida correção seja feita.

[🔼](#-o-livro-dos-espíritos)

## 9. Autor

Sou um Americano nato, criado no Brasil desde 1976, e em 1997 resolvi retornar aos EUA aonde me alistei e servi na Marinha por quase 21 anos. Aposentado desde 2018, veterano das guerras do Iraque e Afeganistão (4 estrelas de campanha), sou auto-didata em programação *front-end* (HTML e CSS). Venho estudando a Doutrina Espírita desde 2013, por ocasião do casamento com minha esposa Mai, quem inspirou este projeto e muitos outros. Estes mesmos, disponíveis em [SHKLR.org](https://shklr.org) almejam a disseminação da Filosofia e Ciência Espírita tal como codificada por Allan Kardec.

[🔼](#-o-livro-dos-espíritos)

## 10. Agradecimentos

À Deus, e aos três anjos que colocou ao meu lado. O da guarda, minha esposa, Mai, e nossa gatinha, Nina. Aos grupos espíritas de Tampa, Jacksonville, e Palm Beach, na Flórida, e o de Washington D.C, todos nos EUA. Também à Brian Foster (*in memoriam*) e ao meu amigo e mentor, Manoel Seabra, um dos fundadores do Love and Wisdom, de Largo, Flórida, EUA. Em especial, à João Neto, de Uberlândia, Minas Gerais, Brasil, programador e quem nos economizou meses de fastidiosa digitação e revisão. Adicionalmente, ele criou *scripts* que possibilitam a conversão (duplex) do formato MD para vários outros.

Deus abençoa, sempre!

![Sergio SHKLR](/images/sign.png)

| cargo | organização | website | email |
| --- | --- | --- | --- |
| 🎩 Fundador | ⭕ SHKLR | 🌐 [shklr.org](https://shklr.org) | 💌 [doutrina@shklr.org](mailto:doutrina@shklr.org?subject=LDE.md) |

[🔼](#-o-livro-dos-espíritos)

## 11. Notas

- **LDE-vYYYY-MM-DD.md** e seus variantes são licenciados sob [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR). A licença aplica-se somente ao formato (diagramação, uso de emojis, tipografia, hierarquia, código mestre, etc) e NÃO ao conteúdo. Nosso código-fonte é disponível em https://github.com/sergioSHKLR/1lde.

- Nossos projetos não tem fins lucrativos ou de subsistência. Absolutamente nenhum ganho, compensação, troca, benefício, ou doação é solicitada, oferecida, feita, aceita, ou sub-entendida.

- Não exercemos direitos sobre as obras originais, suas traduções, ou derivativos que pertencem aos seus respectivos proprietários e/ou herdeiros.

- O nome e/ou logotipo de instituições, grupos, organizações, ou sociedades não constituem aprovação ou endosso. Ademais, estas entidades não são responsáveis pela qualidade de nossos serviços e/ou produtos.

- Uma ofensa aos direitos autorais não se constitui desde que se limite o uso de acordo com o [Artigo 46, Capítulo IV, Lei Nº 9.610, de 19 de Fevereiro de 1998](http://www.planalto.gov.br/ccivil_03/leis/l9610.htm#:~:text=Art.%2046.%20N%C3%A3o%20constitui%20ofensa%20aos%20direitos%20autorais%3A). Reproduzimos abaixo alguns trechos pertinentes.

 - Título II, Capítulo I, Art. 7º, § 3º – No domínio das ciências, a proteção recairá sobre a forma literária ou artística, não abrangendo o seu conteúdo científico ou técnico, sem prejuízo dos direitos que protegem os demais campos da propriedade imaterial.

    - Título III, Capítulo IV, Art. 46 – Não constitui ofensa aos direitos autorais:
       - I – a reprodução
       - III – a citação em livros, jornais, revistas ou qualquer outro meio de comunicação, de passagens de qualquer obra, para fins de estudo, crítica ou polêmica, na medida justificada para o fim a atingir, indicando-se o nome do autor e a origem da obra.

- Como a formatação final de um arquivo MD depende da plataforma de visualização utilizada, não podemos garantir que seu resultado não contenha desvios do padrão GitHub. O mesmo ocorre com a visualização de emojis, que podem sofrer de desvios de formato em virtude da plataforma aonde o conteúdo é acessado.

[🔼](#-o-livro-dos-espíritos)



