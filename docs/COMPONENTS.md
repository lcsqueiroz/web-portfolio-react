# Especificação de Componentes

Este documento descreve props, comportamento e localização de cada componente do projeto. Organizado por nível do Atomic Design.

> Para entender a hierarquia atoms → molecules → organisms → pages, consulte [ARCHITECTURE.md](ARCHITECTURE.md).

---

## Atoms

Atoms são a menor unidade da interface. Não têm lógica de negócio — apenas recebem dados via props e renderizam HTML estilizado.

---

### `Button`

**Caminho:** `src/components/atoms/Button/index.jsx`

| Prop       | Tipo     | Obrigatório | Padrão      | Descrição                                      |
| ---------- | -------- | ----------- | ----------- | ---------------------------------------------- |
| `label`    | string   | Sim         | —           | Texto exibido no botão                         |
| `onClick`  | function | Não         | `undefined` | Handler de clique                              |
| `variant`  | string   | Não         | `'primary'` | Estilo visual: `'primary'`, `'secondary'`, `'ghost'` |
| `disabled` | boolean  | Não         | `false`     | Desabilita o botão                             |
| `type`     | string   | Não         | `'button'`  | Tipo HTML: `'button'` ou `'submit'`            |

**Comportamento:** Renderiza um `<button>` com classes CSS condicionais baseadas em `variant` e `disabled`, aplicadas via CSS Modules. Quando `disabled` é `true`, o botão não responde a cliques e recebe estilo visual de inativo.

---

### `Tag`

**Caminho:** `src/components/atoms/Tag/index.jsx`

| Prop    | Tipo   | Obrigatório | Descrição                    |
| ------- | ------ | ----------- | ---------------------------- |
| `label` | string | Sim         | Texto da tag (ex: `"React"`) |

**Comportamento:** Renderiza um `<span>` estilizado para exibir o nome de uma tecnologia. Usado dentro de `ProjectCard` para listar as tecnologias de cada projeto.

---

### `Input`

**Caminho:** `src/components/atoms/Input/index.jsx`

| Prop          | Tipo     | Obrigatório | Padrão   | Descrição                                          |
| ------------- | -------- | ----------- | -------- | -------------------------------------------------- |
| `id`          | string   | Sim         | —        | Conecta o input ao `<label>` via `htmlFor`         |
| `type`        | string   | Não         | `'text'` | Tipo HTML do input                                 |
| `value`       | string   | Sim         | —        | Valor controlado (controlled component)            |
| `onChange`    | function | Sim         | —        | Handler chamado a cada mudança de valor            |
| `placeholder` | string   | Não         | `''`     | Texto de placeholder                               |
| `error`       | string   | Não         | `''`     | Mensagem de erro — string vazia significa sem erro |

**Comportamento:** Renderiza um `<input>` controlado. Quando `error` é uma string não vazia, aplica estilo de borda de erro no campo. A mensagem de erro em si é renderizada pelo `FormField`, não pelo `Input`.

---

## Molecules

Molecules combinam atoms para formar uma unidade com significado próprio.

---

### `ProjectCard`

**Caminho:** `src/components/molecules/ProjectCard/index.jsx`

| Prop          | Tipo     | Obrigatório | Descrição                                 |
| ------------- | -------- | ----------- | ----------------------------------------- |
| `title`       | string   | Sim         | Nome do projeto                           |
| `description` | string   | Sim         | Descrição curta (~150 chars)              |
| `tags`        | string[] | Sim         | Lista de tecnologias usadas               |
| `repoUrl`     | string   | Sim         | URL do repositório no GitHub              |
| `deployUrl`   | string   | Não         | URL do deploy — `null` omite o botão Demo |

**Comportamento:**
- Renderiza cada item de `tags` usando o componente `Tag`
- Renderiza sempre o botão "Ver Repositório" (link para `repoUrl`)
- Renderiza o botão "Ver Demo" **somente se** `deployUrl` for truthy — o botão não aparece quando `deployUrl` é `null` ou `undefined` (regra de negócio RN01)
- Todos os links abrem em nova aba com `target="_blank" rel="noopener noreferrer"`

---

### `FilterButton`

**Caminho:** `src/components/molecules/FilterButton/index.jsx`

| Prop       | Tipo     | Obrigatório | Descrição                                      |
| ---------- | -------- | ----------- | ---------------------------------------------- |
| `label`    | string   | Sim         | Texto exibido no botão de filtro               |
| `isActive` | boolean  | Sim         | Se `true`, aplica estilo de filtro selecionado |
| `onClick`  | function | Sim         | Handler chamado ao clicar no filtro            |

**Comportamento:** Renderiza um botão que exibe visualmente se está ativo ou inativo. O estilo ativo deve ser claramente diferente do inativo. Não gerencia estado — apenas recebe `isActive` e notifica o pai via `onClick`.

---

### `FormField`

**Caminho:** `src/components/molecules/FormField/index.jsx`

| Prop       | Tipo     | Obrigatório | Descrição                           |
| ---------- | -------- | ----------- | ----------------------------------- |
| `id`       | string   | Sim         | ID que conecta `<label>` ao `Input` |
| `label`    | string   | Sim         | Texto do label visível              |
| `type`     | string   | Não         | Tipo do input (padrão `'text'`)     |
| `value`    | string   | Sim         | Valor controlado do campo           |
| `onChange` | function | Sim         | Handler de mudança de valor         |
| `error`    | string   | Não         | Mensagem de erro inline             |

**Comportamento:** Compõe `<label>` + `<Input>` + mensagem de erro condicional. A mensagem de erro só aparece quando `error` é uma string não vazia. O `<label>` é sempre associado ao `<input>` via `htmlFor={id}` / `id={id}` por acessibilidade.

---

## Organisms

Organisms representam seções completas da página. Podem ter estado local e consomem hooks e contextos.

---

### `Navbar`

**Caminho:** `src/components/organisms/Navbar/index.jsx`

**Estado interno:**
- `isMenuOpen` (boolean) — controla abertura do menu no mobile

**Comportamento:**
- No desktop: links de navegação horizontais para cada seção (`#hero`, `#about`, `#projects`, `#contact`)
- No mobile: ícone hamburguer que expande/recolhe um menu vertical
- Consome `useTheme` do `ThemeContext` para exibir o botão de alternância de tema
- Permanece visível ao rolar a página (`position: sticky` ou `fixed`)

---

### `HeroSection`

**Caminho:** `src/components/organisms/HeroSection/index.jsx`

**Sem props** — os dados pessoais podem vir de `constants/personal.js` (decisão do desenvolvedor) ou serem os únicos dados hardcoded no projeto, por serem únicos e imutáveis.

**Comportamento:**
- Exibe nome completo em `<h1>` e cargo/especialidade em subtítulo
- Botão CTA "Ver Projetos" faz scroll suave até `#projects`
- Links para GitHub e LinkedIn abrem em nova aba
- Ocupa `100vh` no desktop

---

### `AboutSection`

**Caminho:** `src/components/organisms/AboutSection/index.jsx`

**Comportamento:**
- Parágrafo de apresentação pessoal/profissional
- Importa `skills` de `constants/skills.js` e renderiza via `.map()` usando o componente `Tag`
- Dados nunca hardcoded no JSX

---

### `ProjectsSection`

**Caminho:** `src/components/organisms/ProjectsSection/index.jsx`

**Comportamento:**
- Importa `projects` de `constants/projects.js`
- Usa o hook `useFilter(projects)` para gerenciar o filtro ativo
- Renderiza um `FilterButton` para cada item em `filters` (incluindo "Todos")
- Renderiza um `ProjectCard` para cada item em `filteredProjects`
- A lógica de filtragem fica 100% no hook — o componente só consome a interface

---

### `ContactSection`

**Caminho:** `src/components/organisms/ContactSection/index.jsx`

**Estado interno:**
- `formData` — `{ name, email, subject, message }` — valores dos campos
- `errors` — objeto com mensagens de erro por campo
- `isSubmitting` (boolean) — controla o estado de loading
- `submitSuccess` (boolean) — controla a exibição do feedback de sucesso

**Comportamento:**
- Valida o formato de e-mail usando `isValidEmail` de `utils/validators.js`
- O botão "Enviar" fica desabilitado enquanto há campos vazios ou e-mail inválido (regra RN03)
- Ao submeter, simula envio com `setTimeout` de 1–2s (sem backend) — regra RN04
- Após o "envio", exibe feedback de sucesso e reseta o formulário
- Mensagens de erro aparecem inline abaixo de cada campo (não em `alert`)

---

### `Footer`

**Caminho:** `src/components/organisms/Footer/index.jsx`

**Comportamento:**
- Exibe texto de copyright com o ano calculado via `new Date().getFullYear()` — nunca hardcoded (regra RN07)
- Links para GitHub e LinkedIn abrem em nova aba com `rel="noopener noreferrer"`

---

## Pages

Pages são componentes de rota. Orquestram organisms e não têm estilo próprio além do layout de página.

---

### `Home`

**Caminho:** `src/pages/Home/index.jsx`

Compõe todos os organisms na ordem correta dentro de `<main>`:

```jsx
<main>
  <HeroSection />
  <AboutSection />
  <ProjectsSection />
  <ContactSection />
</main>
```

---

### `NotFound`

**Caminho:** `src/pages/NotFound/index.jsx`

Exibida para qualquer URL que não seja `/`. Mensagem simples de página não encontrada com link para voltar à home.
