# Web Portfolio — React

Portfólio pessoal desenvolvido como projeto de aprendizado real em React, com foco em arquitetura de componentes, separação de responsabilidades e organização de código profissional.

> Desenvolvido sem assistência de IA na codificação. A IA foi utilizada exclusivamente no planejamento da arquitetura e na documentação — o objetivo é construir raciocínio técnico próprio através da prática deliberada.

---

## Objetivo

Consolidar habilidades reais de desenvolvimento React aplicando conceitos de:

- Componentização com **Atomic Design** (atoms → molecules → organisms → pages)
- Separação de responsabilidades (cada arquivo tem uma única função)
- Gerenciamento de estado com **Hooks** e **Context API**
- Roteamento com **React Router DOM**
- Estilização **Mobile-First** com **CSS Modules**

O resultado final é um portfólio online para apresentar projetos e experiência profissional.

---

## Stack

| Categoria     | Tecnologia            | Justificativa                              |
| ------------- | --------------------- | ------------------------------------------ |
| Framework     | React 19 (via Vite)   | Mercado principal, projeto de trabalho     |
| Roteamento    | React Router DOM v7   | Padrão da indústria para SPAs em React     |
| Estilização   | CSS Modules           | Escopo local por componente, sem dependência externa |
| Estado Global | Context API           | Suficiente para o escopo (tema dark/light) |
| Estado Local  | useState / useEffect  | Hooks nativos, sem biblioteca externa      |
| Linting       | ESLint                | Qualidade e consistência de código         |
| Build Tool    | Vite                  | Padrão atual, mais rápido que CRA          |
| Deploy        | GitHub Pages / Vercel | Gratuito, integra com GitHub               |

> **Por que não Redux?** O projeto não tem complexidade de estado que justifique Redux. Context API com hooks é suficiente e mais didático para o escopo.

---

## Como rodar

```bash
npm install
npm run dev
```

| Comando           | Descrição                            |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Inicia o servidor de desenvolvimento |
| `npm run build`   | Gera o build de produção             |
| `npm run lint`    | Executa o ESLint                     |
| `npm run preview` | Visualiza o build localmente         |

---

## Documentação técnica

A documentação completa do projeto está organizada na pasta [`docs/`](docs/):

| Arquivo                                 | Conteúdo                                                            |
| --------------------------------------- | ------------------------------------------------------------------- |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | Estrutura de pastas, modelo de dados, rotas e estado                |
| [COMPONENTS.md](docs/COMPONENTS.md)     | Especificação detalhada de props e comportamento de cada componente |
| [CONVENTIONS.md](docs/CONVENTIONS.md)   | Padrões de nomenclatura, estrutura interna e props                  |
| [REQUIREMENTS.md](docs/REQUIREMENTS.md) | Requisitos funcionais, não-funcionais e regras de negócio           |
| [ROADMAP.md](docs/ROADMAP.md)           | Roadmap de desenvolvimento por semanas e definition of done         |
