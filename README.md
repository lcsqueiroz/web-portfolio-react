# Portfólio Pessoal — Documentação do Projeto

> **Versão:** 1.0.0 | **Status:** Em desenvolvimento | **Tipo:** Frontend SPA (Single Page Application)

---

## 📌 Sumário

1. [Visão Geral](#1-visão-geral)
2. [Objetivo do Projeto](#2-objetivo-do-projeto)
3. [Stack Tecnológica](#3-stack-tecnológica)
4. [Arquitetura e Estrutura de Pastas](#4-arquitetura-e-estrutura-de-pastas)
5. [Convenções e Padrões de Código](#5-convenções-e-padrões-de-código)
6. [Requisitos Funcionais](#6-requisitos-funcionais)
7. [Requisitos Não-Funcionais](#7-requisitos-não-funcionais)
8. [Regras de Negócio](#8-regras-de-negócio)
9. [Modelo de Dados (Constantes)](#9-modelo-de-dados-constantes)
10. [Rotas da Aplicação](#10-rotas-da-aplicação)
11. [Componentes — Especificação Detalhada](#11-componentes--especificação-detalhada)
12. [Gerenciamento de Estado](#12-gerenciamento-de-estado)
13. [Responsividade](#13-responsividade)
14. [Acessibilidade](#14-acessibilidade)
15. [Critérios de Aceite (Definition of Done)](#15-critérios-de-aceite-definition-of-done)
16. [Roadmap de Desenvolvimento](#16-roadmap-de-desenvolvimento)
17. [Glossário](#17-glossário)

---

## 1. Visão Geral

Este documento serve como guia técnico completo para o desenvolvimento do portfólio pessoal. Ele deve ser consultado durante todo o processo de desenvolvimento e atualizado conforme decisões técnicas forem tomadas.

O projeto **não tem como objetivo principal** construir mais uma página bonita na web. O objetivo real é consolidar habilidades de desenvolvimento React no mundo real: pensar em arquitetura, criar componentes reutilizáveis, separar responsabilidades e organizar código de forma que entender e dar manutenção.

> **Nota pessoal:** Este projeto é desenvolvido 100% sem assistência de IA na codificação, com o propósito deliberado de construir raciocínio técnico próprio. A IA foi utilizada exclusivamente para o desenvolvimento desta documentação e para o desenho da arquitetura inicial, servindo como um norte estratégico para o desenvolvimento. Resistir ao atalho no código é parte fundamental do meu processo de aprendizado.

---

## 2. Objetivo do Projeto

### 2.1 Objetivo Principal

Consolidar habilidades reais de desenvolvimento React através de um projeto concreto e funcional, aplicando conceitos de:

- Componentização e reusabilidade
- Separação de responsabilidades (cada arquivo faz uma coisa)
- Organização de pastas em projeto real
- Gerenciamento de estado com Hooks
- Roteamento com React Router

### 2.2 Objetivo Secundário

Ter um portfólio online para apresentar projetos do GitHub e experiência profissional.

### 2.3 O que este projeto NÃO é

- Um projeto fullstack (sem backend, sem banco de dados, sem autenticação)
- Uma aplicação com dados em tempo real (os dados são estáticos, em arquivos locais)
- Um projeto que precisa de uma API externa para funcionar

---

## 3. Stack Tecnológica

| Categoria     | Tecnologia             | Justificativa                              |
| ------------- | ---------------------- | ------------------------------------------ |
| Framework     | React.js (via Vite)    | Mercado principal, projeto do trabalho     |
| Roteamento    | React Router DOM v6    | Padrão da indústria para SPAs em React     |
| Estilização   | Tailwind CSS           | Utility-first, ótimo para aprender layout  |
| Estado Global | Context API            | Suficiente para o escopo (tema dark/light) |
| Estado Local  | useState / useEffect   | Hooks nativos, sem biblioteca externa      |
| Linting       | ESLint                 | Qualidade e consistência de código         |
| Build Tool    | Vite                   | Mais rápido que CRA, padrão atual          |
| Deploy        | GitHub Pages ou Vercel | Gratuito, integra com GitHub               |

> **Por que não Redux?** O projeto não tem complexidade de estado que justifique Redux. Context API com hooks é suficiente e mais simples de aprender primeiro.

---

## 4. Arquitetura e Estrutura de Pastas

### 4.1 Visão Geral da Estrutura

```
portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/             # Imagens, ícones, fontes
│   │   └── images/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── atoms/          # Menor unidade: botão, input, tag
│   │   ├── molecules/      # Combinação de atoms: card, form field
│   │   └── organisms/      # Seções completas: navbar, hero, footer
│   ├── constants/          # Dados estáticos da aplicação
│   │   ├── projects.js     # Lista de projetos
│   │   └── skills.js       # Lista de habilidades
│   ├── context/            # Context API
│   │   └── ThemeContext.jsx
│   ├── hooks/              # Custom hooks reutilizáveis
│   │   └── useFilter.js
│   ├── pages/              # Componentes de página (ligados a rotas)
│   │   ├── Home/
│   │   │   └── index.jsx
│   │   └── NotFound/
│   │       └── index.jsx
│   ├── routes/             # Configuração de rotas
│   │   └── index.jsx
│   ├── styles/             # Estilos globais
│   │   └── global.css
│   ├── utils/              # Funções utilitárias puras
│   │   └── validators.js
│   ├── App.jsx
│   └── main.jsx
├── .eslintrc.cjs
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

### 4.2 Responsabilidade de Cada Pasta

**`/components/atoms/`**
Componentes sem lógica de negócio. Recebem dados via props e renderizam algo. Exemplos: `Button`, `Tag`, `Input`, `Heading`.

**`/components/molecules/`**
Combinação de atoms que formam uma unidade com significado. Exemplos: `ProjectCard`, `FilterButton`, `FormField`.

**`/components/organisms/`**
Seções completas da página. Podem ter estado local. Exemplos: `Navbar`, `HeroSection`, `ProjectsSection`, `ContactSection`, `Footer`.

**`/constants/`**
Arquivos `.js` com arrays/objetos de dados estáticos. Nada de JSX aqui. Estes arquivos são a "fonte de verdade" dos dados do portfólio.

**`/context/`**
Somente Contexts do React. Cada arquivo exporta um Provider e um hook customizado de acesso.

**`/hooks/`**
Custom hooks que encapsulam lógica reutilizável. Começam sempre com `use`. Não renderizam nada.

**`/pages/`**
Componentes que representam uma rota. Geralmente orquestram organisms. Não têm estilo próprio além de layout de página.

**`/routes/`**
Único lugar onde as rotas são definidas. A `App.jsx` importa daqui.

**`/utils/`**
Funções JavaScript puras. Não dependem de React. Testáveis isoladamente. Exemplos: validação de email, formatação de texto.
