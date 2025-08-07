# ⚡Electron + TypeScript Boilerplate

Um boilerplate moderno para construir aplicações desktop usando **Electron**, **TypeScript** e **Webpack**, com suporte ao **Electron Forge**.

---

##  Tecnologias

- **Electron Forge** – para empacotar e distribuir sua aplicação
- **TypeScript** – com configuração completa em `tsconfig.json`
- **Webpack** – para bundling do código principal (`main`) e renderizador (`renderer`)
- **PostCSS** – para processamento de CSS
- Linters e formatação (`ESLint` via `.eslintrc.json`)
- Ambiente pré-configurado com estrutura modular em `src/`

---

##  Estrutura do projeto

```

example-app/
├── src/
│   ├── main/                 # Código do processo principal (Electron)
│   └── renderer/             # Frontend da aplicação
├── .eslintrc.json            # Regras de lint
├── forge.config.ts           # Configuração do Electron Forge
├── postcss.config.mjs        # Configuração do PostCSS
├── tsconfig.json             # Configuração do TypeScript
├── webpack.main.config.ts    # Webpack para o processo main
├── webpack.renderer.config.ts# Webpack para o renderer
├── webpack.plugins.ts        # Plugins comuns do Webpack
├── package.json              # Dependências e scripts npm
└── README.md                 # (Este arquivo)

````

---

##  Scripts disponíveis

Use os seguintes comandos para desenvolvimento e produção:

```bash
npm run start       # Inicia a aplicação em modo desenvolvimento (Forge)
npm run package     # Empacota ou executa o build para produção
npm run make        # Cria instaladores para plataformas (configurado no Forge)
````

Esses scripts já estão conectados ao **Electron Forge**, com base nas configurações definidas em `forge.config.ts`.

---

## Guia de uso

### 1. Clone o repositório

```bash
git clone https://github.com/atiliodev/example-app.git
cd example-app
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o app em modo desenvolvimento

```bash
npm run start
```

### 4. Crie builds e instaladores (opcional)

* `npm run package` – gera os builds
* `npm run make` – cria instaladores para macOS, Windows ou Linux (depende das configurações do Forge)

---

## Pré-requisitos

* **Node.js** versão 18 ou superior
* npm (incluído com o Node.js)

---

## Como contribuir

Contribuições são bem-vindas! Você pode:

* Melhorar a documentação
* Adicionar suporte a frameworks como React ou Vue no `renderer`
* Ajustar configurações de build ou empacotamento
* Sugerir melhorias via *Issues* ou *Pull Requests*

---

## Licença

Licenciado sob a **MIT License** — sinta-se à vontade para usar, adaptar e distribuir.

---

## Sobre

Criado com 💡 por [atiliodev](https://github.com/atiliodev).
Se quiser transformar isso em um **boilerplate público ou template do GitHub**, posso te ajudar com isso também!




