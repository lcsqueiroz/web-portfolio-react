# Arquitetura do Projeto

Este documento descreve a organização de pastas, o modelo de dados, as rotas e o gerenciamento de estado da aplicação.

---

## Estrutura de Pastas

```
src/
├── assets/                  # Imagens, ícones e fontes estáticas
├── components/
│   ├── atoms/               # Menor unidade: sem lógica de negócio
│   ├── molecules/           # Combinação de atoms com significado próprio
│   └── organisms/           # Seções completas da página
├── constants/               # Dados estáticos — fonte de verdade do portfólio
├── context/                 # Contextos React (Provider + hook de acesso)
├── hooks/                   # Custom hooks reutilizáveis
├── pages/                   # Componentes de página (ligados a rotas)
│   ├── Home/
│   └── NotFound/
├── routes/                  # Configuração centralizada de rotas
├── styles/                  # Estilos globais
├── utils/                   # Funções JavaScript puras (sem React)
├── App.jsx                  # Raiz da aplicação
└── main.jsx                 # Entry point — monta o React no DOM
```

### Responsabilidade de cada pasta

| Pasta        | Responsabilidade                                                                                   |
| ------------ | -------------------------------------------------------------------------------------------------- |
| `atoms/`     | Componentes sem lógica de negócio. Recebem dados via props e renderizam HTML estilizado.           |
| `molecules/` | Composição de atoms que formam uma unidade com significado. Ex: `ProjectCard`, `FormField`.        |
| `organisms/` | Seções completas da página. Podem ter estado local. Ex: `Navbar`, `HeroSection`, `ContactSection`. |
| `pages/`     | Componentes que representam uma rota. Orquestram organisms. Não têm estilo próprio de layout.      |
| `routes/`    | Único lugar onde as rotas são definidas. `App.jsx` importa daqui.                                  |
| `constants/` | Arrays e objetos de dados estáticos em `.js`. Sem JSX. São a fonte de verdade do portfólio.        |
| `context/`   | Cada arquivo exporta um `Provider` e um hook customizado de acesso ao contexto.                    |
| `hooks/`     | Custom hooks que encapsulam lógica reutilizável. Começam com `use`. Não renderizam nada.           |
| `utils/`     | Funções JS puras. Sem dependência de React. Testáveis isoladamente. Ex: validação de e-mail.       |
| `styles/`    | CSS global e variáveis de tema que não se encaixam em componentes específicos.                     |
| `assets/`    | Arquivos estáticos como imagens e ícones. Prefira WebP para imagens.                               |

---

## Modelo de Dados

Os dados da aplicação são 100% estáticos, definidos em `src/constants/`. Nenhum dado deve ser escrito diretamente no JSX.

### `constants/projects.js`

Cada projeto segue esta estrutura:

```js
{
  id: 1,                             // number — único, obrigatório
  title: 'Nome do Projeto',          // string — obrigatório
  description: 'Descrição...',       // string — obrigatório, máx. ~150 chars
  tags: ['React', 'Tailwind CSS'],   // string[] — obrigatório, usado nos filtros
  repoUrl: 'https://github.com/...', // string — obrigatório
  deployUrl: 'https://...',          // string | null — null omite o botão "Ver Demo"
  imageUrl: null,                    // string | null — opcional por ora
}
```

> A propriedade `deployUrl: null` é intencional: o componente `ProjectCard` usa esse valor para decidir se renderiza ou não o botão "Ver Demo". Nunca use `undefined` — prefira `null` explícito.

### `constants/skills.js`

```js
{
  id: 1,                  // number — único
  name: 'React',          // string — nome exibido na UI
  category: 'frontend',  // string — permite agrupamento futuro
}
```

---

## Rotas

A aplicação tem **uma única rota principal**. A navegação entre seções usa scroll e âncoras HTML — não rotas separadas.

| Path | Componente       | Descrição                            |
| ---- | ---------------- | ------------------------------------ |
| `/`  | `pages/Home`     | Página principal com todas as seções |
| `*`  | `pages/NotFound` | Qualquer URL inválida                |

A configuração fica centralizada em `routes/index.jsx`:

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

O `App.jsx` envolve tudo com o `BrowserRouter` e importa `AppRoutes`.

---

## Gerenciamento de Estado

### Estado local — `useState`

Usado quando apenas o próprio componente precisa do dado. Exemplos:

- `isMenuOpen` na `Navbar`
- `formData`, `errors`, `isSubmitting` no `ContactSection`

### Estado global — Context API

Usado para o tema (dark/light), que precisa ser acessível por qualquer componente da árvore.

**`context/ThemeContext.jsx`** exporta:

- `ThemeProvider` — envolve a aplicação no `App.jsx`
- `useTheme` — hook para consumir `{ theme, toggleTheme }` em qualquer componente

O tema **não persiste entre sessões** (sem `localStorage`). Essa é uma decisão deliberada de escopo.

### Estado derivado — Custom Hook

**`hooks/useFilter.js`** encapsula toda a lógica de filtragem de projetos. O componente `ProjectsSection` não conhece os detalhes — apenas consome a interface do hook:

```js
const { filteredProjects, activeFilter, filters, handleFilterChange } =
  useFilter(projects);
```

| Retorno              | Tipo     | Descrição                                            |
| -------------------- | -------- | ---------------------------------------------------- |
| `filteredProjects`   | array    | Projetos após aplicar o filtro ativo                 |
| `activeFilter`       | string   | Filtro selecionado no momento (`'Todos'` por padrão) |
| `filters`            | string[] | Lista de tags únicas derivadas dos projetos          |
| `handleFilterChange` | function | Atualiza o filtro ativo                              |

---

## Responsividade

Abordagem **Mobile-First**: estilos base para mobile, breakpoints adicionam ou sobrescrevem para telas maiores.

### Breakpoints (Tailwind CSS)

| Prefixo | Largura mínima | Contexto |
| ------- | -------------- | -------- |
| base    | 320px          | Mobile   |
| `md:`   | 768px          | Tablet   |
| `lg:`   | 1024px         | Desktop  |

```jsx
// Exemplo: coluna no mobile, linha no desktop
<div className="flex flex-col md:flex-row">
```

### Comportamento por breakpoint

| Componente        | Mobile               | Desktop                       |
| ----------------- | -------------------- | ----------------------------- |
| `Navbar`          | Menu hamburguer      | Links horizontais             |
| `ProjectsSection` | 1 card por linha     | Grid de 2-3 colunas           |
| `HeroSection`     | Texto centralizado   | Layout com mais espaçamento   |
| `ContactSection`  | Formulário em coluna | Pode usar layout de 2 colunas |

---

## Acessibilidade

### Estrutura semântica obrigatória

```html
<body>
  <header>
    <nav>...</nav>
  </header>
  <main>
    <section id="hero">...</section>
    <section id="about">...</section>
    <section id="projects">...</section>
    <section id="contact">...</section>
  </main>
  <footer>...</footer>
</body>
```

Os `id`s das sections são usados para navegação por âncora a partir da `Navbar`.

### Checklist

- [ ] Uma única tag `<h1>` por página
- [ ] Hierarquia de headings sem pular níveis (`h1` → `h2` → `h3`)
- [ ] Todo `<img>` com atributo `alt` descritivo
- [ ] Todo `<input>` com `<label>` associado via `htmlFor` / `id`
- [ ] Links `target="_blank"` com `rel="noopener noreferrer"`
- [ ] Botões com texto descritivo (ícones sozinhos precisam de `aria-label`)
