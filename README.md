<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

💧 doutrina.org

TABELA DE CONTEÚDO

- [🫱🏻‍🫲🏼 Bem-vindo](#-bem-vindo)
   * [👔 Apresentação](#-apresentação)
   * [🏗️ Estrutura](#-estrutura)
   * [🥼 Voluntários](#-voluntários)
   * [🎲 Clone Local (Windows)](#-clone-local-windows)
      + [📌 Requisitos necessários](#-requisitos-necessários)
            * [🔹 Verificar versões instaladas:](#-verificar-versões-instaladas)
         - [📥 Clonando o Repositório](#-clonando-o-repositório)
         - [🔧 Instalando as Dependências](#-instalando-as-dependências)
         - [🚀 Executando o Servidor Local](#-executando-o-servidor-local)
         - [📌 Tecnologias Utilizadas](#-tecnologias-utilizadas)
         - [💎 Gems utilizadas:](#-gems-utilizadas)
   * [🎲 Clone Local (Chromebook)](#-clone-local-chromebook)

<!-- TOC end -->

<!-- TOC --><a name="-bem-vindo"></a>
# 🫱🏻‍🫲🏼 Bem-vindo

Agradeço muito a sua visita. Espero que fique e contribua. Deus nos paga por todos os atos que fazemos em Seu nome. Amém.

<!-- TOC --><a name="-apresentação"></a>
## 👔 Apresentação

Este projeto é uma combinação de ferramentas achadas em plataformas distintas de leitura & ensino e refletem todos os métodos nos quais me esforcei em utilizar. Para exemplificar:

|                |                                                                   ✅ Vantagens                                                                  |                                                         ❌ Desvantagens                                                        |
|----------------|:----------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------:|
| 📕 Livro        |                                                presença física, fácil de usar, tátil, paginação                                                | estático, sem links, pouco espaço para notas, sem links, sem imagens, sem vídeos, sem ajustes de texto, sem modo claro/escuro |
| 📄 PDF          |                               digital, fácil de compartilhar, links (abrem fora), mesma paginação do livro, notas                              |          estático, não responsivo ao tamanho da tela, notas individuais, sem ajustes de texto, sem modo claro/escuro          |
| 📱 eBook        |        digital, links (abrem fora), notas, dicionário, wikipédia, responsivo ao tamanho da tela, com ajustes de texto, modo claro/escuro       |                                            copyrighted, estático, notas individuais                                           |
| 💻 Kardecpedia  |                           digital, público, links (abrem fora), responsivo ao tamanho de tela, dicionário, wikipédia                           |                                                sem notas, sem ajustes de texto                                                |
| 💧 doutrina.org | digital, público, links (abrem dentro), responsivo ao tamanho de tela, dicionário, wikipédia, ajustes de texto, modo claro/escuro, atualizavél |                          fidelidade ao texto original/traduzido, implementação e manutenção intensiva                         |

Estes achados foram uma culminação de mais de 10 anos de esforços em aprimorar o estudo digital. Eu pessoalmente utilizei de cada um dos formatos acima, passando por etapas de criar PDFs, web apps, eBooks e até sites estáticos de mais de 1000 páginas. Enfim descobri esta plataforma na qual eu poderia tornar o projeto público e colaborativo.

Passei então a criar uma estrutura de site que facilitaria o consumo digital do material de referência, sendo automaticamente ajustável ao tamanho de tela, e agregando várias das ferramentas até então exclusivas de outras plataformas.

Manualmente, copiei e colei cada parágrafo do PDF disponibilizado pela FEB para compor os longos arquivos MD que formam cada livro. Depois de reformatar cada um de acordo com o padrão de estilo e diagramação nosso (cores, tipos, símbolos, etc), começo o trabalho de incluir links para artigos externos, sequencialmente, do LDE ao GEN.

<!-- TOC --><a name="-estrutura"></a>
## 🏗️ Estrutura

Depois de longas e exaustivas tentativas de encontrar o mais perfeito SSG (Static Site Generator), acabei por me decidir em usar o Jekyll pela sua popularidade e simplicidade.

| Nome      |                    Descrição                    |
|-----------|:-----------------------------------------------:|
| _includes | contém partes pré-formatadas que compõe páginas |
| _layouts  |       estabelece pré-formatação de páginas      |
| _site     |     contém todo o site formatado por Jekyll     |
| assets    |     contém CSS, JS, imagens, mapas, PWA, etc    |
| books     |    contém os longos arquivos MD de cada livro   |
| pages     |       contém as várias páginas do projeto       |

A aplicação que uso para codificar é o VSCODE principalmente mas com auxílio de várias outras ferramentas online e de criação minha. Tenho tentado manter o código bem simples e limpo mas sei que devo estar defasado em muitos aspectos.

<!-- TOC --><a name="-voluntários"></a>
## 🥼 Voluntários

> A maior parte deste README foi criada por @JLeoBRx

Como não tenho formação profissional na área, meu conhecimento provém exclusivamente dos esforços DIY/auto-didata e de muitos e muitos erros nesta caminhada. Apesar de não listar seus antecessores, saibam que dezenas de outros projetos, e mais de uma década, contribuiram para que eu chegasse aqui. No momento, necessito de voluntários com conhecimentos específicos para que possamos efetuar as seguintes melhorias:

1️. Análise de Código & Conformidade

- Revisar HTML5, CSS3, JavaScript, garantindo boas práticas.
- Utilizar W3C Validator ou ferramentas equivalentes para detectar falhas.
- Identificar problemas de acessibilidade e sugerir melhorias.

2️. Análise de Viewport & Browsers

- Testar o site em diferentes resoluções de tela e navegadores.
- Relatar bugs de renderização e possíveis problemas de compatibilidade.

3️. Sugestões de Melhorias Estruturais

- Revisar hierarquia de pastas e nomenclatura de classes.
- Sugerir melhores práticas de organização do código.
- Otimizar desempenho e eficiência do site.

4️. Melhorias em UX (Futuro)

- Após as revisões estruturais, podemos discutir ajustes focados na experiência do usuário.

<!-- TOC --><a name="-clone-local-windows"></a>
## 🎲 Clone Local (Windows)

<!-- TOC --><a name="-requisitos-necessários"></a>
### 📌 Requisitos necessários

Antes de começar, verifique se você tem os seguintes softwares instalados:

• Ruby 3.2.7 → [Baixar Ruby](https://rubyinstaller.org/downloads/)

• Git 2.46.2 → [Baixar Git](https://git-scm.com/downloads)

• Node.js 14.20.0 → [Baixar Node.js](https://nodejs.org/pt/download)

• Bundler 2.6.5 (será instalado com o Ruby)

<!-- TOC --><a name="-verificar-versões-instaladas"></a>
##### 🔹 Verificar versões instaladas:

```
ruby -v
```
> no mínimo versão 3.2.7

```
bundle -v
```
> no mínimo versão 2.6.5

```
bundle exec jekyll -v 
```
> no mínimo versão 3.10.0

```
git --version
```
> no mínimo versão 2.46.2

```
node -v
```
> no mínimo versão 14.20.0

<!-- TOC --><a name="-clonando-o-repositório"></a>
#### 📥 Clonando o Repositório

Abra o Prompt de Comando (CMD) e execute:

```
cd C:\Users\SeuNomeDeUsuario\Documents\GitHub
```

```
git clone https://github.com/sergioSHKLR/doutrina.org.git
```

```
cd doutrina.org
```

<!-- TOC --><a name="-instalando-as-dependências"></a>
#### 🔧 Instalando as Dependências

Remova o arquivo Gemfile.lock para evitar conflitos:

```
del Gemfile.lock
```

Instale as dependências:

```
gem install bundler -v 2.6.5
```

```
bundle install
```

<!-- TOC --><a name="-executando-o-servidor-local"></a>
#### 🚀 Executando o Servidor Local

Para rodar o Jekyll e visualizar o site localmente, execute:

```
bundle exec jekyll serve
```
> [!IMPORTANT]
> Sem o Webrick, o *server* não irá funcionar.

O site estará acessível em:

[http://localhost:4000/](http://localhost:4000/)

> Os scripts z1.sh, z2.sh e z3.sh foram criados para brevidade e economia de *keystrokes* em Linux mas não funcionarão em Windows. 

<!-- TOC --><a name="-tecnologias-utilizadas"></a>
#### 📌 Tecnologias Utilizadas

• Ruby 3.2.7

• Bundler 2.6.5

• Jekyll 3.9.3

• Git 2.46.2

• Node.js 14.20.0


<!-- TOC --><a name="-gems-utilizadas"></a>
#### 💎 Gems utilizadas:

• github-pages (228)

• jekyll-sass-converter (1.5.2)

• liquid (4.0.4)

• webrick (1.9.1)


E mais! (use bundle list para ver todas)

<!-- TOC --><a name="-clone-local-chromebook"></a>
## 🎲 Clone Local (Chromebook)

Comece por garantir que seu sistema está atualizado rodando o comando abaixo.

```
sudo apt update && sudo apt upgrade -y
```

Se você não tiver Ruby instalado, instale agora:

```
sudo apt-get install ruby-full build-essential zlib1g-dev -y
```
```
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
```
```
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
```
```
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
```
```
source ~/.bashrc
```

Se não tiver Jekyll, instale agora via Bundler

```
gem install jekyll bundler
```

Se não tiver VSCode instalado, instale a dependência abaixo:

```
sudo apt install gnome-keyring -y
```

Baixar VSCode .deb file [link](https://code.visualstudio.com/docs/?dv=linux64_deb)

Após a instalação, configure seu username e email antes de logar no Github e clonar o repositório.

```
git config --global user.name "user.name"
```
> [!NOTE]
> Substitua "user.name" pelo seu nome de usuário atual no Github
```
git config --global user.email "user.name@example.com"
```
> [!NOTE]
> Substitua "user.name@example.com" pelo seu email atual no Github

Faça o login no Github através do VScode e clone o repo para o seu disco, na pasta escolhida.

Depois disso, abra duas abas de terminal e rode os dois scripts abaixo:

```
sudo ./z1.sh
```
Este irá rodar o SSG e criar HTML a partir dos arquivos MD.

```
sudo ./z2.sh
```
Este irá servir o site localmente e mostrar o link.

A partir disso, crie um fork ou submita suas contribuições para que possa ser adicionados ao main branch.

Se precisar de ajuda, abra uma [issue](https://github.com/sergioSHKLR/doutrina.org/issues) no repositório! 🚀

Mais uma vez, grato pela sua contribuição!
