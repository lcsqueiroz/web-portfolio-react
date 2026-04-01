# Convenções e Padrões de Código

Este documento define os padrões que devem ser seguidos em todo o projeto para garantir consistência e legibilidade do código.

---

## Nomenclatura de Arquivos

| Tipo                | Convenção                      | Exemplo                        |
| ------------------- | ------------------------------ | ------------------------------ |
| Componentes React   | PascalCase em pasta própria    | `components/atoms/Button/index.jsx` |
| Hooks customizados  | camelCase com prefixo `use`    | `hooks/useFilter.js`           |
| Utilitários         | camelCase                      | `utils/validators.js`          |
| Constantes / dados  | camelCase                      | `constants/projects.js`        |
| Contextos           | PascalCase + sufixo `Context`  | `context/ThemeContext.jsx`     |
| Páginas             | PascalCase em pasta própria    | `pages/Home/index.jsx`         |

> Cada componente fica em sua própria pasta (`Button/index.jsx`) em vez de um arquivo solto (`Button.jsx`). Isso facilita adicionar arquivos relacionados no futuro (ex: testes, estilos locais) sem poluir a pasta pai.

---

## Nomenclatura de Variáveis e Funções

### Regras gerais

| Tipo              | Prefixo / Padrão | Exemplos                          |
| ----------------- | ---------------- | --------------------------------- |
| Booleanos         | `is`, `has`, `can` | `isLoading`, `hasError`, `canSubmit` |
| Funções de evento | `handle`         | `handleClick`, `handleSubmit`     |
| Arrays            | plural           | `projects`, `skills`, `tags`      |
| Funções de busca  | `get`            | `getFilteredProjects`             |

```js
// Correto
const [isMenuOpen, setIsMenuOpen] = useState(false);
const handleSubmit = () => {};
const filteredProjects = projects.filter(...);

// Errado
const [menu, setMenu] = useState(false);
const click = () => {};
const fp = projects.filter(...);
```

---

## Estrutura Interna de um Componente

Todo componente deve seguir esta ordem interna, sem exceções:

```jsx
// 1. Imports externos (bibliotecas)
import { useState, useEffect } from 'react';

// 2. Imports internos (componentes, hooks, constantes)
import Button from '../atoms/Button';
import { useTheme } from '../../context/ThemeContext';

// 3. Definição do componente (arrow function)
const ProjectCard = ({ title, description, tags, repoUrl, deployUrl }) => {

  // 4. Estado local
  const [isExpanded, setIsExpanded] = useState(false);

  // 5. Contextos e hooks customizados
  const { theme } = useTheme();

  // 6. Efeitos
  useEffect(() => {
    // ...
  }, []);

  // 7. Funções e handlers
  const handleToggle = () => setIsExpanded((prev) => !prev);

  // 8. Render (return)
  return (
    <div>...</div>
  );
};

// 9. Export default sempre no final
export default ProjectCard;
```

---

## Props

### Desestruturar na assinatura

Props devem ser desestruturadas diretamente na assinatura da função, nunca acessadas via `props.algo`.

```jsx
// Correto
const Button = ({ label, onClick, variant = 'primary', disabled = false }) => {
  return <button onClick={onClick} disabled={disabled}>{label}</button>;
};

// Errado
const Button = (props) => {
  const label = props.label;
  return <button>{label}</button>;
};
```

### Valores padrão

Props opcionais devem ter valor padrão definido na assinatura:

```jsx
const Button = ({
  label,
  onClick,
  variant = 'primary',  // padrão explícito
  disabled = false,      // padrão explícito
  type = 'button',       // padrão explícito
}) => { ... };
```

### Renderização condicional

Prefira `&&` para renderização condicional simples e ternário quando há um fallback:

```jsx
// Renderiza ou não renderiza (sem fallback)
{deployUrl && <Button label="Ver Demo" onClick={() => window.open(deployUrl)} />}

// Renderiza um de dois (com fallback)
{isSubmitting ? <span>Enviando...</span> : <Button label="Enviar" type="submit" />}
```

> Nunca use `undefined` como valor de prop quando a intenção é "ausente" — use `null` explícito. Isso torna o comportamento previsível e facilita as checagens com `&&`.

---

## Contextos

Cada arquivo em `context/` deve exportar obrigatoriamente dois itens:

1. O `Provider` — envolve a árvore de componentes que precisa do dado
2. Um hook customizado de acesso — abstrai o `useContext` e valida o uso correto

```jsx
// context/ThemeContext.jsx

const ThemeContext = createContext();

// 1. Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 2. Hook customizado
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  return context;
};
```

O erro lançado no hook é intencional: garante que o desenvolvedor seja avisado imediatamente se esquecer de envolver o componente com o Provider correto.

---

## Links externos

Todo link que abre em nova aba deve ter o atributo `rel` por segurança:

```jsx
<a href={repoUrl} target="_blank" rel="noopener noreferrer">
  Ver Repositório
</a>
```

> `noopener` impede que a página aberta acesse `window.opener`. `noreferrer` evita o envio do cabeçalho `Referer`. Ambos são necessários para segurança.

---

## Qualidade de código

Antes de qualquer commit:

- Sem erros no ESLint (`npm run lint`)
- Sem `console.log` esquecidos
- Sem variáveis declaradas e não utilizadas
- `npm run build` executando sem erros ou warnings críticos
