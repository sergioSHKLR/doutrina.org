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
- [`ESE-0-02` 📃 Prefácio](#ESE-0-02)
- [`ESE-0-03` 📑 Introdução](#ESE-0-03)

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

<a name="ESE-0-02"><code>ESE-0-02</code></a>

<h3>📃 Prefácio</h3>

>Os Espíritos do Senhor, que são as virtudes dos Céus, qual imenso exército que se movimenta ao receber as ordens do seu comando, espalham-se por toda a superfície da Terra e, semelhantes a estrelas cadentes, vêm iluminar os caminhos e abrir os olhos aos cegos.
><br />
><br />
>Eu vos digo, em verdade, que são chegados os tempos em que todas as coisas hão de ser restabelecidas no seu verdadeiro sentido, para dissipar as trevas, confundir os orgulhosos e glorificar os justos.
><br />
><br />
>As grandes vozes do Céu ressoam como sons de trombetas, e os cânticos dos anjos se lhes associam. Nós vos convidamos, a vós homens, para o divino concerto. Tomai da lira, fazei uníssonas vossas vozes, e que, num hino sagrado, elas se estendam e repercutam de um extremo a outro do Universo.
><br />
><br />
>Homens, irmãos a quem amamos, aqui estamos junto de vós. Amai-vos, também, uns aos outros e dizei do fundo do coração, fazendo as vontades do Pai, que está no Céu: Senhor! Senhor!... e podereis entrar no Reino dos Céus.
><br />
><br />
>**O Espírito da Verdade**

<br />

📝 **Nota**. A instrução acima, transmitida por via mediúnica, resume a um tempo o verdadeiro caráter do Espiritismo e a finalidade desta obra; por isso foi colocada aqui como prefácio.

<a href="#ESE-0">🔼 voltar um nível</a>

---

<a name="ESE-0-03"><code>ESE-0-03</code></a>

<h3>📑 Introdução</h3>

- [`ESE-0-01` 📃 1. Objetivo desta obra](#ESE-0-03-01)
- [`ESE-0-02` 📃 2. Autoridade da doutrina espírita](#ESE-0-03-02)
- [`ESE-0-03` 📃 3. Notícias históricas](#ESE-0-03-03)
- [`ESE-0-04` 📃 4. Sócrates e Platão, precursores da ideia cristã e do Espiritismo](#ESE-0-03-04)

<a href="#ESE-0">🔼 voltar um nível</a>

---

<a name="ESE-0-03-01"><code>ESE-0-03-01</code></a>

<h4>📃 1. Objetivo desta obra</h4>

Podem dividir-se em cinco partes as matérias contidas nos Evangelhos: os atos comuns da vida do Cristo; os milagres; as predições; as palavras que foram tomadas pela Igreja para fundamento de seus dogmas; e o ensino moral. As quatro primeiras têm sido objeto de controvérsias; a última, porém, conservou-se constantemente inatacável. Diante desse código divino, a própria incredulidade se curva. É terreno onde todos os cultos podem reunir-se, estandarte sob o qual podem todos colocar-se, quaisquer que sejam suas crenças, porquanto jamais ele constituiu matéria das disputas religiosas, que sempre e por toda a parte se originaram das questões dogmáticas. Aliás, se o discutissem, nele teriam as seitas encontrado sua própria condenação, visto que, na maioria, elas se agarram mais à parte mística do que à parte moral, que exige de cada um a reforma de si mesmo. Para os homens, em particular, constitui aquele código uma regra de proceder que abrange todas as circunstâncias da vida privada e da vida pública, o princípio básico de todas as relações sociais que se fundam na mais rigorosa justiça. É, finalmente e acima de tudo, o roteiro infalível para a felicidade vindoura, o levantamento de uma ponta do véu que nos oculta a vida futura. Essa parte é a que será objeto exclusivo desta obra.

Toda a gente admira a moral evangélica; todos lhe proclamam a sublimidade e a necessidade; muitos, porém, assim se pronunciam por fé, confiados no que ouviram dizer, ou firmados em certas máximas que se tornaram proverbiais. Poucos, no entanto, a conhecem a fundo e menos ainda são os que a compreendem e lhe sabem deduzir as consequências. A razão está, por muito, na dificuldade que apresenta o entendimento do Evangelho que, para o maior número dos seus leitores, é ininteligível. A forma alegórica e o intencional misticismo da linguagem fazem que a maioria o leia por desencargo de consciência e por dever, como leem as preces, sem as entender, isto é, sem proveito. Passam-lhes despercebidos os preceitos morais, disseminados aqui e ali, intercalados na massa das narrativas. Impossível, então, apanhar-se-lhes o conjunto e tomá-los para objeto de leitura e meditações especiais.

É certo que tratados já se hão escrito de moral evangélica; mas o arranjo em moderno estilo literário lhe tira a primitiva simplicidade que, ao mesmo tempo, lhe constitui o encanto e a autenticidade. Outro tanto cabe dizer-se das máximas destacadas e reduzidas à sua mais simples expressão proverbial. Desde logo, já não passam de aforismos, privados de uma parte do seu valor e interesse, pela ausência dos acessórios e das circunstâncias em que foram enunciadas.

Para obviar a esses inconvenientes, reunimos, nesta obra, os artigos que podem compor, a bem dizer, um código de moral universal, sem distinção de culto. Nas citações, conservamos o que é útil ao desenvolvimento da ideia, pondo de lado unicamente o que se não prende ao assunto. Além disso, respeitamos escrupulosamente a tradução de Sacy, assim como a divisão em versículos. Em vez, porém, de nos atermos a uma ordem cronológica impossível e sem vantagem real para o caso, grupamos e classificamos metodicamente as máximas, segundo as respectivas naturezas, de modo que decorram umas das outras, tanto quanto possível. A indicação dos números de ordem dos capítulos e dos versículos permite se recorra à classificação vulgar, quando oportuno.

Esse, entretanto, seria um trabalho material que, por si só, apenas teria secundária utilidade. O essencial era pô-lo ao alcance de todos, mediante a explicação das passagens obscuras e o desdobramento de todas as consequências, tendo em vista a aplicação dos ensinos a todas as condições da vida. Foi o que tentamos fazer, com a ajuda dos bons Espíritos que nos assistem.

Muitos pontos dos Evangelhos, da Bíblia e dos autores sacros em geral por si sós são ininteligíveis, parecendo alguns até irracionais, por falta da chave que faculte se lhes apreenda o verdadeiro sentido. Essa chave está completa no Espiritismo, como já o puderam reconhecer os que o têm estudado seriamente e como todos, mais tarde, ainda melhor o reconhecerão.

O Espiritismo se nos depara por toda a parte na Antiguidade e nas diferentes épocas da Humanidade. Por toda a parte se lhe descobrem os vestígios: nos escritos, nas crenças e nos monumentos. Essa a razão por que, ao mesmo tempo que rasga horizontes novos para o futuro, projeta luz não menos viva sobre os mistérios do passado.

Como complemento de cada preceito, acrescentamos algumas instruções escolhidas, dentre as que os Espíritos ditaram em vários países e por diferentes médiuns. Se elas fossem tiradas de uma fonte única, houveram talvez sofrido uma influência pessoal ou a do meio, ao passo que a diversidade de origens prova que os Espíritos dão indistintamente seus ensinos e que ninguém a esse respeito goza de qualquer privilégio. [^1]

Esta obra é para uso de todos. Dela podem todos haurir os meios de conformar com a moral do Cristo o respectivo proceder. Aos espíritas oferece aplicações que lhes concernem de modo especial. Graças às relações estabelecidas, doravante e permanentemente, entre os homens e o mundo invisível, a lei evangélica, que os próprios Espíritos ensinaram a todas as nações, já não será letra morta, porque cada um a compreenderá e se verá incessantemente compelido a pô-la em prática, a conselho de seus guias espirituais. As instruções que promanam dos Espíritos são verdadeiramente **as vozes do Céu** que vêm esclarecer os homens e convidá-los **à prática do Evangelho**.

[^1]: Nota de Allan Kardec (A.K.): Houvéramos, sem dúvida, podido apresentar, sobre cada assunto, maior número de comunicações obtidas numa porção de outras cidades e centros, além das que citamos. Tivemos, porém, de evitar a monotonia das repetições inúteis e limitar a nossa escolha às que, tanto pelo fundo quanto pela forma, se enquadravam melhor no plano desta obra, reservando para publicações ulteriores as que não puderam caber aqui. Quanto aos médiuns, abstivemo-nos de nomeá-los. Na maioria dos casos, não os designamos a pedido deles próprios e, assim sendo, não convinha fazer exceções. Ademais, os nomes dos médiuns nenhum valor teriam acrescentado à obra dos Espíritos. Mencioná-los mais não fora, então, do que satisfazer ao amor-próprio, coisa a que os médiuns verdadeiramente sérios nenhuma importância ligam. Compreendem eles que, por ser meramente passivo o papel que lhes toca, o valor das comunicações em nada lhes exalça o mérito pessoal; e que seria pueril envaidecerem-se de um trabalho de inteligência ao qual é apenas mecânico o concurso que prestam.

<a href="#ESE-0-03">🔼 voltar um nível</a>

---

<a name="ESE-0-03-02"><code>ESE-0-03-02</code></a>

<h4>📃 2. Autoridade da doutrina espírita</h4>

**Controle universal do ensino dos Espíritos**

Se a Doutrina Espírita fosse de concepção puramente humana, não ofereceria por penhor senão as luzes daquele que a houvesse concebido. Ora, ninguém, neste mundo, poderia alimentar fundadamente a pretensão de possuir, com exclusividade, a verdade absoluta. Se os Espíritos que a revelaram se houvessem manifestado a um só homem, nada lhe garantiria a origem, porquanto fora mister acreditar, sob palavra, naquele que dissesse ter recebido deles o ensino. Admitida, de sua parte, sinceridade perfeita, quando muito poderia ele convencer as pessoas de suas relações; conseguiria sectários, mas nunca chegaria a congregar todo o mundo.

Quis Deus que a nova revelação chegasse aos homens por mais rápido caminho e mais autêntico. Incumbiu, pois, os Espíritos de levá-la de um polo a outro, manifestando-se por toda parte, sem conferir a ninguém o privilégio de lhes ouvir a palavra. Um homem pode ser ludibriado, pode enganar-se a si mesmo; já não será assim, quando milhões de criaturas veem e ouvem a mesma coisa. Constitui isso uma garantia para cada um e para todos. Ademais, pode fazer-se que desapareça um homem; mas não se pode fazer que desapareçam as coletividades; podem queimar-se os livros, mas não se podem queimar os Espíritos. Ora, queimassem-se todos os livros e a fonte da doutrina não deixaria de conservar-se inexaurível, pela razão mesma de não estar na Terra, de surgir em todos os lugares e de poderem todos dessedentar-se nela. Faltem os homens para difundi-la: haverá sempre os Espíritos, cuja atuação a todos atinge e aos quais ninguém pode atingir.

São, pois, os próprios Espíritos que fazem a propagação, com o auxílio dos inúmeros médiuns que, também eles, os Espíritos, vão suscitando de todos os lados. Se tivesse havido unicamente um intérprete, por mais favorecido que fosse, o Espiritismo mal seria conhecido. Qualquer que fosse a classe a que pertencesse, tal intérprete houvera sido objeto das prevenções de muita gente e nem todas as nações o teriam aceitado, ao passo que os Espíritos se comunicam em todos os pontos da Terra, a todos os povos, a todas as seitas, a todos os partidos, e todos os aceitam. O Espiritismo não tem nacionalidade e não faz parte de nenhum culto existente; nenhuma classe social o impõe, visto que qualquer pessoa pode receber instruções de seus parentes e amigos de além-túmulo. Cumpre seja assim, para que ele possa conduzir todos os homens à fraternidade. Se não se mantivesse em terreno neutro, alimentaria as dissensões, em vez de apaziguá-las.

Nessa universalidade do ensino dos Espíritos reside a força do Espiritismo e, também, a causa de sua tão rápida propagação. Ao passo que a palavra de um só homem, mesmo com o concurso da imprensa, levaria séculos para chegar ao conhecimento de todos, milhares de vozes se fazem ouvir simultaneamente em todos os recantos do planeta, proclamando os mesmos princípios e transmitindo-os aos mais ignorantes, como aos mais doutos, a fim de que não haja deserdados. É uma vantagem de que não gozara ainda nenhuma das doutrinas surgidas até hoje. Se o Espiritismo, portanto, é uma verdade, não teme o malquerer dos homens, nem as revoluções morais, nem as subversões físicas do globo, porque nada disso pode atingir os Espíritos.

Não é essa, porém, a única vantagem que lhe decorre da sua excepcional posição. Ela lhe faculta inatacável garantia contra todos os cismas que pudessem provir, seja da ambição de alguns, seja das contradições de certos Espíritos. Tais contradições, não há negar, são um escolho; mas que traz consigo o remédio, ao lado do mal.

Sabe-se que os Espíritos, em virtude da diferença entre as suas capacidades, longe se acham de estar, individualmente considerados, na posse de toda a verdade; que nem a todos é dado penetrar certos mistérios; que o saber de cada um deles é proporcional à sua depuração; que os Espíritos vulgares mais não sabem do que muitos homens; que entre eles, como entre estes, há presunçosos e sofômanos, que julgam saber o que ignoram; sistemáticos, que tomam por verdades as suas ideias; enfim, que só os Espíritos da categoria mais elevada, os que já estão completamente desmaterializados, se encontram despidos das ideias e preconceitos terrenos; mas também é sabido que os Espíritos enganadores não escrupulizam em tomar nomes que lhes não pertencem, para impingirem suas utopias. Daí resulta que, com relação a tudo o que seja fora do âmbito do ensino exclusivamente moral, as revelações que cada um possa receber terão caráter individual, sem cunho de autenticidade; que devem ser consideradas opiniões pessoais de tal ou qual Espírito e que imprudente fora aceitá-las e propagá-las levianamente como verdades absolutas.

O primeiro exame comprobativo é, pois, sem contradita, o da razão, ao qual cumpre se submeta, sem exceção, tudo o que venha dos Espíritos. Toda teoria em manifesta contradição com o bom senso, com uma lógica rigorosa e com os dados positivos já adquiridos, deve ser rejeitada, por mais respeitável que seja o nome que traga como assinatura. Incompleto, porém, ficará esse exame em muitos casos, por efeito da falta de luzes de certas pessoas e das tendências de não poucas a tomar as próprias opiniões como juízes únicos da verdade. Assim sendo, que hão de fazer aqueles que não depositam confiança absoluta em si mesmos? Buscar o parecer da maioria e tomar por guia a opinião desta. De tal modo é que se deve proceder em face do que digam os Espíritos, que são os primeiros a nos fornecer os meios de consegui-lo.

A concordância no que ensinem os Espíritos é, pois, a melhor comprovação. Importa, no entanto, que ela se dê em determinadas condições. A mais fraca de todas ocorre quando um médium, a sós, interroga muitos Espíritos acerca de um ponto duvidoso. É evidente que, se ele estiver sob o império de uma obsessão, ou lidando com um Espírito mistificador, este lhe pode dizer a mesma coisa sob diferentes nomes. Tampouco garantia alguma suficiente haverá na conformidade que apresente o que se possa obter por diversos médiuns, num mesmo Centro, porque podem estar todos sob a mesma influência.

**Uma só garantia séria existe para o ensino dos Espíritos: a concordância que haja entre as revelações que eles façam espontaneamente, servindo-se de grande número de médiuns estranhos uns aos outros e em vários lugares.**

Vê-se bem que não se trata aqui das comunicações referentes a interesses secundários, mas do que respeita aos princípios mesmos da doutrina. Prova a experiência que, quando um princípio novo tem de ser enunciado, isso se dá espontaneamente em diversos pontos ao mesmo tempo e de modo idêntico, senão quanto à forma, quanto ao fundo.

Se, portanto, aprouver a um Espírito formular um sistema excêntrico, baseado unicamente nas suas ideias e com exclusão da verdade, pode ter-se a certeza de que tal sistema conservar-se-á circunscrito e cairá, diante das instruções dadas de todas as partes, conforme os múltiplos exemplos que já se conhecem. Foi essa unanimidade que pôs por terra todos os sistemas parciais que surgiram na origem do Espiritismo, quando cada um explicava à sua maneira os fenômenos, e antes que se conhecessem as leis que regem as relações entre o mundo visível e o mundo invisível.

Essa a base em que nos apoiamos, quando formulamos um princípio da doutrina. Não é porque esteja de acordo com as nossas ideias que o temos por verdadeiro. Não nos arvoramos, absolutamente, em árbitro supremo da verdade e a ninguém dizemos: Crede em tal coisa, porque somos nós que vo-lo dizemos.

A nossa opinião não passa, aos nossos próprios olhos, de uma opinião pessoal, que pode ser verdadeira ou falsa, visto não nos considerarmos mais infalível do que qualquer outro. Também não é porque um princípio nos foi ensinado que, para nós, ele exprime a verdade, mas porque recebeu a sanção da concordância.

Na posição em que nos encontramos, a receber comunicações de perto de mil centros espíritas sérios, disseminados pelos mais diversos pontos da Terra, achamo-nos em condições de observar sobre que princípio se estabelece a concordância. Essa observação é que nos tem guiado até hoje e é a que nos guiará em novos campos que o Espiritismo terá de explorar. Porque, estudando atentamente as comunicações vindas tanto da França como do estrangeiro, reconhecemos, pela natureza toda especial das revelações, que ele tende a entrar por um novo caminho e que lhe chegou o momento de dar um passo para diante. Essas revelações, feitas muitas vezes com palavras veladas, hão frequentemente passado despercebidas a muitos dos que as obtiveram. Outros julgaram-se os únicos a possuí-las. Tomadas insuladamente, elas, para nós, nenhum valor teriam; somente a coincidência lhes imprime gravidade. Depois, chegado o momento de serem entregues à publicidade, cada um se lembrará de haver obtido instruções no mesmo sentido. Esse movimento geral, que observamos e estudamos, com a assistência dos nossos guias espirituais, é que nos auxilia a julgar da oportunidade de fazermos ou não alguma coisa.

Essa verificação universal constitui uma garantia para a unidade futura do Espiritismo e anulará todas as teorias contraditórias. Aí é que, no porvir, se encontrará o critério da verdade. O que deu lugar ao êxito da doutrina exposta em 👻 [**O Livro dos Espíritos**](https://sergioshklr.github.io/doutrina.org/releases/LDE-2023-07-15.html) e em ✒️ [**O Livro dos Médiuns**](https://sergioshklr.github.io/doutrina.org/releases/LDM-2023-07-15.html) foi que em toda a parte todos receberam diretamente dos Espíritos a confirmação do que esses livros contêm. Se de todos os lados tivessem vindo os Espíritos contradizê-la, já de há muito haveriam aquelas obras experimentado a sorte de todas as concepções fantásticas. Nem mesmo o apoio da imprensa as salvaria do naufrágio, ao passo que, privadas como se viram desse apoio, não deixaram elas de abrir caminho e de avançar celeremente. É que tiveram o apoio dos Espíritos, cuja boa vontade não só compensou, como também sobrepujou o malquerer dos homens. Assim sucederá a todas as ideias que, emanando quer dos Espíritos, quer dos homens, não possam suportar a prova desse confronto, cuja força a ninguém é lícito contestar.

Suponhamos praza a alguns Espíritos ditar, sob qualquer título, um livro em sentido contrário; suponhamos mesmo que, com intenção hostil, objetivando desacreditar a doutrina, a malevolência suscitasse comunicações apócrifas; que influência poderiam exercer tais escritos, desde que de todos os lados os desmentissem os Espíritos? É com a adesão destes que se deve garantir aquele que queira lançar, em seu nome, um sistema qualquer. Do sistema de um só ao de todos, medeia a distância que vai da unidade ao infinito. Que poderão conseguir os argumentos dos detratores, sobre a opinião das massas, quando milhões de vozes amigas, provindas do Espaço, se façam ouvir em todos os recantos do Universo e no seio das famílias, a infirmá-los? A esse respeito já não foi a teoria confirmada pela experiência? Que é feito das inúmeras publicações que traziam a pretensão de arrasar o Espiritismo? Qual a que nem lhe retardou a marcha? Até agora, não se considera a questão desse ponto de vista, sem contestação um dos mais graves. Cada um contou consigo, sem contar com os Espíritos.

O princípio da concordância é também uma garantia contra as alterações que poderiam sujeitar o Espiritismo às seitas que se propusessem apoderar-se dele em proveito próprio e acomodá-lo à vontade. Quem quer que tentasse desviá-lo do seu providencial objetivo, malsucedido se veria, pela razão muito simples de que os Espíritos, em virtude da universalidade de seus ensinos, farão cair por terra qualquer modificação que se divorcie da verdade.

De tudo isso ressalta uma verdade capital: a de que aquele que quisesse opor-se à corrente de ideias estabelecida e sancionada poderia, é certo, causar uma pequena perturbação local e momentânea; nunca, porém, dominar o conjunto, mesmo no presente, nem, ainda menos, no futuro.

Também ressalta que as instruções dadas pelos Espíritos sobre os pontos ainda não elucidados da Doutrina não constituirão lei, enquanto essas instruções permanecerem insuladas; que elas não devem, por conseguinte, ser aceitas senão sob todas as reservas e a título de esclarecimento.

Daí a necessidade da maior prudência em dar-lhes publicidade; e, caso se julgue conveniente publicá-las, importa não as apresentar senão como opiniões individuais, mais ou menos prováveis, porém, carecendo sempre de confirmação. Essa confirmação é que se precisa aguardar, antes de apresentar um princípio como verdade absoluta, a menos se queira ser acusado de leviandade ou de credulidade irrefletida.

Com extrema sabedoria procedem os Espíritos superiores em suas revelações. Não atacam as grandes questões da Doutrina senão gradualmente, à medida que a inteligência se mostra apta a compreender verdade de ordem mais elevada e quando as circunstâncias se revelam propícias à emissão de uma ideia nova. Por isso é que logo de princípio não disseram tudo, e tudo ainda hoje não disseram, jamais cedendo à impaciência dos muito afoitos, que querem os frutos antes de estarem maduros. Fora, pois, supérfluo pretender adiantar-se ao tempo que a Providência assinou para cada coisa, porque, então, os Espíritos verdadeiramente sérios negariam o seu concurso. Os Espíritos levianos, pouco se preocupando com a verdade, a tudo respondem; daí vem que, sobre todas as questões prematuras, há sempre respostas contraditórias.

Os princípios acima não resultam de uma teoria pessoal: são consequência forçada das condições em que os Espíritos se manifestam. É evidente que, se um Espírito diz uma coisa de um lado, enquanto milhões de outros dizem o contrário algures, a presunção de verdade não pode estar com aquele que é o único ou quase o único de tal parecer. Ora, pretender alguém ter razão contra todos seria tão ilógico da parte dos Espíritos, quanto da parte dos homens. Os Espíritos verdadeiramente ponderados, se não se sentem suficientemente esclarecidos sobre uma questão, nunca a resolvem de modo absoluto; declaram que apenas a tratam do seu ponto de vista e aconselham que se aguarde a confirmação.

Por grande, bela e justa que seja uma ideia, impossível é que desde o primeiro momento congregue todas as opiniões. Os conflitos que daí decorrem são consequência inevitável do movimento que se opera; eles são mesmo necessários para maior realce da verdade e convém se produzam desde logo, para que as ideias falsas prontamente sejam postas de lado. Os espíritas que a esse respeito alimentassem qualquer temor podem ficar perfeitamente tranquilos: todas as pretensões insuladas cairão, pela força mesma das coisas, diante do enorme e poderoso critério da concordância universal.

Não será à opinião de um homem que se aliarão os outros, mas à voz unânime dos Espíritos; não será um homem, nem nós, nem qualquer outro que fundará a ortodoxia espírita; tampouco será um Espírito que se venha impor a quem quer que seja: será a universalidade dos Espíritos que se comunicam em toda a Terra, por ordem de Deus. Esse o caráter essencial da Doutrina Espírita; essa a sua força, a sua autoridade. Quis Deus que a sua lei assentasse em base inamovível e por isso não lhe deu por fundamento a cabeça frágil de um só.

Diante de tão poderoso areópago, onde não se conhecem corrilhos, nem rivalidades ciosas, nem seitas, nem nações, é que virão quebrar-se todas as oposições, todas as ambições, todas as pretensões à supremacia individual; **é que nos quebraríamos nós mesmos, se quiséssemos substituir os seus decretos soberanos pelas nossas próprias ideias**. Só Ele decidirá todas as questões litigiosas, imporá silêncio às dissidências e dará razão a quem a tenha. Diante desse imponente acordo de todas **as vozes do Céu**, que pode a opinião de um homem ou de um Espírito? menos do que a gota de água que se perde no oceano, menos do que a voz da criança que a tempestade abafa.

A opinião universal, eis o juiz supremo, o que se pronuncia em última instância. Formam-na todas as opiniões individuais. Se uma destas é verdadeira, apenas tem na balança o seu peso relativo. Se é falsa, não pode prevalecer sobre todas as demais. Nesse imenso concurso, as individualidades se apagam, o que constitui novo insucesso para o orgulho humano.

Já se desenha o harmonioso conjunto. Este século não passará sem que ele resplandeça em todo o seu brilho, de modo a dissipar todas as incertezas, porquanto daqui até lá potentes vozes terão recebido a missão de se fazer ouvir, para congregar os homens sob a mesma bandeira, uma vez que o campo se ache suficientemente lavrado. Enquanto isso se não dá, aquele que flutua entre dois sistemas opostos pode observar em que sentido se forma a opinião geral; essa será a indicação certa do sentido em que se pronuncia a maioria dos Espíritos, nos diversos pontos em que se comunicam, e um sinal não menos certo de qual dos dois sistemas prevalecerá.

<a href="#ESE-0-03">🔼 voltar um nível</a>

---

<a name="ESE-0-03-03"><code>ESE-0-03-03</code></a>

<h4>📃 3. Notícias históricas</h4>

Para bem se compreenderem algumas passagens dos Evangelhos, necessário se faz conhecer o valor de muitas palavras nelas frequentemente empregadas e que caracterizam o estado dos costumes e da sociedade judia naquela época. Já não tendo para nós o mesmo sentido, essas palavras foram com frequência mal-interpretadas, causando isso uma espécie de incerteza. A inteligência da significação delas explica, ademais, o verdadeiro sentido de certas máximas que, à primeira vista, parecem singulares.

- **Samaritanos** – Após o cisma das dez tribos, Samaria se constituiu a capital do reino dissidente de Israel. Destruída e reconstruída várias vezes, tornou-se, sob os romanos, a cabeça da Samaria, uma das quatro divisões da Palestina. Herodes, chamado o Grande, a embelezou de suntuosos monumentos e, para lisonjear Augusto, lhe deu o nome de Augusta, em grego Sebaste.

  Os samaritanos estiveram quase constantemente em guerra com os reis de Judá. Aversão profunda, datando da época da separação, perpetuou-se entre os dois povos, que evitavam todas as relações recíprocas. Aqueles, para tornarem maior a cisão e não terem de vir a Jerusalém pela celebração das festas religiosas, construíram para si um templo particular e adotaram algumas reformas. Somente admitiam o Pentateuco, que continha a lei de Moisés, e rejeitavam todos os outros livros que a esse foram posteriormente anexados. Seus livros sagrados eram escritos em caracteres hebraicos da mais alta antiguidade. Para os judeus ortodoxos, eles eram heréticos e, portanto, desprezados, anatematizados e perseguidos. O antagonismo das duas nações tinha, pois, por fundamento único a divergência das opiniões religiosas; se bem fosse a mesma a origem das crenças de uma e outra. Eram os protestantes desse tempo.

  Ainda hoje se encontram samaritanos em algumas regiões do Levante, particularmente em Nablus e em Jaffa. Observam a lei de Moisés com mais rigor que os outros judeus e só entre si contraem alianças.

- **Nazarenos** – Nome dado, na antiga lei, aos judeus que faziam voto, perpétuo ou temporário, de guardar perfeita pureza. Eles se comprometiam a observar a castidade, a abster-se de bebidas alcoólicas e a conservar a cabeleira. Sansão, Samuel e João Batista eram nazarenos.

  Mais tarde, os judeus deram esse nome aos primeiros cristãos, por alusão a Jesus de Nazaré.

  Também foi essa a denominação de uma seita herética dos primeiros séculos da Era Cristã, a qual, do mesmo modo que os ebionitas, de quem adotava certos princípios, misturava as práticas do mosaísmo com os dogmas cristãos, seita essa que desapareceu no século quarto.

- **Publicanos** – Eram assim chamados, na antiga Roma, os cavalheiros arrendatários das taxas públicas, incumbidos da cobrança dos impostos e das rendas de toda espécie, quer em Roma mesma, quer nas outras partes do Império. Eram como os arrendatários gerais e arrematadores de taxas do antigo regímen na França e que ainda existem nalgumas regiões. Os riscos a que estavam sujeitos faziam que os olhos se fechassem para as riquezas que muitas vezes adquiriam e que, da parte de alguns, eram frutos de exações e de lucros escandalosos. O nome de publicano se estendeu mais tarde a todos os que superintendiam os dinheiros públicos e aos agentes subalternos. Hoje esse termo se emprega em sentido pejorativo, para designar os financistas e os agentes pouco escrupulosos de negócios. Diz-se por vezes: “Ávido como um publicano, rico como um publicano”, com referência a riquezas de mau quilate.

  De toda a dominação romana, o imposto foi o que os judeus mais dificilmente aceitaram e o que mais irritação causou entre eles. Daí nasceram várias revoltas, fazendo-se do caso uma questão religiosa, por ser considerada contrária à Lei. Constituiu-se, mesmo, um partido poderoso, a cuja frente se pôs um certo Judá, apelidado o Gaulonita, tendo por princípio o não pagamento do imposto. Os judeus, pois, abominavam o imposto e, como consequência, todos os que eram encarregados de arrecadá-lo, donde a aversão que votavam aos publicanos de todas as categorias, entre os quais podiam encontrar-se pessoas muito estimáveis, mas que, em virtude das suas funções, eram desprezadas, assim como os que com elas mantinham relações, os quais se viam atingidos pela mesma reprovação. Os judeus de destaque consideravam um comprometimento ter com eles intimidade.

- **Portageiros** – Eram os arrecadadores de baixa categoria, incumbidos principalmente da cobrança dos direitos de entrada nas cidades. Suas funções correspondiam mais ou menos à dos empregados de alfândega e recebedores dos direitos de barreira. Compartilhavam da repulsa que pesava sobre os publicanos em geral. Essa a razão por que, no Evangelho, se depara frequentemente com a palavra publicano ao lado da expressão gente de má vida. Tal qualificação não implicava a de debochados ou vagabundos. Era um termo de desprezo, sinônimo de gente de má companhia, gente indigna de conviver com pessoas distintas.

- **Fariseus** (do hebreu *parush*, divisão, separação) – A tradição constituía parte importante da teologia dos judeus. Consistia numa compilação das interpretações sucessivamente dadas ao sentido das Escrituras e tornadas artigos de dogma. Constituía, entre os doutores, assunto de discussões intermináveis, as mais das vezes sobre simples questões de palavras ou de formas, no gênero das disputas teológicas e das sutilezas da escolástica da Idade Média. Daí nasceram diferentes seitas, cada uma das quais pretendia ter o monopólio da verdade, detestando-se umas às outras, como sói acontecer.

  Entre essas seitas, a mais influente era a dos fariseus, que teve por chefe Hillel, [^2] doutor judeu nascido na Babilônia, fundador de uma escola célebre, onde se ensinava que só se devia depositar fé nas Escrituras. Sua origem remonta a 180 ou 200 anos antes de Jesus Cristo. Os fariseus, em diversas épocas, foram perseguidos, especialmente sob Hircano — soberano pontífice e rei dos judeus —, Aristóbulo e Alexandre, rei da Síria. Este último, porém, lhes deferiu honras e restituiu os bens, de sorte que eles readquiriram o antigo poderio e o conservaram até a ruína de Jerusalém, no ano 70 da Era Cristã, época em que se lhes apagou o nome, em consequência da dispersão dos judeus.

  Tomavam parte ativa nas controvérsias religiosas. Servis cumpridores das práticas exteriores do culto e das cerimônias; cheios de um zelo ardente de proselitismo, inimigos dos inovadores, afetavam grande severidade de princípios; mas, sob as aparências de meticulosa devoção, ocultavam costumes dissolutos, muito orgulho e, acima de tudo, excessiva ânsia de dominação. Tinham a religião mais como meio de chegarem a seus fins, do que como objeto de fé sincera. Da virtude nada possuíam, além das exterioridades e da ostentação; entretanto, por umas e outras, exerciam grande influência sobre o povo, a cujos olhos passavam por santas criaturas. Daí o serem muito poderosos em Jerusalém.

  Acreditavam, ou, pelo menos, fingiam acreditar na Providência, na imortalidade da alma, na eternidade das penas e na ressurreição dos mortos. (Cap. IV, item 4.) Jesus, que prezava, sobretudo, a simplicidade e as qualidades da alma, que, na lei, preferia o espírito, que vivifica, à letra, que mata, se aplicou, durante toda a sua missão, a lhes desmascarar a hipocrisia, pelo que tinha neles encarniçados inimigos. Essa a razão por que se ligaram aos príncipes dos sacerdotes para amotinar contra Ele o povo e eliminá-lo.

- **Escribas** – Nome dado, a princípio, aos secretários dos reis de Judá e a certos intendentes dos exércitos judeus. Mais tarde, foi aplicado especialmente aos doutores que ensinavam a lei de Moisés e a interpretavam para o povo. Faziam causa comum com os fariseus, de cujos princípios partilhavam, bem como da antipatia que aqueles votavam aos inovadores. Daí o envolvê-los Jesus na reprovação que lançava aos fariseus.

- **Sinagoga** (do grego *synagogê*, assembleia, congregação) – Um único templo havia na Judeia, o de Salomão, em Jerusalém, onde se celebravam as grandes cerimônias do culto. Os judeus, todos os anos, lá iam em peregrinação para as festas principais, como as da Páscoa, da Dedicação e dos Tabernáculos. Por ocasião dessas festas é que Jesus também costumava ir lá. As outras cidades não possuíam templos, mas apenas sinagogas: edifícios onde os judeus se reuniam aos sábados, para fazer preces públicas, sob a chefia dos anciães, dos escribas, ou doutores da Lei. Nelas também se realizavam leituras dos livros sagrados, seguidas de explicações e comentários, atividades das quais qualquer pessoa podia participar. Por isso é que Jesus, sem ser sacerdote, ensinava aos sábados nas sinagogas.

  Desde a ruína de Jerusalém e a dispersão dos judeus, as sinagogas, nas cidades por eles habitadas, servem-lhes de templos para a celebração do culto.

- **Saduceus** – Seita judia, que se formou por volta do ano 248 antes de Jesus Cristo e cujo nome lhe veio do de Sadoque, seu fundador. Não criam na imortalidade, nem na ressurreição, nem nos anjos bons e maus. Entretanto, criam em Deus; nada, porém, esperando após a morte, só o serviam tendo em vista recompensas temporais, ao que, segundo eles, se limitava a Providência divina. Assim pensando, tinham a satisfação dos sentidos físicos por objetivo essencial da vida. Quanto às Escrituras, atinham-se ao texto da lei antiga. Não admitiam a tradição, nem interpretações quaisquer. Colocavam as boas obras e a observância pura e simples da Lei acima das práticas exteriores do culto. Eram, como se vê, os materialistas, os deístas e os sensualistas da época. Seita pouco numerosa, mas que contava em seu seio importantes personagens e se tornou um partido político oposto constantemente aos fariseus.

- **Essênios** ou **Esseus** – Também seita judia fundada cerca do ano 150 antes de Jesus Cristo, ao tempo dos macabeus, e cujos membros, habitando uma espécie de mosteiros, formavam entre si uma como associação moral e religiosa. Distinguiam-se pelos costumes brandos e por austeras virtudes, ensinavam o amor a Deus e ao próximo, a imortalidade da alma e acreditavam na ressurreição. Viviam em celibato, condenavam a escravidão e a guerra, punham em comunhão os seus bens e se entregavam à agricultura.

  Contrários aos saduceus sensuais, que negavam a imortalidade; aos fariseus de rígidas práticas exteriores e de virtudes apenas aparentes, nunca os essênios tomaram parte nas querelas que tornaram antagonistas aquelas duas outras seitas. Pelo gênero de vida que levavam, assemelhavam-se muito aos primeiros cristãos, e os princípios da moral que professavam induziram muitas pessoas a supor que Jesus, antes de dar começo à sua missão pública, lhes pertencera à comunidade. É certo que ele há de tê-la conhecido, mas nada prova que se lhe houvesse filiado, sendo, pois, hipotético tudo quanto a esse respeito se escreveu. [^3]

- **Terapeutas** (do grego *therapeutai*, formado de therapeuein, servir, cuidar, isto é: servidores de Deus ou curadores) – Eram sectários judeus contemporâneos do Cristo, estabelecidos principalmente em Alexandria, no Egito. Tinham muita relação com os essênios, cujos princípios adotavam, aplicando-se, como esses últimos, à prática de todas as virtudes. Eram de extrema frugalidade na alimentação. Também celibatários, votados à contemplação e vivendo vida solitária, constituíam uma verdadeira ordem religiosa. Fílon, filósofo judeu platônico, de Alexandria, foi o primeiro a falar dos terapeutas, considerando-os uma seita do Judaísmo. Eusébio, São Jerônimo e outros Pais da Igreja pensam que eles eram cristãos. Fossem tais, ou fossem judeus, o que é evidente é que, do mesmo modo que os essênios, eles representam o traço de união entre o Judaísmo e o Cristianismo.

[^2]: N.E. de 1947: Não confundir esse Hillel que fundou a seita dos fariseus com o seu homônimo que viveu duzentos anos mais tarde e estabeleceu os princípios religiosos e sociais de um sistema todo de tolerância e amor, sistema hoje conhecido por Hilelismo.

[^3]: Nota de Allan Kardec: A morte de Jesus, supostamente escrita por um essênio, é obra inteiramente apócrifa, cujo único fim foi servir de apoio a uma opinião. Ela traz em si mesma a prova da sua origem moderna.

<a href="#ESE-0-03">🔼 voltar um nível</a>

---

<a name="ESE-0-03-04"><code>ESE-0-03-04</code></a>

<h4>📃 4. Sócrates e Platão, precursores da ideia cristã e do Espiritismo</h4>

Do fato de haver Jesus conhecido a seita dos essênios, fora errôneo concluir-se que a sua doutrina hauriu-a ele dessa seita e que, se houvera vivido noutro meio, teria professado outros princípios. As grandes ideias jamais irrompem de súbito. As que assentam sobre a verdade sempre têm precursores que lhes preparam parcialmente os caminhos. Depois, chegando o tempo, envia Deus um homem com a missão de resumir, coordenar e completar os elementos esparsos, de reuni-los em corpo de doutrina. Desse modo, não surgindo bruscamente, a ideia, ao aparecer, encontra espíritos dispostos a aceitá-la. Tal o que se deu com a ideia cristã, que foi pressentida muitos séculos antes de Jesus e dos essênios, tendo por principais precursores Sócrates e Platão.

Sócrates, como o Cristo, nada escreveu, ou, pelo menos, nenhum escrito deixou. Como o Cristo, teve a morte dos criminosos, vítima do fanatismo, por haver atacado as crenças que encontrara e colocado a virtude real acima da hipocrisia e do simulacro das formas; por haver, numa palavra, combatido os preconceitos religiosos. Do mesmo modo que Jesus, a quem os fariseus acusavam de estar corrompendo o povo com os ensinamentos que lhe ministrava, também ele foi acusado, pelos fariseus do seu tempo, visto que sempre os houve em todas as épocas, por proclamar o dogma da unidade de Deus, da imortalidade da alma e da vida futura. Assim como a doutrina de Jesus só a conhecemos pelo que escreveram seus discípulos, da de Sócrates só temos conhecimento pelos escritos de seu discípulo Platão. Julgamos conveniente resumir aqui os pontos de maior relevo, para mostrar a concordância deles com os princípios do Cristianismo

Aos que considerarem esse paralelo uma profanação e pretendam que não pode haver paridade entre a doutrina de um pagão e a do Cristo, diremos que não era pagã a de Sócrates, pois que objetivava combater o paganismo; que a de Jesus, mais completa e mais depurada do que aquela, nada tem que perder com a comparação; que a grandeza da missão divina do Cristo não pode ser diminuída; que, ademais, trata-se de um fato da História, que a ninguém será possível apagar. O homem há chegado a um ponto em que a luz emerge por si mesma de sob o alqueire. Ele se acha maduro bastante para encará-la; tanto pior para os que não ousem abrir os olhos. Chegou o tempo de se considerarem as coisas de modo amplo e elevado, não mais do ponto de vista mesquinho e acanhado dos interesses de seitas e de castas.

Além disso, estas citações provarão que, se Sócrates e Platão pressentiram a ideia cristã, em seus escritos também se nos deparam os princípios fundamentais do Espiritismo.

**Resumo da doutrina de Sócrates e de Platão**

 1. >O homem é uma alma encarnada. Antes da sua encarnação, existia unida aos tipos primordiais das ideias do verdadeiro, do bem e do belo; separa-se deles, encarnando, e, recordando o seu passado, é mais ou menos atormentada pelo desejo de voltar a ele.

Não se pode enunciar mais claramente a distinção e independência entre o princípio inteligente e o princípio material. É, além disso, a doutrina da preexistência da alma; da vaga intuição que ela guarda de um outro mundo, a que aspira; da sua sobrevivência ao corpo; da sua saída do mundo espiritual, para encarnar, e da sua volta a esse mesmo mundo, após a morte. É, finalmente, o gérmen da doutrina dos anjos decaídos.

2. >A alma se transvia e perturba, quando se serve do corpo para considerar qualquer objeto; tem vertigem, como se estivesse ébria, porque se prende a coisas que estão, por sua natureza, sujeitas a mudanças; ao passo que, quando contempla a sua própria essência, dirige-se para o que é puro, eterno, imortal, e, sendo ela dessa natureza, permanece aí ligada, por tanto tempo quanto possa. Cessam então os seus transviamentos, pois que está unida ao que é imutável e a esse estado da alma é que se chama sabedoria.

Assim, ilude a si mesmo o homem que considera as coisas de modo terra a terra, do ponto de vista material. Para as apreciar com justeza, tem de as ver do alto, isto é, do ponto de vista espiritual. Aquele, pois, que está de posse da verdadeira sabedoria, tem de isolar do corpo a alma, para ver com os olhos do Espírito. É o que ensina o Espiritismo. (ESE? Cap. 2, item 5.)

3. >Enquanto tivermos o nosso corpo e a alma se achar mergulhada nessa corrupção, nunca possuiremos o objeto dos nossos desejos: a verdade. Com efeito, o corpo nos suscita mil obstáculos pela necessidade em que nos achamos de cuidar dele. Ademais, ele nos enche de desejos, de apetites, de temores, de mil quimeras e de mil tolices, de maneira que, com ele, impossível se nos torna ser ajuizados, nem por um instante. Todavia se não nos é possível conhecer puramente coisa alguma enquanto a alma nos está ligada ao corpo, de duas uma: ou jamais conheceremos a verdade, ou só a conheceremos após a morte. Libertos da loucura do corpo, conversaremos então, lícito é esperá-lo, com homens igualmente libertos e conheceremos, por nós mesmos, a essência das coisas. Essa a razão por que os verdadeiros filósofos se exercitam em morrer e a morte não se lhes afigura, de modo nenhum, temível.

Está aí o princípio das faculdades da alma obscurecidas por motivo dos órgãos corporais e o da expansão dessas faculdades depois da morte. Trata-se, porém, apenas de almas já depuradas; o mesmo não se dá com as almas impuras. (🔥 **O Céu e o Inferno**, 1a Parte, cap. 2; 2a Parte, cap. 1.)

4. >A alma impura, nesse estado, se encontra oprimida e se vê de novo arrastada para o mundo visível, pelo horror do que é invisível e imaterial. Erra, então, diz-se, em torno dos monumentos e dos túmulos, junto aos quais já se têm visto tenebrosos fantasmas, quais devem ser as imagens das almas que deixaram o corpo sem estarem ainda inteiramente puras, que ainda conservam alguma coisa da forma material, o que faz que a vista humana possa percebê-las. Não são as almas dos bons; são, porém, as dos maus, que se veem forçadas a vagar por esses lugares, onde arrastam consigo a pena da primeira vida que tiveram e onde continuam a vagar até que os apetites inerentes à forma material de que se revestiram as reconduzam a um corpo. Então, sem dúvida, retomam os mesmos costumes que durante a primeira vida constituíam objeto de suas predileções.

Não somente o princípio da reencarnação se acha aí claramente expresso, mas também o estado das almas que se mantêm sob o jugo da matéria é descrito qual o mostra o Espiritismo nas evocações. Mais ainda: no tópico acima se diz que a reencarnação num corpo material é consequência da impureza da alma, enquanto as almas purificadas se encontram isentas de reencarnar. Outra coisa não diz o Espiritismo, acrescentando apenas que a alma, que boas resoluções tomou na erraticidade e que possui conhecimentos adquiridos, traz, ao renascer, menos defeitos, mais virtudes e ideias intuitivas do que tinha na sua existência precedente. Assim, cada existência lhe marca um progresso intelectual e moral. (🔥 **O Céu e o Inferno**, 2a Parte: Exemplos.)

5. >Após a nossa morte, o gênio (daïmon, demônio), que nos fora designado durante a vida, leva-nos a um lugar onde se reúnem todos os que têm de ser conduzidos ao Hades, para serem julgados. As almas, depois de haverem estado no Hades o tempo necessário, são reconduzidas a esta vida em múltiplos e longos períodos.

É a doutrina dos anjos guardiães, ou Espíritos protetores, e das reencarnações sucessivas, em seguida a intervalos mais ou menos longos de erraticidade.

6. >Os demônios ocupam o espaço que separa o céu da Terra; constituem o laço que une o Grande Todo a si mesmo. Não entrando nunca a divindade em comunicação direta com o homem, é por intermédio dos demônios que os deuses entram em comércio e se entretêm com ele, quer durante a vigília, quer durante o sono.

A palavra daïmon, da qual fizeram o termo demônio, não era, na Antiguidade, tomada à má parte, como nos tempos modernos. Não designava exclusivamente seres malfazejos, mas todos os Espíritos, em geral, dentre os quais se destacavam os Espíritos superiores, chamados deuses, e os menos elevados, ou demônios propriamente ditos, que comunicavam diretamente com os homens. Também o Espiritismo diz que os Espíritos povoam o Espaço; que Deus só se comunica com os homens por intermédio dos Espíritos puros, que são os incumbidos de lhes transmitir as vontades; que os Espíritos se comunicam com eles durante a vigília e durante o sono. Ponde, em lugar da palavra demônio, a palavra Espírito e tereis a Doutrina Espírita; ponde a palavra anjo e tereis a doutrina cristã.

7. >A preocupação constante do filósofo (tal como o compreendiam Sócrates e Platão) é a de tomar o maior cuidado com a alma, menos pelo que respeita a esta vida, que não dura mais que um instante, do que tendo em vista a eternidade. Desde que a alma é imortal, não será prudente viver visando à eternidade?

O Cristianismo e o Espiritismo ensinam a mesma coisa.

8. >Se a alma é imaterial, tem de passar, após essa vida, a um mundo igualmente invisível e imaterial, do mesmo modo que o corpo, decompondo-se, volta à matéria. Muito importa, no entanto, distinguir bem a alma pura, verdadeiramente imaterial, que se alimente, como Deus, de ciência e pensamentos, da alma mais ou menos maculada de impurezas materiais, que a impedem de elevar-se para o divino e a retêm nos lugares da sua estada na Terra.

Sócrates e Platão, como se vê, compreendiam perfeitamente os diferentes graus de desmaterialização da alma. Insistem na diversidade de situação que resulta para elas da sua maior ou menor pureza. O que eles diziam, por intuição, o Espiritismo o prova com os inúmeros exemplos que nos põe sob as vistas. (🔥**O Céu e o Inferno**, 2a Parte.)

9. >Se a morte fosse a dissolução completa do homem, muito ganhariam com a morte os maus, pois se veriam livres, ao mesmo tempo, do corpo, da alma e dos vícios. Aquele que guarnecer a alma, não de ornatos estranhos, mas com os que lhe são próprios, só esse poderá aguardar tranquilamente a hora da sua partida para o outro mundo.

Equivale isso a dizer que o materialismo, com o proclamar para depois da morte o nada, anula toda responsabilidade moral ulterior, sendo, conseguintemente, um incentivo para o mal; que o mau tem tudo a ganhar do nada. Somente o homem que se despojou dos vícios e se enriqueceu de virtudes, pode esperar com tranquilidade o despertar na outra vida. Por meio de exemplos, que todos os dias nos apresenta, o Espiritismo mostra quão penoso é, para o mau, o passar desta à outra vida, a entrada na vida futura. (🔥 **O Céu e o Inferno**, 2a Parte, cap. 1.)

10. >O corpo conserva bem impressos os vestígios dos cuidados de que foi objeto e dos acidentes que sofreu. Dá-se o mesmo com a alma. Quando despida do corpo, ela guarda, evidentes, os traços do seu caráter, de suas afeições e as marcas que lhe deixaram todos os atos de sua vida. Assim, a maior desgraça que pode acontecer ao homem é ir para o outro mundo com a alma carregada de crimes. Vês, Cálicles, que nem tu, nem Pólux, nem Górgias podereis provar que devamos levar outra vida que nos seja útil quando estejamos do outro lado. De tantas opiniões diversas, a única que permanece inabalável é a de que mais vale receber do que cometer uma injustiça e que, acima de tudo, devemos cuidar, não de parecer, mas de ser homem de bem. (Colóquios de Sócrates com seus discípulos, na prisão.)

Depara-se-nos aqui outro ponto capital, confirmado hoje pela experiência: o de que a alma não depurada conserva as ideias, as tendências, o caráter e as paixões que teve na Terra. Não é inteiramente cristã esta máxima: mais vale receber do que cometer uma injustiça? O mesmo pensamento exprimiu Jesus, usando desta figura: 

| Se alguém vos bater numa face, apresentai-lhe a outra. |
| --- |
| ✝️ LIVRO? Cap. 12, itens 7 e 8 |

11. >De duas uma: ou a morte é uma destruição absoluta, ou é passagem da alma para outro lugar. Se tudo tem de extinguir-se, a morte será como uma dessas raras noites que passamos sem sonho e sem nenhuma consciência de nós mesmos. Todavia, se a morte é apenas uma mudança de morada, a passagem para o lugar onde os mortos se têm de reunir, que felicidade a de encontrarmos lá aqueles a quem conhecemos! O meu maior prazer seria examinar de perto os habitantes dessa outra morada e de distinguir lá, como aqui, os que são dignos dos que se julgam tais e não o são. No entanto, é tempo de nos separarmos, eu para morrer, vós para viverdes. (Sócrates aos seus juízes.)

Segundo Sócrates, os que viveram na Terra se encontram após a morte e se reconhecem. Mostra o Espiritismo que continuam as relações que entre eles se estabeleceram, de tal maneira que a morte não é nem uma interrupção, nem a cessação da vida, mas uma transformação, sem solução de continuidade.

Houvessem Sócrates e Platão conhecido os ensinos que o Cristo difundiu quinhentos anos mais tarde e os que agora o Espiritismo espalha, e não teriam falado de outro modo. Não há nisso, entretanto, o que surpreenda, se considerarmos que as grandes verdades são eternas e que os Espíritos adiantados hão de tê-las conhecido antes de virem à Terra, para onde as trouxeram; que Sócrates, Platão e os grandes filósofos daqueles tempos bem podem, depois, ter sido dos que secundaram o Cristo na sua missão divina, escolhidos para esse fim precisamente por se acharem, mais do que outros, em condições de lhe compreenderem as sublimes lições; que, finalmente, pode dar-se façam eles agora parte da plêiade dos Espíritos encarregados de ensinar aos homens as mesmas verdades.

12. >Nunca se deve retribuir com outra uma injustiça, nem fazer mal a ninguém, seja qual for o dano que nos hajam causado. Poucos, no entanto, serão os que admitam esse princípio, e os que se desentenderem a tal respeito nada mais farão, sem dúvida, do que se votarem uns aos outros mútuo desprezo.

Não está aí o princípio de caridade, que prescreve não se retribua o mal com o mal e se perdoe aos inimigos?

13. >É pelos frutos que se conhece a árvore. Toda ação deve ser qualificada pelo que produz: qualificá-la de má, quando dela provenha mal; de boa, quando dê origem ao bem.

Esta máxima: “Pelos frutos é que se conhece a árvore”, se encontra muitas vezes repetida textualmente no Evangelho.

14. >A riqueza é um grande perigo. Todo homem que ama a riqueza não ama a si mesmo, nem ao que é seu; ama a uma coisa que lhe é ainda mais estranha do que o que lhe pertence. (ESE? Cap. 16)

15. >As mais belas preces e os mais belos sacrifícios prazem menos à Divindade do que uma alma virtuosa que faz esforços por se lhe assemelhar. Grave coisa fora que os deuses dispensassem mais atenção às nossas oferendas do que à nossa alma; se tal se desse, poderiam os mais culpados conseguir que eles se lhes tornassem propícios. Mas não: verdadeiramente justos e retos só o são os que, por suas palavras e atos, cumprem seus deveres para com os deuses e para com os homens. (ESE? Cap. 10, itens 7 e 8.)

16. >Chamo homem vicioso a esse amante vulgar, que mais ama o corpo do que a alma. O amor está por toda parte em a Natureza, que nos convida ao exercício da nossa inteligência; até no movimento dos astros o encontramos. É o amor que orna a Natureza de seus ricos tapetes; ele se enfeita e fixa morada onde se lhe deparem flores e perfumes. É ainda o amor que dá paz aos homens, calma ao mar, silêncio aos ventos e sono à dor.

O amor, que há de unir os homens por um laço fraternal, é uma consequência dessa teoria de Platão sobre o amor universal como Lei da Natureza. Tendo dito Sócrates que: O amor não é nem um deus, nem um mortal, mas um grande demônio, isto é, um grande Espírito que preside ao amor universal, essa proposição lhe foi imputada como crime.

17. >A virtude não pode ser ensinada; vem por dom de Deus aos que a possuem.

É quase a doutrina cristã sobre a graça; mas se a virtude é um dom de Deus, é um favor e, então, pode perguntar-se por que não é concedida a todos. Por outro lado, se é um dom, carece de mérito para aquele que a possui. O Espiritismo é mais explícito, dizendo que aquele que possui a virtude a adquiriu por seus esforços, em existências sucessivas, despojando-se pouco a pouco de suas imperfeições. A graça é a força que Deus faculta ao homem de boa vontade para se expungir do mal e praticar o bem.

18. >É disposição natural em todos nós a de nos apercebermos muito menos dos nossos defeitos, do que dos de outrem.

Diz o Evangelho: 

| Vedes a palha que está no olho do vosso próximo e não vedes a trave que está no vosso. |
| --- |
| ✝️ Mateus cap. 7 vers. 5 e Lucas cap. 6 vers. 42 |
| LIVRO? Cap. 10, itens 9 e 10 |

19. >Se os médicos são malsucedidos, tratando da maior parte das moléstias, é que tratam do corpo, sem tratarem da alma. Ora, não se achando o todo em bom estado, impossível é que uma parte dele passe bem.

O Espiritismo fornece a chave das relações existentes entre a alma e o corpo e prova que um reage incessantemente sobre o outro. Abre, assim, nova senda para a Ciência. Com o lhe mostrar a verdadeira causa de certas afecções, faculta-lhe os meios de as combater. Quando a Ciência levar em conta a ação do elemento espiritual na economia, menos frequentes serão os seus maus êxitos.

20. >Todos os homens, a partir da infância, muito mais fazem de mal do que de bem.

Essa sentença de Sócrates fere a grave questão da predominância do mal na Terra, questão insolúvel sem o conhecimento da pluralidade dos mundos e da destinação do planeta terreno, habitado apenas por uma fração mínima da Humanidade. Somente o Espiritismo resolve essa questão, que se encontra explanada aqui adiante, nos capítulos (ESE 2, 3 e 4).

21. >Ajuizado serás, não supondo que sabes o que ignoras.

Isso vai com vistas aos que criticam aquilo de que desconhecem até mesmo os primeiros termos. Platão completa esse pensamento de Sócrates, dizendo: 

- Tentemos, primeiro, torná-los, se for possível, mais honestos nas palavras; se não o forem, não nos preocupemos com eles e não procuremos senão a verdade. Cuidemos de instruir-nos, mas não nos injuriemos.

É assim que devem proceder os espíritas com relação aos seus contraditores de boa ou má-fé. Revivesse hoje Platão e acharia as coisas quase como no seu tempo e poderia usar da mesma linguagem. Também Sócrates toparia criaturas que zombariam da sua crença nos Espíritos e que o qualificariam de louco, assim como ao seu discípulo Platão.

Foi por haver professado esses princípios que Sócrates se viu ridiculizado, depois acusado de impiedade e condenado a beber cicuta. Tão certo é que, levantando contra si os interesses e os preconceitos que elas ferem, as grandes verdades novas não se podem firmar sem luta e sem fazer mártires.

<a href="#ESE-0-03">🔼 voltar um nível</a>

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

<a name="ESE-1-01"><code>ESE-1-01</code></a>

<h3>📑 01. Não vim destruir a lei</h3>

- [`ESE-1-01-01` 📃 Moisés](#ESE-1-01-01)
- [`ESE-1-01-02` 📃 O Cristo](#ESE-1-01-02)
- [`ESE-1-01-03` 📃 Espiritismo](#ESE-1-01-03)
- [`ESE-1-01-04` 📃 Aliança da Ciência e da Religião](#ESE-1-01-04)
- [`ESE-1-01-05` 📃 Instruções dos Espíritos: A nova era](#ESE-1-01-05)

<a href="#ESE-1">🔼 voltar um nível</a>

---

<a name="ESE-1-01-01"><code>ESE-1-01-01</code></a>

<h4>📃 Moisés</h4>

1. >Não penseis que vim revogar a lei ou os profetas; não vim revogar, mas cumprir. Porque em verdade vos digo: Enquanto não passar o céu e a terra, de modo nenhum passará da lei um só i ou um só til, sem que tudo se cumpra.
   ><br /><br />
   >✝️ Mateus, cap. 5, vers. 17-18

2. Na lei moisaica, há duas partes distintas: a Lei de Deus, promulgada no monte Sinai, e a lei civil ou disciplinar, decretada por Moisés. Uma é invariável; a outra, apropriada aos costumes e ao caráter do povo, se modifica com o tempo.

   A Lei de Deus está formulada nos dez mandamentos seguintes:

   >Eu sou o Senhor, vosso Deus, que vos tirei do Egito, da casa da servidão. Não tereis, diante de mim, outros deuses estrangeiros. Não fareis imagem esculpida, nem figura alguma do que está em cima do céu, nem embaixo na Terra, nem do que quer que esteja nas águas sob a terra. Não os adorareis e não lhes prestareis culto soberano. [^4]
   ><br /><br />
   >Não pronunciareis em vão o nome do Senhor, vosso Deus.
   ><br /><br />
   >Lembrai-vos de santificar o dia do sábado.
   ><br /><br />
   >Honrai a vosso pai e a vossa mãe, a fim de viverdes longo tempo na terra que o Senhor vosso Deus vos dará.
   ><br /><br />
   >Não mateis.
   ><br /><br />
   >Não cometais adultério.
   ><br /><br />
   >Não roubeis
   ><br /><br />
   >Não presteis testemunho falso contra o vosso próximo.
   ><br /><br />
   >Não desejeis a mulher do vosso próximo.
   ><br /><br />
   >Não cobiceis a casa do vosso próximo, nem o seu servo, nem a sua serva, nem o seu boi, nem o seu asno, nem qualquer das coisas que lhe pertençam.
   ><br /><br />
   >✝️ Exôdo, cap. 20, vers. 2-12

   É de todos os tempos e de todos os países essa lei e tem, por isso mesmo, caráter divino. Todas as outras são leis que Moisés decretou, obrigado que se via a conter, pelo temor, um povo de seu natural turbulento e indisciplinado, no qual tinha ele de combater arraigados abusos e preconceitos, adquiridos durante a escravidão do Egito. Para imprimir autoridade às suas leis, houve de lhes atribuir origem divina, conforme o fizeram todos os legisladores dos povos primitivos. A autoridade do homem precisava apoiar-se na autoridade de Deus; mas só a ideia de um Deus terrível podia impressionar criaturas ignorantes, nas quais ainda pouco desenvolvidos se encontravam o senso moral e o sentimento de uma justiça reta. É evidente que aquele que incluíra, entre os seus mandamentos, este: “Não matareis; não causareis dano ao vosso próximo”, não poderia contradizer-se, fazendo da exterminação um dever. As leis moisaicas, propriamente ditas, revestiam, pois, um caráter essencialmente transitório.

<a name="ESE-1-01-02"><code>ESE-1-01-02</code></a>

<h4>📃 O Cristo</h4>

3. Jesus não veio destruir a lei, isto é, a Lei de Deus; veio cumpri-la, isto é, desenvolvê-la, dar-lhe o verdadeiro sentido e adaptá-la ao grau de adiantamento dos homens. Por isso é que se nos depara, nessa lei, o princípio dos deveres para com Deus e para com o próximo, base da sua doutrina. Quanto às leis de Moisés, propriamente ditas, Ele, ao contrário, as modificou profundamente, quer na substância, quer na forma. Combatendo constantemente o abuso das práticas exteriores e as falsas interpretações, por mais radical reforma não podia fazê-las passar, do que as reduzindo a esta única prescrição: “Amar a Deus acima de todas as coisas e o próximo como a si mesmo”, e acrescentando: aí estão a lei toda e os profetas.

   Por estas palavras: “O céu e a Terra não passarão sem que tudo esteja cumprido até o último iota”, quis dizer Jesus ser necessário que a Lei de Deus tivesse cumprimento integral, isto é, fosse praticada na Terra inteira, em toda a sua pureza, com todas as suas ampliações e consequências. Efetivamente, de que serviria haver sido promulgada aquela lei, se ela devesse constituir privilégio de alguns homens, ou, ao menos, de um único povo? Sendo filhos de Deus todos os homens, todos, sem distinção nenhuma, são objeto da mesma solicitude.

4. O papel de Jesus não foi o de um simples legislador moralista, tendo por exclusiva autoridade a sua palavra. Cabia-lhe dar cumprimento às profecias que lhe anunciaram o advento; a autoridade lhe vinha da natureza excepcional do seu Espírito e da sua missão divina. Ele viera ensinar aos homens que a verdadeira vida não é a que transcorre na Terra, e sim a que é vivida no Reino dos Céus; viera ensinar-lhes o caminho que a esse reino conduz, os meios de eles se reconciliarem com Deus e de pressentirem esses meios na marcha das coisas por vir, para a realização dos destinos humanos. Entretanto, não disse tudo, limitando-se, respeito a muitos pontos, a lançar o gérmen de verdades que, segundo Ele próprio o declarou, ainda não podiam ser compreendidas. Falou de tudo, mas em termos mais ou menos implícitos. Para ser apreendido o sentido oculto de algumas palavras suas, mister se fazia que novas ideias e novos conhecimentos lhes trouxessem a chave indispensável, ideias que, porém, não podiam surgir antes que o espírito humano houvesse alcançado um certo grau de madureza. A Ciência tinha de contribuir poderosamente para a eclosão e o desenvolvimento de tais ideias. Importava, pois, dar à Ciência tempo para progredir.

<a name="ESE-1-01-03"><code>ESE-1-01-03</code></a>

<h4>📃 O Espiritismo</h4>

5. O Espiritismo é a ciência nova que vem revelar aos homens, por meio de provas irrecusáveis, a existência e a natureza do mundo espiritual e as suas relações com o mundo corpóreo. Ele no-lo mostra, não mais como coisa sobrenatural, porém, ao contrário, como uma das forças vivas e sem cessar atuantes da Natureza, como a fonte de uma imensidade de fenômenos até hoje incompreendidos e, por isso, relegados para o domínio do fantástico e do maravilhoso. É a essas relações que o Cristo alude em muitas circunstâncias e daí vem que muito do que Ele disse permaneceu ininteligível ou falsamente interpretado. O Espiritismo é a chave com o auxílio da qual tudo se explica de modo fácil.

6. A lei do Antigo Testamento teve em Moisés a sua personificação; a do Novo Testamento tem-na no Cristo. O Espiritismo é a terceira revelação da Lei de Deus, mas não tem a personificá-la nenhuma individualidade, porque é fruto do ensino dado, não por um homem, sim pelos Espíritos, que são as vozes do Céu, em todos os pontos da Terra, com o concurso de uma multidão inumerável de intermediários. É, de certa maneira, um ser coletivo, formado pelo conjunto dos seres do mundo espiritual, cada um dos quais traz o tributo de suas luzes aos homens, para lhes tornar conhecido esse mundo e a sorte que os espera.

7. Assim como o Cristo disse: “Não vim destruir a lei, porém cumpri-la”, também o Espiritismo diz: “Não venho destruir a lei cristã, mas dar-lhe execução.” Nada ensina em contrário ao que ensinou o Cristo; mas desenvolve, completa e explica, em termos claros e para toda gente, o que foi dito apenas sob forma alegórica. Vem cumprir, nos tempos preditos, o que o Cristo anunciou e preparar a realização das coisas futuras. Ele é, pois, obra do Cristo, que preside, conforme igualmente o anunciou, à regeneração que se opera e prepara o Reino de Deus na Terra.

<a name="ESE-1-01-04"><code>ESE-1-01-04</code></a>

<h4>📃 Aliança da Ciência e da Religião</h4>

8. A Ciência e a Religião são as duas alavancas da inteligência humana: uma revela as leis do mundo material e a outra as do mundo moral. Tendo, no entanto, essas leis o mesmo princípio, que é Deus, não podem contradizer-se. Se fossem a negação uma da outra, uma necessariamente estaria em erro e a outra com a verdade, porquanto Deus não pode pretender a destruição de sua própria obra. A incompatibilidade que se julgou existir entre essas duas ordens de ideias provém apenas de uma observação defeituosa e de excesso de exclusivismo, de um lado e de outro. Daí um conflito que deu origem à incredulidade e à intolerância.

   São chegados os tempos em que os ensinamentos do Cristo têm de ser completados; em que o véu intencionalmente lançado sobre algumas partes desse ensino tem de ser levantado; em que a Ciência, deixando de ser exclusivamente materialista, tem de levar em conta o elemento espiritual e em que a Religião, deixando de ignorar as leis orgânicas e imutáveis da matéria, como duas forças que são, apoiando-se uma na outra e marchando combinadas, se prestarão mútuo concurso. Então, não mais desmentida pela Ciência, a Religião adquirirá inabalável poder, porque estará de acordo com a razão, já se lhe não podendo mais opor a irresistível lógica dos fatos.

   A Ciência e a Religião não puderam, até hoje, entender-se, porque, encarando cada uma as coisas do seu ponto de vista exclusivo, reciprocamente se repeliam. Faltava com que encher o vazio que as separava, um traço de união que as aproximasse. Esse traço de união está no conhecimento das leis que regem o universo espiritual e suas relações com o mundo corpóreo, leis tão imutáveis quanto as que regem o movimento dos astros e a existência dos seres. Uma vez comprovadas pela experiência essas relações, nova luz se fez: a fé dirigiu-se à razão; esta nada encontrou de ilógico na fé: vencido foi o materialismo. Mas nisso, como em tudo, há pessoas que ficam atrás, até serem arrastadas pelo movimento geral, que as esmaga, se tentam resistir-lhe, em vez de o acompanharem. É toda uma revolução que neste momento se opera e trabalha os espíritos. Após uma elaboração que durou mais de dezoito séculos, chega ela à sua plena realização e vai marcar uma nova era na vida da Humanidade. Fáceis são de prever as consequências: acarretará para as relações sociais inevitáveis modificações, às quais ninguém terá força para se opor, porque elas estão nos desígnios de Deus e derivam da lei do progresso, que é Lei de Deus.

<a name="ESE-1-01-05"><code>ESE-1-01-05</code></a>

<h4>📃 Instruções dos Espíritos: A nova era</h4>

9. Deus é único e Moisés é o Espírito que Ele enviou em missão para torná-lo conhecido não só dos hebreus, como também dos povos pagãos. O povo hebreu foi o instrumento de que se serviu Deus para se revelar por Moisés e pelos profetas, e as vicissitudes por que passou esse povo destinavam-se a chamar a atenção geral e a fazer cair o véu que ocultava aos homens a divindade.

   Os mandamentos de Deus, dados por intermédio de Moisés, contêm o gérmen da mais ampla moral cristã. Os comentários da Bíblia, porém, restringiam-lhe o sentido, porque, praticada em toda a sua pureza, não na teriam então compreendido. Mas nem por isso os dez mandamentos de Deus deixavam de ser um como frontispício brilhante, qual farol destinado a clarear a estrada que a Humanidade tinha de percorrer.

   A moral que Moisés ensinou era apropriada ao estado de adiantamento em que se encontravam os povos que ela se propunha regenerar, e esses povos, semisselvagens quanto ao aperfeiçoamento da alma, não teriam compreendido que se pudesse adorar a Deus de outro modo que não por meio de holocaustos, nem que se devesse perdoar a um inimigo. Notável do ponto de vista da matéria e mesmo do das Artes e das Ciências, a inteligência deles muito atrasada se achava em moralidade e não se houvera convertido sob o império de uma religião inteiramente espiritual. Era-lhes necessária uma representação semimaterial, qual a que apresentava então a religião hebraica. Os holocaustos lhes falavam aos sentidos, do mesmo passo que a ideia de Deus lhes falava ao espírito.

   O Cristo foi o iniciador da mais pura, da mais sublime moral, da moral evangélico-cristã, que há de renovar o mundo, aproximar os homens e torná-los irmãos; que há de fazer brotar de todos os corações a caridade e o amor do próximo e estabelecer entre os humanos uma solidariedade comum; de uma perfeita moral, enfim, que há de transformar a Terra, tornando-a morada de Espíritos superiores aos que hoje a habitam. É a lei do progresso, a que a Natureza está submetida, que se cumpre, e o Espiritismo é a alavanca de que Deus se utiliza para fazer que a Humanidade avance.

   São chegados os tempos em que se hão de desenvolver as ideias, para que se realizem os progressos que estão nos desígnios de Deus. Têm elas de seguir a mesma rota que percorreram as ideias de liberdade, suas precursoras. Não se acredite, porém, que esse desenvolvimento se efetue sem lutas. Não; aquelas ideias precisam, para atingirem a maturidade, de abalos e discussões, a fim de que atraiam a atenção das massas. Uma vez isso conseguido, a beleza e a santidade da moral tocarão os espíritos, que então abraçarão uma ciência que lhes dá a chave da vida futura e descerra as portas da felicidade eterna. Moisés abriu o caminho; Jesus continuou a obra; o Espiritismo a concluirá. – Um Espírito israelita. (Mulhouse, 1861.)

10. Um dia, Deus, em sua inesgotável caridade, permitiu que o homem visse a verdade varar as trevas. Esse dia foi o do advento do Cristo. Depois da luz viva, voltaram as trevas. Após alternativas de verdade e obscuridade, o mundo novamente se perdia. Então, semelhantemente aos profetas do Antigo Testamento, os Espíritos se puseram a falar e a vos advertir. O mundo está abalado em seus fundamentos; reboará o trovão. Sede firmes!

    O Espiritismo é de ordem divina, pois que se assenta nas próprias Leis da Natureza, e estai certos de que tudo o que é de ordem divina tem grande e útil objetivo. O vosso mundo se perdia; a Ciência, desenvolvida à custa do que é de ordem moral, mas conduzindo-vos ao bem-estar material, redundava em proveito do espírito das trevas. Como sabeis, cristãos, o coração e o amor têm de caminhar unidos à Ciência. O reino do Cristo, ah! passados que são dezoito séculos e apesar do sangue de tantos mártires, ainda não veio. Cristãos, voltai para o Mestre, que vos quer salvar. Tudo é fácil àquele que crê e ama; o amor o enche de inefável alegria. Sim, meus filhos, o mundo está abalado; os bons Espíritos vo-lo dizem sobejamente; dobrai-vos à rajada que anuncia a tempestade, a fim de não serdes derribados, isto é, preparai-vos e não imiteis as virgens loucas, que foram apanhadas desprevenidas à chegada do esposo.

    A revolução que se apresta é antes moral do que material. Os grandes Espíritos, mensageiros divinos, sopram a fé, para que todos vós, obreiros esclarecidos e ardorosos, façais ouvir a vossa voz humilde, porquanto sois o grão de areia; mas sem grãos de areia não existiriam as montanhas. Assim, pois, que estas palavras — “Somos pequenos” — careçam para vós de significação. A cada um a sua missão, a cada um o seu trabalho. Não constrói a formiga o edifício de sua república e imperceptíveis animálculos não elevam continentes? Começou a nova cruzada. Apóstolos da paz universal, que não de uma guerra, modernos São Bernardos, olhai e marchai para frente; a lei dos mundos é a do progresso. – Fénelon. (Poitiers, 1861.)

11. Santo Agostinho é um dos maiores vulgarizadores do Espiritismo. Manifesta-se quase por toda parte. A razão disso encontramo-la na vida desse grande filósofo cristão. Pertence ele à vigorosa falange dos Pais da Igreja, aos quais deve a cristandade seus mais sólidos esteios. Como vários outros, foi arrancado ao paganismo, ou melhor, à impiedade mais profunda, pelo fulgor da verdade. Quando, entregue aos maiores excessos, sentiu em sua alma aquela singular vibração que o fez voltar a si e compreender que a felicidade estava alhures, que não nos prazeres enervantes e fugitivos; quando, afinal, no seu caminho de Damasco, também lhe foi dado ouvir a santa voz a clamar-lhe: “Saulo, Saulo, por que me persegues?”, exclamou: “Meu Deus! Meu Deus! perdoai-me, creio, sou cristão!” E desde então tornou-se um dos mais fortes sustentáculos do Evangelho. Podem ler-se, nas notáveis confissões que esse eminente Espírito deixou, as características e, ao mesmo tempo, proféticas palavras que proferiu, depois da morte de Santa Mônica: Estou convencido de que minha mãe me virá visitar e dar conselhos, revelando-me o que nos espera na vida futura. Que ensinamento nessas palavras e que retumbante previsão da doutrina porvindoura! Essa a razão por que hoje, vendo chegada a hora de divulgar-se a verdade que ele outrora pressentira, se constituiu seu ardoroso disseminador e, por assim dizer, se multiplica para responder a todos os que o chamam. – Erasto, discípulo de Paulo. (Paris, 1863.)

📝 **Nota**. Dar-se-á venha Santo Agostinho demolir o que edificou? Certamente que não. Como tantos outros, ele vê com os olhos do espírito o que não via como homem. Liberta, sua alma entrevê claridades novas, compreende o que antes não compreendia. Novas ideias lhe revelaram o sentido verdadeiro de algumas sentenças. Na Terra, apreciava as coisas de acordo com os conhecimentos que possuía; desde que, porém, uma nova luz lhe brilhou, pôde apreciá-las mais judiciosamente. Assim é que teve de abandonar a crença que alimentara nos Espíritos íncubos e súcubos e o anátema que lançara contra a teoria dos antípodas. Agora que o Cristianismo se lhe mostra em toda a pureza, pode ele, sobre alguns pontos, pensar de modo diverso do que pensava quando vivo, sem deixar de ser um apóstolo cristão. Pode, sem renegar a sua fé, constituir-se disseminador do Espiritismo, porque vê cumprir-se o que fora predito. Proclamando-o, na atualidade, outra coisa não faz senão conduzir-nos a uma interpretação mais acertada e lógica dos textos. O mesmo ocorre com outros Espíritos que se encontram em posição análoga.

---



[^4]: N.E. de 1947: Allan Kardec cita a parte mais importante do primeiro mandamento, e deixa de transcrever as seguintes frases: “...porque eu, o Senhor vosso Deus, sou Deus zeloso, que puno a iniquidade dos pais nos filhos, na terceira e na quarta gerações daqueles que me aborrecem, e uso de misericórdia até mil gerações daqueles que me amam e guardam os meus mandamentos.” (Êxodo, 20:5 e 6.) 
Nas traduções feitas pelas Igrejas católica e protestante, essa parte do mandamento foi truncada para harmonizá-la com a doutrina da encarnação única da alma. Onde está “na terceira e na quarta gerações”, conforme a tradução Brasileira da Bíblia, a Vulgata Latina (in tertiam et quartam generationem), a tradução de Zamenhof (en la tria kaj kvara generacioj), mudaram o texto para “até a terceira e quarta gerações”.
Esses textos truncados que aparecem na tradução da Igreja Anglicana, na Católica de Figueiredo, na Protestante de Almeida e outras, tornam monstruosa a Justiça divina, pois que filhos, netos, bisnetos, tetranetos inocentes teriam de ser castigados pelo pecado dos pais, avós, bisavós, tetravós. Foi uma infeliz tentativa de acomodação da Lei à vida única.
O texto certo que, por mercê de Deus, já está reproduzido pelas edições recentíssimas a que nos referimos — traduções Brasileira e de Zamenhof —, que conferem com São Jerônimo, mostra que a Lei ensina veladamente a reencarnação e as expiações e provas. Na primeira e na segunda gerações, como contemporâneos de seus filhos e netos, o Espírito culpado ainda não reencarnou, mas um pouco mais tarde — na terceira e quarta gerações — já ele voltou e recebe as consequências de suas faltas. Assim, o culpado mesmo, e não outrem, paga sua dívida.
Logo, tem-se de excluir a 1ª e 2ª gerações e expressar “na” 3ª e 4ª , como realmente é o original.
Achamos conveniente acrescentar aqui esta nota, para facilitar a compreensão do estudioso que confronte a sua tradução da Bíblia com a citação do Mestre.


<a href="#ESE-1">🔼 voltar um nível</a>

---

<a name="ESE-1-02"><code>ESE-1-02</code></a>

<h3>📑 02. Meu Reino não é deste mundo</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-03"><code>ESE-1-03</code></a>

<h3>📑 03. Há muitas moradas na casa de meu Pai</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-04"><code>ESE-1-04</code></a>

<h3>📑 04. Ninguém poderá ver o Reino de Deus se não nascer de novo</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-05"><code>ESE-1-05</code></a>

<h3>📑 05. Bem aventurados os aflitos</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-06"><code>ESE-1-06</code></a>

<h3>📑 06. O Cristo Consolador</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-07"><code>ESE-1-07</code></a>

<h3>📑 07. Bem-aventurados os pobres de espírito</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-08"><code>ESE-1-08</code></a>

<h3>📑 08. Bem-aventurados os que tem puro o coração</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-09"><code>ESE-1-09</code></a>

<h3>📑 09. Bem-aventurados os que são brandos e pacíficos</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-10"><code>ESE-1-10</code></a>

<h3>📑 10. Bem-aventurdaos os que são misericordiosos</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-11"><code>ESE-1-11</code></a>

<h3>📑 11. Amar o próximo como a si mesmo</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-12"><code>ESE-1-12</code></a>

<h3>📑 12. Amai os vossos inimigos</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-13"><code>ESE-1-13</code></a>

<h3>📑 13. Não saiba a vossa mão esquerda o que dê a vossa mão direita</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-14"><code>ESE-1-14</code></a>

<h3>📑 14. Honrai o vosso pai e a vossa mãe</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-15"><code>ESE-1-15</code></a>

<h3>📑 15. Fora da caridade não há salvação</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-16"><code>ESE-1-16</code></a>

<h3>📑 16. Não se pode servir a Deus e a Mamon</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-17"><code>ESE-1-17</code></a>

<h3>📑 17. Sede perfeitos</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-18"><code>ESE-1-18</code></a>

<h3>📑 18. Muitos os chamados, poucos os escolhidos</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-19"><code>ESE-1-19</code></a>

<h3>📑 19. A fé transporta montanhas</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-20"><code>ESE-1-20</code></a>

<h3>📑 20. Os trabalhadores da última hora</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-21"><code>ESE-1-21</code></a>

<h3>📑 21. Haverá falsos cristos e falsos profetas</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-22"><code>ESE-1-22</code></a>

<h3>📑 22. Não separeis o que Deus juntou</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-23"><code>ESE-1-23</code></a>

<h3>📑 23. Estranha moral</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-24"><code>ESE-1-24</code></a>

<h3>📑 24. Não ponhais a candeia debaixo do alqueire</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-25"><code>ESE-1-25</code></a>

<h3>📑 25. Buscai e achareis</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-26"><code>ESE-1-26</code></a>

<h3>📑 26. Dai gratuitamente o que gratuitamente recebestes</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-27"><code>ESE-1-27</code></a>

<h3>📑 27. Pedi e obtereis</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---
<a name="ESE-1-28"><code>ESE-1-28</code></a>

<h3>📑 28. Coletânea de preces espíritas</h3>

CONTENT

<a href="#ESE-1">🔼 voltar um nível</a>

---

<a name="ESE-2"><code>ESE-2</code></a>

<h2>🗂️ Parte 2. Pós-textual</h2>

- [`ESE-2-01` 📃 Nota explicativa](#ESE-2-01)

<a href="#ESE">🔼 voltar um nível</a>

