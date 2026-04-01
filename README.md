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

---

## 5. Convenções e Padrões de Código

### 5.1 Nomenclatura de Arquivos

| Tipo               | Convenção                     | Exemplo                |
| ------------------ | ----------------------------- | ---------------------- |
| Componentes React  | PascalCase                    | `ProjectCard.jsx`      |
| Hooks customizados | camelCase com prefixo `use`   | `useFilter.js`         |
| Utilitários        | camelCase                     | `validators.js`        |
| Constantes/dados   | camelCase                     | `projects.js`          |
| Contextos          | PascalCase + sufixo `Context` | `ThemeContext.jsx`     |
| Páginas            | PascalCase em pasta própria   | `pages/Home/index.jsx` |

### 5.2 Nomenclatura de Variáveis e Funções

```js
// ✅ Correto
const [isMenuOpen, setIsMenuOpen] = useState(false);
const handleSubmit = () => {};
const filteredProjects = projects.filter(...);

// ❌ Errado
const [menu, setMenu] = useState(false);
const click = () => {};
const fp = projects.filter(...);
```

- Booleans: prefixo `is`, `has`, `can` — ex: `isLoading`, `hasError`
- Funções de evento: prefixo `handle` — ex: `handleClick`, `handleSubmit`
- Arrays: plural — ex: `projects`, `skills`, `tags`

### 5.3 Estrutura de um Componente

Todo componente deve seguir esta ordem interna:

```jsx
// 1. Imports externos
import { useState } from 'react';

// 2. Imports internos
import Button from '../atoms/Button';

// 3. Definição do componente
const ProjectCard = ({ title, description, tags, repoUrl, deployUrl }) => {
  // 4. Estado local
  const [isExpanded, setIsExpanded] = useState(false);

  // 5. Efeitos
  useEffect(() => {}, []);

  // 6. Funções/handlers
  const handleToggle = () => setIsExpanded((prev) => !prev);

  // 7. Render
  return <div>...</div>;
};

// 8. Export default no final
export default ProjectCard;
```

### 5.4 Props

- Sempre documentar props esperadas com comentários ou PropTypes (opcional mas recomendado)
- Desestruturar props na assinatura da função
- Definir valores padrão quando a prop for opcional

```jsx
// ✅ Correto
const Button = ({ label, onClick, variant = 'primary', disabled = false }) => {
  ...
};

// ❌ Errado
const Button = (props) => {
  const label = props.label;
  ...
};
```

---

## 6. Requisitos Funcionais

### RF01 — Seção Hero (Apresentação)

**Descrição:** Primeira seção visível ao entrar no site. Define a primeira impressão.

**Especificações:**

- Exibir nome completo em destaque (`<h1>`)
- Exibir cargo/especialidade como subtítulo (`<h2>` ou `<p>`)
- Botão CTA "Ver Projetos" que faz scroll suave até a seção de projetos
- Links para redes sociais (GitHub, LinkedIn)

**Critérios de Aceite:**

- [ ] O `<h1>` contém o nome do desenvolvedor
- [ ] O botão CTA rola a página até a seção correta
- [ ] Os links de redes sociais abrem em nova aba
- [ ] A seção ocupa 100% da altura da tela (`100vh`) no desktop

---

### RF02 — Seção Sobre (About)

**Descrição:** Breve descrição pessoal e profissional.

**Especificações:**

- Parágrafo curto (2-3 linhas) de apresentação pessoal/profissional
- Lista visual de habilidades técnicas (tags ou ícones)
- Os dados de habilidades devem vir de `constants/skills.js`

**Critérios de Aceite:**

- [ ] Dados de skills carregados a partir de constante, não hardcoded no JSX
- [ ] Tags de habilidade renderizadas dinamicamente via `.map()`

---

### RF03 — Galeria de Projetos

**Descrição:** Listagem dos projetos pessoais com card individual para cada um.

**Especificações:**

- Dados dos projetos carregados de `constants/projects.js`
- Cada `ProjectCard` exibe: título, descrição curta, lista de tecnologias usadas, link do repositório GitHub
- Se o projeto tiver link de deploy, exibir botão "Ver Demo"
- Se não tiver deploy, o botão "Ver Demo" não aparece (não apenas desabilitado — não renderiza)

**Critérios de Aceite:**

- [ ] Projetos renderizados via `.map()` sobre o array de `constants/projects.js`
- [ ] `ProjectCard` é um componente reutilizável, sem dados hardcoded
- [ ] Botão "Ver Demo" omitido quando `deployUrl` for `null` ou `undefined`
- [ ] Links abrem em nova aba com `target="_blank"` e `rel="noopener noreferrer"`

---

### RF04 — Filtro de Projetos por Tecnologia

**Descrição:** Sistema de filtragem para exibir projetos por tecnologia.

**Especificações:**

- Botões de filtro gerados dinamicamente a partir das tags dos projetos (sem lista hardcoded)
- Filtro "Todos" sempre presente e selecionado por padrão
- Ao clicar em um filtro, apenas projetos com aquela tag são exibidos
- A troca de filtro não recarrega a página

**Critérios de Aceite:**

- [ ] A lista de filtros é gerada automaticamente a partir dos dados em `projects.js`
- [ ] O filtro ativo tem estilo visual diferente dos inativos
- [ ] Ao selecionar "Todos", todos os projetos são exibidos novamente
- [ ] A lógica de filtragem está em `hooks/useFilter.js`, não no componente

---

### RF05 — Formulário de Contato

**Descrição:** Seção para que visitantes possam enviar mensagens.

**Especificações:**

- Campos: Nome, E-mail, Assunto, Mensagem
- Todos os campos são obrigatórios
- Validação de formato de e-mail
- O botão "Enviar" é desabilitado enquanto há campos vazios ou inválidos
- Após "envio", exibir feedback visual de sucesso (o envio em si é simulado — não precisa de backend)
- Após exibir o feedback, limpar o formulário

**Critérios de Aceite:**

- [ ] Botão desabilitado com campos vazios
- [ ] E-mail inválido exibe mensagem de erro inline (não alert)
- [ ] Feedback de sucesso exibido após submissão (Toast ou mensagem inline)
- [ ] Formulário resetado após submissão bem-sucedida
- [ ] Função de validação de e-mail está em `utils/validators.js`

---

### RF06 — Navbar / Header

**Descrição:** Barra de navegação fixa no topo da página.

**Especificações:**

- Links de ancoragem para cada seção da página (Hero, Sobre, Projetos, Contato)
- No mobile, menu hamburguer que expande/recolhe
- Botão para alternar tema dark/light

**Critérios de Aceite:**

- [ ] Links de navegação fazem scroll suave até a seção correspondente
- [ ] Menu hamburguer funcional no mobile (abre e fecha)
- [ ] Botão de tema altera o tema visualmente em toda a aplicação
- [ ] Navbar permanece visível ao rolar a página (`position: fixed` ou `sticky`)

---

### RF07 — Footer

**Descrição:** Rodapé simples com informações de crédito.

**Especificações:**

- Texto de copyright com ano atual gerado dinamicamente (`new Date().getFullYear()`)
- Links para GitHub e LinkedIn

**Critérios de Aceite:**

- [ ] Ano exibido é gerado por JavaScript, não hardcoded
- [ ] Links abrem em nova aba

---

## 7. Requisitos Não-Funcionais

### RNF01 — Organização de Código

- Nenhum dado de projeto ou skill deve estar escrito diretamente no JSX
- Nenhum componente deve ter mais de uma responsabilidade claramente distinta
- Funções de lógica pura (validações, formatações) devem estar em `/utils`

### RNF02 — Responsividade

- A aplicação deve ser funcional e esteticamente aceitável em: 320px, 768px e 1024px+
- Abordagem Mobile-First: estilos base para mobile, breakpoints para telas maiores

### RNF03 — Performance

- Não carregar bibliotecas desnecessárias
- Imagens em formato WebP quando possível
- O comando `npm run build` deve executar sem erros ou warnings críticos

### RNF04 — Acessibilidade Básica

- Uso correto de tags semânticas: `<nav>`, `<main>`, `<section>`, `<footer>`, `<header>`
- Todas as imagens devem ter atributo `alt` descritivo
- Formulário com `<label>` corretamente associado a cada `<input>`

### RNF05 — Qualidade de Código

- Sem erros de ESLint no momento do build
- Sem `console.log` esquecidos no código final
- Sem variáveis declaradas e não utilizadas

---

## 8. Regras de Negócio

| ID   | Regra                                                                                                                               |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------- |
| RN01 | O botão "Ver Demo" de um `ProjectCard` só é renderizado se o projeto tiver a propriedade `deployUrl` preenchida                     |
| RN02 | A lista de botões de filtro é derivada dos dados dos projetos — nunca definida manualmente                                          |
| RN03 | O botão de submit do formulário só fica habilitado quando todos os campos estão preenchidos E o e-mail é válido                     |
| RN04 | O envio do formulário é simulado (sem backend). Após 1-2 segundos de "loading", o feedback de sucesso é exibido                     |
| RN05 | O tema (dark/light) deve persistir durante a sessão via Context API. Não precisa persistir entre sessões (sem localStorage por ora) |
| RN06 | Todos os links externos (`target="_blank"`) devem ter `rel="noopener noreferrer"` por segurança                                     |
| RN07 | O ano no footer deve ser calculado em tempo de execução via `new Date().getFullYear()`                                              |

---

## 9. Modelo de Dados (Constantes)

### 9.1 `constants/projects.js`

```js
// Estrutura de um projeto
{
  id: 1,                          // número, único, obrigatório
  title: 'Nome do Projeto',       // string, obrigatório
  description: 'Descrição...',    // string, obrigatório, max ~150 chars
  tags: ['React', 'Node.js'],     // array de strings, obrigatório
  repoUrl: 'https://github.com/...', // string (URL), obrigatório
  deployUrl: 'https://...',       // string (URL) ou null
  imageUrl: null,                 // string (URL) ou null — opcional por ora
}
```

**Exemplo:**

```js
export const projects = [
  {
    id: 1,
    title: 'Portfólio Pessoal',
    description:
      'SPA desenvolvida em React para exibição de projetos e experiência.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    repoUrl: 'https://github.com/seu-usuario/portfolio',
    deployUrl: 'https://seu-usuario.github.io/portfolio',
    imageUrl: null,
  },
  {
    id: 2,
    title: 'Projeto Sem Deploy',
    description: 'Projeto de estudos sem versão publicada.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    repoUrl: 'https://github.com/seu-usuario/projeto',
    deployUrl: null, // botão "Ver Demo" não será renderizado
    imageUrl: null,
  },
];
```

---

### 9.2 `constants/skills.js`

```js
// Estrutura de uma skill
{
  id: 1,           // número, único
  name: 'React',   // string — nome exibido na UI
  category: 'frontend', // string — para eventual agrupamento futuro
}

export const skills = [
  { id: 1, name: 'React', category: 'frontend' },
  { id: 2, name: 'JavaScript', category: 'frontend' },
  { id: 3, name: 'HTML', category: 'frontend' },
  { id: 4, name: 'CSS', category: 'frontend' },
  { id: 5, name: 'Git', category: 'tools' },
];
```

---

## 10. Rotas da Aplicação

O portfólio é uma Single Page Application com **uma única rota principal**. React Router é usado principalmente para:

1. Exibir uma página 404 para URLs inválidas
2. Estar presente na base do projeto como boa prática

| Path | Componente       | Descrição                            |
| ---- | ---------------- | ------------------------------------ |
| `/`  | `pages/Home`     | Página principal com todas as seções |
| `*`  | `pages/NotFound` | Qualquer rota inexistente            |

> **Nota:** A navegação entre seções (Hero, Projetos, Contato) usa scroll e âncoras, não rotas diferentes. Rotas distintas por seção adicionariam complexidade desnecessária para este escopo.

**`routes/index.jsx`**

```jsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
```

---

## 11. Componentes — Especificação Detalhada

### ATOMS

---

#### `Button`

**Caminho:** `components/atoms/Button/index.jsx`

**Props:**
| Prop | Tipo | Obrigatório | Padrão | Descrição |
|---|---|---|---|---|
| `label` | string | ✅ | — | Texto exibido no botão |
| `onClick` | function | ❌ | `undefined` | Handler de clique |
| `variant` | string | ❌ | `'primary'` | Estilo visual: `'primary'`, `'secondary'`, `'ghost'` |
| `disabled` | boolean | ❌ | `false` | Desabilita o botão |
| `type` | string | ❌ | `'button'` | Tipo HTML: `'button'`, `'submit'` |

**Comportamento:** Renderiza um `<button>` com classes condicionais baseadas em `variant` e `disabled`.

---

#### `Tag`

**Caminho:** `components/atoms/Tag/index.jsx`

**Props:**
| Prop | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `label` | string | ✅ | Texto da tag (ex: "React") |

**Comportamento:** Renderiza um elemento `<span>` estilizado para exibir uma tecnologia.

---

#### `Input`

**Caminho:** `components/atoms/Input/index.jsx`

**Props:**
| Prop | Tipo | Obrigatório | Padrão | Descrição |
|---|---|---|---|---|
| `id` | string | ✅ | — | Conecta com `<label>` |
| `type` | string | ❌ | `'text'` | Tipo HTML do input |
| `value` | string | ✅ | — | Valor controlado |
| `onChange` | function | ✅ | — | Handler de mudança |
| `placeholder` | string | ❌ | `''` | Placeholder |
| `error` | string | ❌ | `''` | Mensagem de erro (vazio = sem erro) |

---

### MOLECULES

---

#### `ProjectCard`

**Caminho:** `components/molecules/ProjectCard/index.jsx`

**Props:**
| Prop | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `title` | string | ✅ | Nome do projeto |
| `description` | string | ✅ | Descrição curta |
| `tags` | array | ✅ | Lista de tecnologias |
| `repoUrl` | string | ✅ | Link do repositório |
| `deployUrl` | string | ❌ | Link do deploy (pode ser `null`) |

**Comportamento:**

- Renderiza as `tags` usando o componente `Tag`
- Renderiza sempre o botão "Ver Repositório"
- Renderiza o botão "Ver Demo" **somente se** `deployUrl` for truthy (RN01)

---

#### `FilterButton`

**Caminho:** `components/molecules/FilterButton/index.jsx`

**Props:**
| Prop | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `label` | string | ✅ | Texto do filtro |
| `isActive` | boolean | ✅ | Se está selecionado |
| `onClick` | function | ✅ | Handler de seleção |

---

#### `FormField`

**Caminho:** `components/molecules/FormField/index.jsx`

**Props:**
| Prop | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `id` | string | ✅ | ID do campo |
| `label` | string | ✅ | Texto do label |
| `type` | string | ❌ | Tipo do input |
| `value` | string | ✅ | Valor atual |
| `onChange` | function | ✅ | Handler |
| `error` | string | ❌ | Mensagem de erro |

**Comportamento:** Renderiza um `<label>` + `<Input>` + mensagem de erro condicional.

---

### ORGANISMS

---

#### `Navbar`

**Caminho:** `components/organisms/Navbar/index.jsx`

**Estado interno:**

- `isMenuOpen` (boolean): controla abertura do menu mobile

**Comportamento:**

- No desktop: links de navegação horizontais
- No mobile: ícone hamburguer + menu vertical expansível
- Consumir `ThemeContext` para exibir o botão de tema

---

#### `HeroSection`

**Caminho:** `components/organisms/HeroSection/index.jsx`

**Sem props** (dados hardcoded ou vindos de uma constante `constants/personal.js` — decisão do dev).

**Comportamento:**

- Exibir nome e cargo
- CTA que faz scroll até `#projects`

---

#### `ProjectsSection`

**Caminho:** `components/organisms/ProjectsSection/index.jsx`

**Comportamento:**

- Importar `projects` de `constants/projects.js`
- Usar `useFilter` hook para gerenciar estado de filtro ativo
- Renderizar `FilterButton` para cada tag única
- Renderizar `ProjectCard` para cada projeto filtrado

---

#### `ContactSection`

**Caminho:** `components/organisms/ContactSection/index.jsx`

**Estado interno:**

- `formData` (object): `{ name, email, subject, message }`
- `errors` (object): mensagens de erro por campo
- `isSubmitting` (boolean): estado de loading
- `submitSuccess` (boolean): controla exibição do feedback

**Comportamento:**

- Validar e-mail via `utils/validators.js`
- Simular envio com `setTimeout` de 1.5s
- Exibir feedback de sucesso após submissão
- Resetar formulário após sucesso

---

## 12. Gerenciamento de Estado

### 12.1 Estado Local (useState)

Usado em componentes que gerenciam seu próprio estado sem precisar compartilhar com outros. Exemplos:

- `isMenuOpen` na Navbar
- `formData` e `errors` no ContactSection

### 12.2 Estado Global (Context API)

Usado para o tema da aplicação (dark/light), que precisa ser acessível por todos os componentes.

**`context/ThemeContext.jsx`**

```jsx
import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook customizado para consumir o contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  return context;
};
```

> **Quando usar Context vs useState?**
> Use `useState` quando só o componente atual precisa do dado.
> Use Context quando múltiplos componentes em lugares diferentes da árvore precisam do mesmo dado.

---

### 12.3 Custom Hook — `useFilter`

**Caminho:** `hooks/useFilter.js`

**Responsabilidade:** Encapsular a lógica de filtragem de projetos para que o componente `ProjectsSection` não precise conhecer os detalhes da implementação.

```js
// Interface esperada:
const { filteredProjects, activeFilter, filters, handleFilterChange } =
  useFilter(projects);

// filteredProjects: array de projetos após aplicar o filtro ativo
// activeFilter: string com o filtro atual ('Todos' por padrão)
// filters: array de strings com todos os filtros disponíveis
// handleFilterChange: função que recebe uma string e atualiza o filtro
```

---

## 13. Responsividade

### 13.1 Breakpoints

| Nome    | Largura mínima | Contexto             |
| ------- | -------------- | -------------------- |
| Mobile  | 320px          | Padrão (base styles) |
| Tablet  | 768px          | `md:` no Tailwind    |
| Desktop | 1024px         | `lg:` no Tailwind    |

### 13.2 Abordagem Mobile-First

Escrever estilos para mobile primeiro. Breakpoints adicionam ou sobrescrevem para telas maiores.

```jsx
// Exemplo com Tailwind
<div className="flex flex-col md:flex-row">
  {/* No mobile: coluna. No tablet+: linha */}
</div>
```

### 13.3 Comportamentos por Breakpoint

| Componente      | Mobile               | Desktop                      |
| --------------- | -------------------- | ---------------------------- |
| Navbar          | Menu hamburguer      | Links horizontais            |
| ProjectsSection | 1 card por linha     | 2-3 cards por linha (grid)   |
| HeroSection     | Texto centralizado   | Layout com mais espaço       |
| ContactSection  | Formulário em coluna | Pode ter layout de 2 colunas |

---

## 14. Acessibilidade

### 14.1 Estrutura Semântica Obrigatória

```html
<body>
  <header>
    <!-- contém a Navbar -->
    <nav>...</nav>
  </header>
  <main>
    <!-- conteúdo principal -->
    <section id="hero">...</section>
    <section id="about">...</section>
    <section id="projects">...</section>
    <section id="contact">...</section>
  </main>
  <footer>...</footer>
</body>
```

### 14.2 Checklist de Acessibilidade

- [ ] Uma única tag `<h1>` por página
- [ ] Hierarquia de headings (`h1` → `h2` → `h3`) sem pular níveis
- [ ] Todo `<img>` tem atributo `alt` descritivo
- [ ] Todo `<input>` tem `<label>` associado via `htmlFor` / `id`
- [ ] Links com `target="_blank"` têm `rel="noopener noreferrer"`
- [ ] Botões têm texto descritivo (não apenas ícones sem `aria-label`)

---

## 15. Critérios de Aceite (Definition of Done)

Um requisito está "concluído" quando **todos** os itens abaixo são verdadeiros:

### Por Componente

- [ ] O componente tem responsabilidade única e claramente definida
- [ ] Não há dados hardcoded que deveriam vir de constantes ou props
- [ ] Props são desestruturadas na assinatura da função
- [ ] O componente funciona em mobile e desktop

### Por Página/Seção

- [ ] Todos os requisitos funcionais da seção estão implementados
- [ ] As regras de negócio aplicáveis estão sendo respeitadas
- [ ] Links externos abrem em nova aba com `rel="noopener noreferrer"`

### Geral (antes do deploy)

- [ ] `npm run build` executa sem erros
- [ ] Sem erros no ESLint (`npm run lint`)
- [ ] Sem `console.log` no código
- [ ] Testado no Chrome DevTools em 375px (mobile) e 1280px (desktop)
- [ ] Navegação entre seções funciona corretamente
- [ ] Formulário de contato valida e exibe feedback

---

## 16. Roadmap de Desenvolvimento

### Semana 1 — Fundação

**Meta:** Projeto configurado e estrutura de pastas criada.

- [ ] Criar projeto com Vite: `npm create vite@latest portfolio -- --template react`
- [ ] Instalar dependências: `react-router-dom`, `tailwindcss`
- [ ] Configurar ESLint
- [ ] Criar estrutura de pastas conforme seção 4
- [ ] Definir paleta de cores e tipografia no `tailwind.config.js`
- [ ] Criar `constants/projects.js` e `constants/skills.js` com dados reais
- [ ] Criar `App.jsx` e `routes/index.jsx` com roteamento básico

**Critério de conclusão:** `npm run dev` roda sem erros e exibe uma página em branco funcional.

---

### Semana 2 — Estrutura Visual

**Meta:** Navbar e Hero funcionando em mobile e desktop.

- [ ] Criar componente `Button` (atom)
- [ ] Criar componente `Navbar` (organism) com menu hamburguer mobile
- [ ] Criar `ThemeContext` e botão de alternância de tema
- [ ] Criar seção `HeroSection` com nome, cargo e CTA
- [ ] Garantir responsividade das seções criadas

**Critério de conclusão:** Navbar e Hero renderizando corretamente nos dois breakpoints.

---

### Semana 3 — Core: Projetos e Filtros

**Meta:** Galeria de projetos com filtros funcionando.

- [ ] Criar componente `Tag` (atom)
- [ ] Criar componente `ProjectCard` (molecule)
- [ ] Criar componente `FilterButton` (molecule)
- [ ] Criar `hooks/useFilter.js`
- [ ] Criar `ProjectsSection` consumindo hook e constantes
- [ ] Criar `AboutSection` com lista de skills

**Critério de conclusão:** Projetos renderizados a partir dos dados, filtros funcionando sem reload.

---

### Semana 4 — Formulário, Ajustes e Deploy

**Meta:** Formulário funcional, aplicação polida e publicada.

- [ ] Criar `utils/validators.js` com função de validação de e-mail
- [ ] Criar `Input` e `FormField` (atom e molecule)
- [ ] Criar `ContactSection` com validação e feedback de sucesso
- [ ] Criar `Footer`
- [ ] Revisar responsividade geral
- [ ] Revisar acessibilidade (semântica, alts, labels)
- [ ] Resolver todos os warnings do ESLint
- [ ] Fazer deploy no GitHub Pages ou Vercel

**Critério de conclusão:** Aplicação publicada e acessível via URL pública.

---

## 17. Glossário

| Termo              | Definição                                                                                                         |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| **SPA**            | Single Page Application — aplicação de página única onde a navegação não recarrega o browser                      |
| **Atom**           | Componente mais básico, sem dependências de outros componentes do projeto                                         |
| **Molecule**       | Componente formado pela composição de atoms                                                                       |
| **Organism**       | Componente complexo que representa uma seção completa da interface                                                |
| **Hook**           | Função React que começa com `use` e permite usar recursos do React (estado, efeitos, etc.)                        |
| **Custom Hook**    | Hook criado pelo desenvolvedor para encapsular e reutilizar lógica                                                |
| **Context API**    | Mecanismo do React para compartilhar dados entre componentes sem passar props manualmente                         |
| **Props**          | Dados passados de um componente pai para um componente filho                                                      |
| **Estado (State)** | Dados que, quando alterados, causam re-renderização do componente                                                 |
| **Hardcoded**      | Dado escrito diretamente no código, sem vir de variável, constante ou prop                                        |
| **Mobile-First**   | Abordagem de estilização onde os estilos base são para mobile, e breakpoints adicionam estilos para telas maiores |
| **Deploy**         | Publicação da aplicação em um servidor para acesso público                                                        |
| **CTA**            | Call to Action — elemento que convida o usuário a realizar uma ação                                               |
| **DoD**            | Definition of Done — critérios que definem quando uma tarefa está realmente concluída                             |

---

_Documento mantido pelo desenvolvedor. Atualizar conforme decisões técnicas forem tomadas durante o desenvolvimento._
