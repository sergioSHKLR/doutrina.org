<style>
  blockquote {
    quotes: "\201C""\201D""\2018""\2019";
  }

  blockquote:before {
    color: dimgrey;
    content: open-quote;
    font-size: 2.5em;
    line-height: 0.1em;
    margin-right: 0.1em;
    vertical-align: -0.3em;
    font-family: serif;
  }

  blockquote p {
    display: inline;
    color: black;
  }

  blockquote:after {
    color: dimgrey;
    content: close-quote;
    font-size: 2.5em;
    line-height: 0.1em;
    margin-left: 0.1em;
    vertical-align: -0.3em;
    font-family: serif;
  }

  .markdown-body hr {
    height: 1px;
    background-color: gainsboro;
  }
  i {
    font-family: serif;
    font-size: 110%;
    font-style: italic;
    }
</style>
<script src="https://hypothes.is/embed.js" async></script>
<a name="ESE"><code>ESE</code></a>

# 🕊️ O Evangelho segundo o Espiritismo

**DRAFT** 

<details><summary>❓ <strong>Manual do usuário</strong>
    <hr />
  </summary>
  <p>Visto que nosso projeto difere significamente das opções atualmente disponíveis, tais como: livro impresso, PDF, eBook, versões online (como as de Kardecpedia ou Portal Luz Espírita); acreditamos que uma breve explicação se faz necessária.</p>
  <p>
    <strong>Livros</strong>
  </p>
  <figure class='table-figure'>
    <table>
      <thead>
        <tr>
          <th style='text-align:left;'>
            <strong>Emoji</strong>
          </th>
          <th>
            <strong>Sigla</strong>
          </th>
          <th>
            <strong>Livro</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style='text-align:left;'>👻</td>
          <td>
            <code>LDE</code>
          </td>
          <td>O Livro dos Espíritos</td>
        </tr>
        <tr>
          <td style='text-align:left;'>✒️</td>
          <td>
            <code>LDM</code>
          </td>
          <td>O Livro dos Médiuns</td>
        </tr>
        <tr>
          <td style='text-align:left;'>🕊️</td>
          <td>
            <code>ESE</code>
          </td>
          <td>O Evangelho segundo o Espiritismo</td>
        </tr>
        <tr>
          <td style='text-align:left;'>🔥</td>
          <td>
            <code>CEU</code>
          </td>
          <td>O Céu e o Inferno</td>
        </tr>
        <tr>
          <td style='text-align:left;'>🌱</td>
          <td>
            <code>GEN</code>
          </td>
          <td>A Gênese</td>
        </tr>
      </tbody>
    </table>
  </figure>
  <p>
    <strong>Hierarquia</strong>
  </p>
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

		<br />
🔼 subir um nível (exemplo: de seção para capítulo)

	</pre>
  <p>
    <strong>Código chave</strong>
  </p>
  <p>Para facilitar a organização hierárquica, localização, correlação de items, e brevidade, um código chave foi criado. Este código alfanúmerico é demonstrado abaixo.</p>
  <pre>
ESE-X-XX-XX
 |  |  |  |
 |  |  |  └── 📃 seção
 |  |  | 
 |  |  └── 📑 capítulo
 |  |
 |  └── 🗂️ parte
 |
 └── 📔 livro
</pre>
  <p>Em especial no ESE, o código para questões é modificado da esperada sequência lógica de <code>ESE-X-XX-XX-XXXX</code> para: </p>
  <pre>
ESE-qXXXXa
 |     | |
 |     | └── sub-questão
 |     |
 |     └── #️⃣ questão
 |
 └── 📔 livro
</pre>
  <p>Como ilustrado acima, usamos três letras para o livro, um dígito para partes, e dois dígitos para capítulos e itens. No ESE, usamos a letra <code>q</code>, de um a quatro dígitos, e uma letra minúscula para sub-questões de modo a designar uma pergunta específica (ex. <code>ESE-q909a</code>). </p>
  <p>Em suma, temos esta tabela descritiva abaixo:</p>
  <figure class='table-figure'>
    <table>
      <thead>
        <tr>
          <th>Emoji</th>
          <th>Descrição</th>
          <th>Conteúdo</th>
          <th>Código chave</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>📔</td>
          <td>livro</td>
          <td>obra completa</td>
          <td>
            <code>ESE</code>
          </td>
        </tr>
        <tr>
          <td>🗂️</td>
          <td>parte</td>
          <td>subdivisão da obra</td>
          <td>
            <code>ESE-X</code>
          </td>
        </tr>
        <tr>
          <td>📑</td>
          <td>capítulo</td>
          <td>subdivisão de partes</td>
          <td>
            <code>ESE-X-XX</code>
          </td>
        </tr>
        <tr>
          <td>📃</td>
          <td>seção</td>
          <td>subdivisão de capítulos</td>
          <td>
            <code>ESE-X-XX-XX</code>
          </td>
        </tr>
        <tr>
          <td>#️⃣</td>
          <td>questão</td>
          <td>pergunta, reposta e comentário <b>*</b>
          </td>
          <td>
            <code>ESE.qX</code>
          </td>
        </tr>
      </tbody>
    </table>
  </figure>
  <p>
    <b>*</b> Existem exceções deste formato, tais como 59, 100-113, 222, 257, 455 e 872.
  </p>
  <p>
    <strong>Adicionais</strong>
  </p>
  <figure class='table-figure'>
    <table>
      <thead>
        <tr>
          <th>Emoji</th>
          <th>Descrição</th>
          <th>Conteúdo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>✝️</td>
          <td>trecho bíblico</td>
          <td>trecho atribuído com livro, capítulo e versículo</td>
        </tr>
        <tr>
          <td>👉</td>
          <td>segmento relacionado</td>
          <td>indicação para leitura complementar</td>
        </tr>
        <tr>
          <td>🔼</td>
          <td>subir um nível</td>
          <td>elemento de navegação</td>
        </tr>
      </tbody>
    </table>
  </figure>
  <!--
| 🗃️ | Índice Geral | coleção de 🏷️ _tags_ |
| 🏷️ | _tag_ | agrupa #️⃣ questões e/ou 📃 seções por assunto |
| ⚜️ | fim | término de um elemento | 
-->
  <p>
      <strong>Tipografia</strong>
  </p>
  <p>Para a absoluta maioria do texto, decidimos utilizar o tipo <em>sans-serif</em> em estilo normal por mais apropriada para o consumo digital. Reservamos as seguintes duas exceções: trechos bíblicos serão em <em>serif</em> itálico e trechos originalmente realçados em <em>itálico</em> serão mudados para <strong>negrito</strong>. </p>
  <p>Usaremos o <em>blockquote</em> para identificar visualmente as comunicações mediúnicas. Destacaremos trechos bíblicos usando o mesmo método e atribuindo o livro, capítulo, e versículo, assim realçando a concordância entre as duas obras. </p>
  <p>
    <strong>Outros</strong>
  </p>
  <p>Adicionalmente, numerais romanos foram substituídos por seus equivalentes arábicos (exceção para títulos, tais como São Luís, IX da França, e séculos).</p>
  <p>
    <strong>Notas</strong>
  </p>
  <p>Como a formatação final de um arquivo MD depende da plataforma de visualização utilizada, não podemos garantir que seu resultado não contenha desvios do padrão GitHub. O mesmo ocorre com a visualização de emojis, que podem sofrer de desvios de formato em virtude da plataforma aonde o conteúdo é acessado.</p>
  <p>
    <strong>Controle de Qualidade</strong>
  </p>
  <p>Tentamos ao máximo manter a integralidade e fidelidade da obra, entretanto, no curso de adaptação do conteúdo para o consumo móvel ( <em>tablets</em> e celulares) e por claridade/brevidade se achou mais apropriado a mudança do título de alguns capítulos ou sua ordem de apresentação, de modo a obedecer a um padrão de conjunto. Extremo cuidado foi tomado para que somente a forma fosse alterada, e em nenhum modo, o conteúdo do mesmo. </p>
  <p>Em caso de erros, por favor, entrem em contato conosco para assegurar que a devida correção seja feita.</p>
  <p>
    <strong>Autor</strong>
  </p>
  <p>Sou um Americano nato, criado no Brasil desde 1976, e em 1997 resolvi retornar aos EUA aonde me alistei e servi na Marinha por quase 21 anos. Aposentado desde 2018, veterano das guerras do Iraque e Afeganistão (4 estrelas de campanha), sou auto-didata em programação <em>front-end</em> (HTML e CSS). Venho estudando a Doutrina Espírita desde 2013, por ocasião do casamento com minha esposa Mai, quem inspirou este projeto e muitos outros. Estes mesmos, disponíveis em <a href='https://shklr.org'>SHKLR.org</a> almejam a disseminação da Filosofia e Ciência Espírita tal como codificada por Allan Kardec. </p>
  <p>
    <strong>Agradecimentos</strong>
  </p>
  <p>À Deus, e aos três anjos que colocou ao meu lado. O da guarda, minha esposa, Mai, e nossa gatinha, Nina. Aos grupos espíritas de Tampa, Jacksonville, e Palm Beach, na Flórida, e o de Washington D.C, todos nos EUA. Também à Brian Foster ( <em>in memoriam</em>) e ao meu amigo e mentor, Manoel Seabra, um dos fundadores do Love and Wisdom, de Largo, Flórida, EUA. Em especial, à João Neto, de Uberlândia, Minas Gerais, Brasil, programador e quem nos economizou meses de fastidiosa digitação e revisão. Adicionalmente, ele criou <em>scripts</em> que possibilitam a conversão (duplex) do formato MD para vários outros. </p>
  <p>Deus abençoa, sempre!</p>
  <p>
    <img src="../images/sign.png" referrerpolicy="no-referrer" alt="Sergio SHKLR">
  </p>
  <figure class='table-figure'>
    <table>
      <thead>
        <tr>
          <th>cargo</th>
          <th>organização</th>
          <th>website</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>🎩 Fundador</td>
          <td>⭕ SHKLR</td>
          <td>🌐 <a href='https://shklr.org'>shklr.org</a>
          </td>
          <td>💌 <a href='mailto:doutrina@shklr.org?subject=ESE.md'>doutrina@shklr.org</a>
          </td>
        </tr>
      </tbody>
    </table>
  </figure>
  <p>
    <strong>Legal</strong>
  </p>
  <p>Este projeto é baseado na obra original <em>O Evangelho segundo o Espiritismo</em>, ISBN 978-85-7328-730-1, impresso e <em>copyright</em> (1944) pela Federação Espírita Brasileira. </p>
  <ul>
    <li>
      <p>Não exercemos direitos sobre as obras originais, suas traduções, ou derivativos que pertencem aos seus respectivos proprietários e/ou herdeiros.</p>
    </li>
    <li>
      <p>O nome e/ou logotipo de instituições, grupos, organizações, ou sociedades não constituem aprovação ou endosso. Ademais, estas entidades não são responsáveis pela qualidade de nossos serviços e/ou produtos.</p>
    </li>
    <li>
      <p>Uma ofensa aos direitos autorais não se constitui desde que se limite o uso de acordo com o <a href='http://www.planalto.gov.br/ccivil_03/leis/l9610.htm#:~:text=Art.%2046.%20N%C3%A3o%20constitui%20ofensa%20aos%20direitos%20autorais%3A'>Artigo 46, Capítulo IV, Lei Nº 9.610, de 19 de Fevereiro de 1998</a>. Reproduzimos abaixo alguns trechos pertinentes. </p>
      <ul>
        <li>
          <p>Título II, Capítulo I, Art. 7º, § 3º – No domínio das ciências, a proteção recairá sobre a forma literária ou artística, não abrangendo o seu conteúdo científico ou técnico, sem prejuízo dos direitos que protegem os demais campos da propriedade imaterial.</p>
        </li>
        <li>
          <p>Título III, Capítulo IV, Art. 46 – Não constitui ofensa aos direitos autorais:</p>
          <ul>
            <li>I – a reprodução</li>
            <li>III – a citação em livros, jornais, revistas ou qualquer outro meio de comunicação, de passagens de qualquer obra, para fins de estudo, crítica ou polêmica, na medida justificada para o fim a atingir, indicando-se o nome do autor e a origem da obra.</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <ul>
    <li>
      <p>Nossos projetos não tem fins lucrativos ou de subsistência. Absolutamente nenhum ganho, compensação, troca, benefício, ou doação é solicitada, oferecida, feita, aceita, ou sub-entendida.</p>
    </li>
    <li>
      <p>
        <strong>ESE.md</strong> e seu variante HTML são licenciados sob <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR'>CC BY-NC-SA 4.0</a>. A licença aplica-se somente ao formato (diagramação, uso de emojis, tipografia, hierarquia, código mestre, etc) e NÃO ao conteúdo. Nosso código-fonte é livremente disponível em <a href='https://github.com/sergioSHKLR' target='_blank' class='url'>https://github.com/sergioSHKLR</a>.
      </p>
      <hr />
      <p>&nbsp;</p>
    </li>
  </ul>
</details>

**Sumário**

- [`ESE-0` 🗂️ Parte 0. Pré-textual](#ESE-0)
- [`ESE-1` 🗂️ Parte 1. Miolo](#ESE-1)
- [`ESE-2` 🗂️ Parte 2. Pós-textual](#ESE-2)

---

<a name="ESE-0"><code>ESE-0</code></a>

<h2>🗂️ Parte 0. Pré-textual</h2>

- [`ESE-0-01` 📃 Folha de rosto](#ESE-0-01)
- [`ESE-0-02` 📑 Introdução](#ESE-0-02)

<a href="#ESE">🔼 voltar um nível</a>

---

<a name="ESE-0-01"><code>ESE-0-01</code></a>

<h3>📃 Folha de rosto</h3>

---

🕊️ **O Evangelho segundo o Espiritismo**

Com a explicação das máximas morais do Cristo em concordância com o Espiritismo e suas aplicações às diversas circunstâncias da vida.

Fé inabalável só o é a que pode encarar frente a frente a razão, em todas as épocas da humanidade.

Por **Allan Kardec**.<br />
Tradução de Guillon Ribeiro

Título do original francês<br />
L’Évangile selon le spiritisme<br />
(Paris, abril de 1864)

 <a href="#ESE-0">🔼 voltar um nível</a>

---

<a name="ESE-1"><code>ESE-1</code></a>

<h2>🗂️ Parte 1. Miolo</h2>

- [`ESE-1-01` 📑 01. Não vim destruir a lei](#ESE-1-01)
- [`ESE-1-02` 📑 02. Meu Reino não é deste mundo](#ESE-1-02)
- [`ESE-1-03` 📑 03. Há muitas moradas na casa de meu Pai](#ESE-1-03)
- [`ESE-1-04` 📑 04. Ninguém poderá ver o Reino de Deus se não nascer de novo](#ESE-1-04)
- [`ESE-1-05` 📑 05. Bem aventurados os aflitos](#ESE-1-05)
- [`ESE-1-06` 📑 06. O Cristo Consolador](#ESE-1-06)
- [`ESE-1-07` 📑 07. Bem-aventurados os pobres de espírito](#ESE-1-07)
- [`ESE-1-08` 📑 08. Bem-aventurados os que tem puro o coração](#ESE-1-08)
- [`ESE-1-09` 📑 09. Bem-aventurados os que são brandos e pacíficos](#ESE-1-09)
- [`ESE-1-10` 📑 10. Bem-aventurdaos os que são misericordiosos](#ESE-1-10)
- [`ESE-1-11` 📑 11. Amar o próximo como a si mesmo](#ESE-1-11)
- [`ESE-1-12` 📑 12. Amai os vossos inimigos](#ESE-1-12)
- [`ESE-1-13` 📑 13. Não saiba a vossa mão esquerda o que dê a vossa mão direita](#ESE-1-13)
- [`ESE-1-14` 📑 14. Honrai o vosso pai e a vossa mãe](#ESE-1-14)
- [`ESE-1-15` 📑 15. Fora da caridade não há salvação](#ESE-1-15)
- [`ESE-1-16` 📑 16. Não se pode servir a Deus e a Mamon](#ESE-1-16)
- [`ESE-1-17` 📑 17. Sede perfeitos](#ESE-1-17)
- [`ESE-1-18` 📑 18. Muitos os chamados, poucos os escolhidos](#ESE-1-18)
- [`ESE-1-19` 📑 19. A fé transporta montanhas](#ESE-1-19)
- [`ESE-1-20` 📑 20. Os trabalhadores da última hora](#ESE-1-20)
- [`ESE-1-21` 📑 21. Haverá falsos cristos e falsos profetas](#ESE-1-21)
- [`ESE-1-22` 📑 22. Não separeis o que Deus juntou](#ESE-1-22)
- [`ESE-1-23` 📑 23. Estranha moral](#ESE-1-23)
- [`ESE-1-24` 📑 24. Não ponhais a candeia debaixo do alqueire](#ESE-1-24)
- [`ESE-1-25` 📑 25. Buscai e achareis](#ESE-1-25)
- [`ESE-1-26` 📑 26. Dai gratuitamente o que gratuitamente recebestes](#ESE-1-26)
- [`ESE-1-27` 📑 27. Pedi e obtereis](#ESE-1-27)
- [`ESE-1-28` 📑 28. Coletânea de preces espíritas](#ESE-1-28)

<a href="#ESE">🔼 voltar um nível</a>

---

<a name="ESE-2"><code>ESE-2</code></a>

<h2>🗂️ Parte 2. Pós-textual</h2>

- [`ESE-2-01` 📃 Nota explicativa](#ESE-2-01)
- [`ESE-2-02` Índice Geral](#ESE-2-02)

<a href="#ESE">🔼 voltar um nível</a>


