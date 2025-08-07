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

### 1. Crie o Projeto 

```bash
npx create-my-electron-app my-app
cd my-app
```

### 2. Inicie o app em modo desenvolvimento

```bash
npm start
```

## Pré-requisitos

* **Node.js** versão 18 ou superior
* npm (incluído com o Node.js)


## Licença

Licenciado sob a **MIT License** — sinta-se à vontade para usar, adaptar e distribuir.

---

## Sobre

Criado com 💡 por [atiliodev](https://github.com/atiliodev).
Se quiser transformar isso em um **boilerplate público ou template do GitHub**, posso te ajudar com isso também!




