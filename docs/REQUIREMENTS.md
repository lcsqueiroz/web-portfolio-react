# Requisitos do Projeto

Este documento reúne os requisitos funcionais, não-funcionais e as regras de negócio da aplicação.

---

## Requisitos Funcionais

Os requisitos funcionais descrevem **o que a aplicação deve fazer**.

---

### RF01 — Seção Hero (Apresentação)

Primeira seção visível ao entrar no site.

**Especificações:**
- Exibir nome completo em destaque (`<h1>`)
- Exibir cargo/especialidade como subtítulo
- Botão CTA "Ver Projetos" que faz scroll suave até a seção de projetos
- Links para redes sociais (GitHub, LinkedIn)

**Critérios de aceite:**
- [ ] O `<h1>` contém o nome do desenvolvedor
- [ ] O botão CTA rola a página até a seção correta
- [ ] Os links de redes sociais abrem em nova aba
- [ ] A seção ocupa 100% da altura da tela (`100vh`) no desktop

---

### RF02 — Seção Sobre (About)

Breve descrição pessoal e profissional.

**Especificações:**
- Parágrafo de apresentação pessoal/profissional
- Lista visual de habilidades técnicas (tags)
- Os dados de habilidades devem vir de `constants/skills.js`

**Critérios de aceite:**
- [ ] Dados de skills carregados a partir de constante, não hardcoded no JSX
- [ ] Tags de habilidade renderizadas dinamicamente via `.map()`

---

### RF03 — Galeria de Projetos

Listagem dos projetos pessoais com card individual para cada um.

**Especificações:**
- Dados dos projetos carregados de `constants/projects.js`
- Cada `ProjectCard` exibe: título, descrição curta, tecnologias usadas, link do repositório
- Se o projeto tiver link de deploy, exibir botão "Ver Demo"
- Se não tiver deploy, o botão "Ver Demo" não aparece (não apenas desabilitado — não renderiza)

**Critérios de aceite:**
- [ ] Projetos renderizados via `.map()` sobre o array de `constants/projects.js`
- [ ] `ProjectCard` é reutilizável, sem dados hardcoded
- [ ] Botão "Ver Demo" omitido quando `deployUrl` for `null` ou `undefined`
- [ ] Links abrem em nova aba com `target="_blank" rel="noopener noreferrer"`

---

### RF04 — Filtro de Projetos por Tecnologia

Sistema de filtragem para exibir projetos por tecnologia.

**Especificações:**
- Botões de filtro gerados dinamicamente a partir das tags dos projetos (sem lista hardcoded)
- Filtro "Todos" sempre presente e selecionado por padrão
- Ao clicar em um filtro, apenas projetos com aquela tag são exibidos
- A troca de filtro não recarrega a página

**Critérios de aceite:**
- [ ] Lista de filtros gerada automaticamente a partir dos dados em `projects.js`
- [ ] O filtro ativo tem estilo visual diferente dos inativos
- [ ] Ao selecionar "Todos", todos os projetos são exibidos novamente
- [ ] A lógica de filtragem está em `hooks/useFilter.js`, não no componente

---

### RF05 — Formulário de Contato

Seção para que visitantes possam enviar mensagens.

**Especificações:**
- Campos: Nome, E-mail, Assunto, Mensagem
- Todos os campos são obrigatórios
- Validação de formato de e-mail
- Botão "Enviar" desabilitado enquanto há campos vazios ou inválidos
- Após "envio", exibir feedback visual de sucesso (envio simulado, sem backend)
- Após o feedback, limpar o formulário

**Critérios de aceite:**
- [ ] Botão desabilitado com campos vazios
- [ ] E-mail inválido exibe mensagem de erro inline (não `alert`)
- [ ] Feedback de sucesso exibido após submissão
- [ ] Formulário resetado após submissão bem-sucedida
- [ ] Função de validação de e-mail está em `utils/validators.js`

---

### RF06 — Navbar / Header

Barra de navegação fixa no topo da página.

**Especificações:**
- Links de ancoragem para cada seção (Hero, Sobre, Projetos, Contato)
- No mobile: menu hamburguer que expande/recolhe
- Botão para alternar tema dark/light

**Critérios de aceite:**
- [ ] Links de navegação fazem scroll suave até a seção correspondente
- [ ] Menu hamburguer funcional no mobile (abre e fecha)
- [ ] Botão de tema altera o tema visualmente em toda a aplicação
- [ ] Navbar permanece visível ao rolar a página

---

### RF07 — Footer

Rodapé simples com informações de crédito.

**Especificações:**
- Texto de copyright com ano atual gerado dinamicamente
- Links para GitHub e LinkedIn

**Critérios de aceite:**
- [ ] Ano exibido gerado por `new Date().getFullYear()`, não hardcoded
- [ ] Links abrem em nova aba

---

## Requisitos Não-Funcionais

Os requisitos não-funcionais descrevem **como a aplicação deve se comportar**.

---

### RNF01 — Organização de Código

- Nenhum dado de projeto ou skill deve estar escrito diretamente no JSX
- Nenhum componente deve ter mais de uma responsabilidade claramente distinta
- Funções de lógica pura (validações, formatações) devem estar em `utils/`

### RNF02 — Responsividade

- A aplicação deve ser funcional em: 320px, 768px e 1024px+
- Abordagem Mobile-First: estilos base para mobile, breakpoints para telas maiores

### RNF03 — Performance

- Não carregar bibliotecas desnecessárias
- Imagens em formato WebP quando possível
- `npm run build` deve executar sem erros ou warnings críticos

### RNF04 — Acessibilidade Básica

- Uso correto de tags semânticas: `<nav>`, `<main>`, `<section>`, `<footer>`, `<header>`
- Todas as imagens com atributo `alt` descritivo
- Formulário com `<label>` corretamente associado a cada `<input>`

### RNF05 — Qualidade de Código

- Sem erros de ESLint no momento do build
- Sem `console.log` esquecidos no código final
- Sem variáveis declaradas e não utilizadas

---

## Regras de Negócio

As regras de negócio definem **comportamentos específicos e inegociáveis** da aplicação.

| ID   | Regra                                                                                                                               |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------- |
| RN01 | O botão "Ver Demo" de um `ProjectCard` só é renderizado se o projeto tiver `deployUrl` preenchida (não `null`, não `undefined`)     |
| RN02 | A lista de botões de filtro é derivada das tags dos projetos — nunca definida manualmente no componente                             |
| RN03 | O botão de submit do formulário só fica habilitado quando todos os campos estão preenchidos E o e-mail é válido                     |
| RN04 | O envio do formulário é simulado (sem backend). Após 1–2 segundos de loading, o feedback de sucesso é exibido                      |
| RN05 | O tema (dark/light) persiste durante a sessão via Context API. Não precisa persistir entre sessões (sem `localStorage` por ora)    |
| RN06 | Todos os links externos com `target="_blank"` devem ter `rel="noopener noreferrer"`                                                 |
| RN07 | O ano no footer deve ser calculado em tempo de execução via `new Date().getFullYear()` — nunca hardcoded                            |
