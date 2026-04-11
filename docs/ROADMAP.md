# Roadmap de Desenvolvimento

Este documento detalha o plano de desenvolvimento dividido por semanas, com metas claras e critérios de conclusão para cada fase.

---

## Visão Geral

| Semana | Foco                         | Meta                                  |
| ------ | ---------------------------- | ------------------------------------- |
| 1      | Fundação                     | Projeto configurado, estrutura criada |
| 2      | Estrutura visual             | Navbar e Hero funcionando             |
| 3      | Core — Projetos e Filtros    | Galeria e filtros funcionando         |
| 4      | Formulário, ajustes e deploy | Aplicação polida e publicada          |

---

## Semana 1 — Fundação

**Meta:** Projeto configurado, estrutura de pastas criada e roteamento básico funcionando.

### Tarefas

- [x] Criar projeto com Vite + React
- [x] Instalar e configurar Tailwind CSS v4
- [x] Configurar ESLint
- [x] Criar estrutura de pastas conforme arquitetura
- [x] Instalar React Router DOM
- [x] Criar `constants/projects.js` com dados reais dos projetos
- [x] Criar `constants/skills.js` com habilidades reais
- [x] Criar `routes/index.jsx` com roteamento básico
- [x] Conectar `BrowserRouter` e `AppRoutes` no `App.jsx`
- [x] Criar `pages/Home/index.jsx` e `pages/NotFound/index.jsx` (esqueleto)

**Critério de conclusão:** `npm run dev` abre uma página em branco sem erros no console. Acessar uma URL inválida exibe a página NotFound.

---

## Semana 2 — Estrutura Visual

**Meta:** Navbar e HeroSection funcionando em mobile e desktop.

### Tarefas

- [x] Criar atom `Button` com suporte a variantes e estado `disabled`
- [x] Criar `context/ThemeContext.jsx` com `ThemeProvider` e hook `useTheme`
- [x] Envolver a aplicação com `ThemeProvider` no `App.jsx`
- [x] Criar organism `Navbar` com menu hamburguer no mobile e toggle de tema
- [x] Criar organism `HeroSection` com nome, cargo, CTA e links sociais
- [ ] Criar organism `Footer` com ano dinâmico e links
- [ ] Garantir responsividade em 375px e 1280px

**Critério de conclusão:** Navbar e Hero renderizando corretamente nos dois breakpoints. Toggle de tema altera visualmente toda a aplicação.

---

## Semana 3 — Core: Projetos e Filtros

**Meta:** Galeria de projetos com filtros e seção About funcionando.

### Tarefas

- [ ] Criar atom `Tag`
- [ ] Criar molecule `ProjectCard` com renderização condicional do botão Demo
- [ ] Criar molecule `FilterButton` com estado visual ativo/inativo
- [ ] Criar `hooks/useFilter.js` com lógica de filtragem e derivação de tags
- [ ] Criar organism `ProjectsSection` consumindo hook e constantes
- [ ] Criar organism `AboutSection` com skills carregadas de `constants/skills.js`
- [ ] Montar `pages/Home` compondo os organisms criados até agora

**Critério de conclusão:** Projetos renderizados a partir dos dados. Filtros funcionando sem recarregar a página. Clicar em "Todos" restaura todos os projetos.

---

## Semana 4 — Formulário, Ajustes e Deploy

**Meta:** Formulário funcional, aplicação polida e publicada.

### Tarefas

- [ ] Criar `utils/validators.js` com função `isValidEmail`
- [ ] Criar atom `Input` com suporte a estado de erro
- [ ] Criar molecule `FormField` compondo label + input + mensagem de erro
- [ ] Criar organism `ContactSection` com validação e feedback de sucesso
- [ ] Revisar responsividade geral em todos os componentes
- [ ] Revisar acessibilidade: semântica, `alt`, `htmlFor`, `aria-label`
- [ ] Resolver todos os warnings do ESLint (`npm run lint`)
- [ ] Fazer deploy no GitHub Pages ou Vercel

**Critério de conclusão:** Aplicação publicada e acessível via URL pública. Formulário valida, exibe feedback e reseta após envio.

---

## Definition of Done (DoD)

Um item está **concluído** somente quando todos os critérios abaixo são verdadeiros.

### Por componente

- [ ] Responsabilidade única e claramente definida
- [ ] Sem dados hardcoded que deveriam vir de constantes ou props
- [ ] Props desestruturadas na assinatura da função
- [ ] Funciona em mobile (375px) e desktop (1280px)

### Por seção / página

- [ ] Todos os requisitos funcionais da seção implementados (ver [REQUIREMENTS.md](REQUIREMENTS.md))
- [ ] Regras de negócio aplicáveis respeitadas
- [ ] Links externos com `rel="noopener noreferrer"`

### Geral — antes do deploy

- [ ] `npm run build` executa sem erros
- [ ] `npm run lint` sem erros
- [ ] Sem `console.log` no código
- [ ] Testado no Chrome DevTools em 375px (mobile) e 1280px (desktop)
- [ ] Navegação entre seções via âncoras funciona corretamente
- [ ] Formulário valida, exibe feedback e reseta

---

## Glossário

| Termo        | Definição                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------ |
| SPA          | Single Page Application — a navegação não recarrega o browser                              |
| Atom         | Componente mais básico, sem dependências de outros componentes do projeto                  |
| Molecule     | Componente formado pela composição de atoms                                                |
| Organism     | Componente complexo que representa uma seção completa da interface                         |
| Hook         | Função React que começa com `use` e permite usar recursos do React (estado, efeitos, etc.) |
| Custom Hook  | Hook criado pelo desenvolvedor para encapsular e reutilizar lógica                         |
| Context API  | Mecanismo do React para compartilhar dados entre componentes sem passar props manualmente  |
| Mobile-First | Estilos base para mobile — breakpoints adicionam estilos para telas maiores                |
| Hardcoded    | Dado escrito diretamente no código, sem vir de variável, constante ou prop                 |
| DoD          | Definition of Done — critérios que definem quando uma tarefa está realmente concluída      |
| CTA          | Call to Action — elemento que convida o usuário a realizar uma ação                        |
