# 💧 doutrina.org

## Apresentação

Este projeto é uma combinação de ferramentas achadas em plataformas distintas de leitura & ensino e refletem todos os métodos nos quais me esforcei em utilizar. Para exemplificar:

### 📕 Livro

- ✅ Pró: presença física, fácil de usar, tátil, paginação

- ❌ Contra: estático, sem links, pouco espaço para notas, sem links, sem imagens, sem vídeos, sem ajustes de texto, sem modo claro/escuro

### 📄 PDF


- ✅ Pró: digital, fácil de compartilhar, links (abrem fora), mesma paginação do livro, notas

- ❌ Contra: estático, não responsivo ao tamanho da tela, notas individuais, sem ajustes de texto, sem modo claro/escuro

### 📄eBook


- ✅ Pró: digital, links (abrem fora), notas, dicionário, wikipédia, responsivo ao tamanho da tela, com ajustes de texto, modo claro/escuro

- ❌ Contra: copyrighted, estático, notas individuais

### 📱 Livro online


- ✅ Pró: digital, público, links (abrem fora), responsivo ao tamanho de tela, dicionário, wikipédia

- ❌ Contra: sem notas, sem ajustes de texto

### 🖥️ doutrina.org / librus.app


- ✅ Pró: digital, público, links (abrem dentro), responsivo ao tamanho de tela, dicionário, wikipédia, ajustes de texto, modo claro/escuro, atualizavél

- ❌ Contra: fidelidade ao texto original/traduzido, implementação e manutenção intensiva

## 🥼 Voluntários

##### A maior parte deste README foi criada por @JLeoBRx

Como não tenho formação profissional, meu conhecimento provém exclusivamente de ser um auto-didata e de muitos erros e acertos no decorrer deste projeto. No momento, necessito de voluntários com conhecimentos específicos para que possamos efetuar as seguintes melhorias:

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

## 🎲 Clone Local (Windows)

### 📌 Requisitos necessários

Antes de começar, verifique se você tem os seguintes softwares instalados:

• Ruby 3.2.7 → [Baixar Ruby](https://rubyinstaller.org/downloads/)

• Git 2.46.2 → [Baixar Git](https://git-scm.com/downloads)

• Node.js 14.20.0 → [Baixar Node.js](https://nodejs.org/pt/download)

• Bundler 2.6.5 (será instalado com o Ruby)

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

#### 📌 Tecnologias Utilizadas

• Ruby 3.2.7

• Bundler 2.6.5

• Jekyll 3.9.3

• Git 2.46.2

• Node.js 14.20.0


#### 💎 Gems utilizadas:

• github-pages (228)

• jekyll-sass-converter (1.5.2)

• liquid (4.0.4)

• webrick (1.9.1)


E mais! (use bundle list para ver todas)

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
