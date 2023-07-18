# ❓ Manual do usuário

---

**Intro**

Visto que nosso projeto difere significamente das opções atualmente disponíveis, tais como: livro impresso, PDF, eBook, versões online (como as de Kardecpedia ou Portal Luz Espírita); acreditamos que uma breve explicação se faz necessária.

**Livros**

| Emoji | Sigla | Livro |
|:---:|:---:|---|
| 👻 | `LDE` | O Livro dos Espíritos |
| ✒️ | `LDM` | O Livro dos Médiuns |
| 🕊️ | `ESE` | O Evangelho segundo o Espiritismo |
| 🔥 | `CEU` | O Céu e o Inferno |
| 🌱 | `GEN` | A Gênese |

**Hierarquia**

Dentro deste livro, usaremos os emojis abaixo para identificar elementos individuais ou grupamentos dos mesmos.

```
📔 livro
 |
 └── 🗂️ parte
      |
      └── 📑 capítulo
           |
           └── 📃 seção
                |     
                └── #️⃣ questão
```

**Código chave**

Para facilitar a organização hierárquica, localização, correlação de items, e brevidade, um código chave foi criado. Para isso, pequenas mudanças foram feitas ─ em forma, não em conteúdo. Este código alfanúmerico é demonstrado abaixo.

```
LDE-X-XX-XX
 |  |  |  |
 |  |  |  └── 📃 seção
 |  |  | 
 |  |  └── 📑 capítulo
 |  |
 |  └── 🗂️ parte
 |
 └── 📔 livro
```

Em especial no LDE, o código para questões é modificado da sequência lógica de `LDE-X-XX-XX-XXXX` para:

```
LDE-qXXXXa
 |   |   |
 |   |   └── sub-questão
 |   |
 |   └── #️⃣ questão
 |
 └── 📔 livro
```

Como ilustrado acima, usamos três letras para o livro, um dígito para partes, e dois dígitos para capítulos e itens. Em especial, no LDE, usamos a letra `q`, de um a quatro dígitos, e uma letra minúscula para sub-questões de modo a designar uma pergunta específica (ex. `LDE-q909a`).

Em suma, temos esta tabela descritiva abaixo:

| Emoji | Descrição | Conteúdo | Código chave |
|:---:|---|---|---|
| 📔 | livro | obra completa | `LDE` |
| 🗂️ | parte | subdivisão da obra | `LDE-X` |
| 📑 | capítulo | subdivisão de partes | `LDE-X-XX` |
| 📃 | seção | subdivisão de capítulos | `LDE-X-XX-XX` |
| #️⃣ | questão | pergunta, reposta e comentário [^0] | `LDE.qX` |

[^0]: Existem exceções deste formato, tais como 59, 100-113, 222, 257, 455 e 872.

**Adicionais**

| Emoji | Descrição | Conteúdo |
|:---:|---|---|
| ✝️ | trecho bíblico | trecho atribuído com livro, capítulo e versículo |
| 👉 | segmento relacionado | indicação para leitura complementar |

<!--
| 🗃️ | Índice Geral | coleção de 🏷️ _tags_ |
| 🏷️ | _tag_ | agrupa #️⃣ questões e/ou 📃 seções por assunto |
| ⚜️ | fim | término de um elemento | 
-->

**Tipografia**

Decidimos utilizar um tipo *sans-serif*, mais apropriada para o consumo digital e formatar todo o texto em estilo normal com a seguinte exceção: comunicações mediúnicas e trechos bíblicos serão em *itálico* e trechos originalmente realçados em _itálico_ serão mudados para **negrito**.

Usaremos o _blockquote_ para identificar visualmente as comunicações mediúnicas. Destacaremos trechos bíblicos usando o mesmo método e atribuindo o livro, capítulo, e versículo, assim realçando a concordância entre as duas obras.

**Outros**

Adicionalmente, numerais romanos foram substituídos por seus equivalentes arábicos (exceção para títulos, tais como São Luís, IX da França, e séculos).

**Notas**

Como a formatação final de um arquivo MD depende da plataforma de visualização utilizada, não podemos garantir que seu resultado não contenha desvios do padrão GitHub. O mesmo ocorre com a visualização de emojis, que podem sofrer de desvios de formato em virtude da plataforma aonde o conteúdo é acessado.

**Controle de Qualidade**

Tentamos ao máximo manter a integralidade e fidelidade da obra, entretanto, no curso de adaptação do conteúdo para o consumo móvel ( tablets e celulares) e por claridade/brevidade se achou mais apropriado a mudança do título de alguns capítulos ou sua ordem de apresentação, de modo a obedecer a um padrão de conjunto. Extremo cuidado foi tomado para que somente a forma fosse alterada, e em nenhum modo, o conteúdo do mesmo.

Em caso de erros, por favor, entrem em contato conosco para assegurar que a devida correção seja feita.

**Autor**

Sou um Americano nato, criado no Brasil desde 1976, e em 1997 resolvi retornar aos EUA aonde me alistei e servi na Marinha por quase 21 anos. Aposentado desde 2018, veterano das guerras do Iraque e Afeganistão (4 estrelas de campanha), sou auto-didata em programação front-end (HTML e CSS). Venho estudando a Doutrina Espírita desde 2013, por ocasião do casamento com minha esposa Mai, quem inspirou este projeto e muitos outros. Estes mesmos, disponíveis em [SHKLR.org](https://shklr.org) almejam a disseminação da Filosofia e Ciência Espírita tal como codificada por Allan Kardec.

**Agradecimentos**

À Deus, e aos três anjos que colocou ao meu lado. O da guarda, minha esposa, Mai, e nossa gatinha, Nina. Aos grupos espíritas de Tampa, Jacksonville, e Palm Beach, na Flórida, e o de Washington D.C, todos nos EUA. Também à Brian Foster ( in memoriam) e ao meu amigo e mentor, Manoel Seabra, um dos fundadores do Love and Wisdom, de Largo, Flórida, EUA. Em especial, à João Neto, de Uberlândia, Minas Gerais, Brasil, programador e quem nos economizou meses de fastidiosa digitação e revisão. Adicionalmente, ele criou scripts que possibilitam a conversão (duplex) do formato MD para vários outros.

Deus abençoa, sempre!

![Sergio SHKLR](/images/sign.png)

| cargo | organização | website | email |
| --- | --- | --- | --- |
| 🎩 Fundador | ⭕ SHKLR | 🌐 [shklr.org](https://shklr.org) | 💌 [doutrina@shklr.org](mailto:doutrina@shklr.org?subject=LDE.md) |



**Legal**

- Este projeto é baseado na obra original O Livro dos Espíritos, ISBN 978-85-7328-728-8, impresso e copyright (1944) pela Federação Espírita Brasileira.

- Não exercemos direitos sobre as obras originais, suas traduções, ou derivativos que pertencem aos seus respectivos proprietários e/ou herdeiros.

- O nome e/ou logotipo de instituições, grupos, organizações, ou sociedades não constituem aprovação ou endosso. Ademais, estas entidades não são responsáveis pela qualidade de nossos serviços e/ou produtos.

- Uma ofensa aos direitos autorais não se constitui desde que se limite o uso de acordo com o [Artigo 46, Capítulo IV, Lei Nº 9.610, de 19 de Fevereiro de 1998](http://www.planalto.gov.br/ccivil_03/leis/l9610.htm#:~:text=Art.%2046.%20N%C3%A3o%20constitui%20ofensa%20aos%20direitos%20autorais%3A). Reproduzimos abaixo alguns trechos pertinentes.

     - Título II, Capítulo I, Art. 7º, § 3º – No domínio das ciências, a proteção recairá sobre a forma literária ou artística, não abrangendo o seu conteúdo científico ou técnico, sem prejuízo dos direitos que protegem os demais campos da propriedade imaterial.

     - Título III, Capítulo IV, Art. 46 – Não constitui ofensa aos direitos autorais:

         - I – a reprodução

        - III – a citação em livros, jornais, revistas ou qualquer outro meio de comunicação, de passagens de qualquer obra, para fins de estudo, crítica ou polêmica, na medida justificada para o fim a atingir, indicando-se o nome do autor e a origem da obra.

- Nossos projetos não tem fins lucrativos ou de subsistência. Absolutamente nenhum ganho, compensação, troca, benefício, ou doação é solicitada, oferecida, feita, aceita, ou sub-entendida.

- LDE.md e seu variante HTML são licenciados sob [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR). A licença aplica-se somente ao formato (diagramação, uso de emojis, tipografia, hierarquia, código mestre, etc) e NÃO ao conteúdo. Nosso código-fonte é livremente disponível em https://github.com/sergioSHKLR.

---

</details>