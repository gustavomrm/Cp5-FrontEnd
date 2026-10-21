# Receitário

Catálogo de receitas feito em **React + Vite + TypeScript** que consome a API pública da [DummyJSON](https://dummyjson.com/docs/recipes). Checkpoint 5 da disciplina de Frontend (FIAP, 2º semestre).

**Deploy:** https://cp5-front-end.vercel.app

![Tela do catálogo](./docs/catalogo.png)

## Integrantes

| Nome | RM |
| --- | --- |
| Gustavo Mendes da Rosa Moreira | 565807 |
| Leonardo de Souza Bernardo | 570951 |
| Luiz Guedes | 565843 |

## Funcionalidades

- **Catálogo (`/`)**: grid de cards com imagem, nome, culinária e tempo total (`prepTimeMinutes + cookTimeMinutes`), busca por nome e filtro por culinária que funcionam juntos, botão de favoritar em cada card e contador "N favoritas".
- **Detalhe (`/receitas/:id`)**: imagem, ingredientes, modo de preparo e tempos de preparo, cozimento e total, com mensagem quando a receita não existe.
- **404 (`*`)**: página não encontrada com link de volta ao catálogo.
- Estados de carregamento (skeleton), erro e lista vazia; `ErrorBoundary` e carregamento sob demanda da página de detalhe.

## Tecnologias

- React 19, Vite e TypeScript
- React Router
- Tailwind CSS v4 e Lucide (ícones)
- react-error-boundary

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (checa os tipos)
npm run preview  # serve o build localmente
```

## Estrutura

```
src/
├── components/   # Header, Footer, RecipeCard, RecipeList, skeletons, ErrorFallback
├── hooks/        # useRecipes
├── layouts/      # MainLayout (header + footer compartilhados)
├── pages/        # CatalogPage, RecipePage, NotFoundPage
├── services/     # chamadas à DummyJSON
├── types/        # Recipe e RecipesResponse
└── utils/        # tempo total e formatação
```

## Git Flow

- `main`: produção (deploy na Vercel); `develop`: integração.
- Funcionalidades em `feature/*`, mergeadas na `develop` por Pull Request.
- Entrega em `release/1.0.0`, mergeada na `main`, com a tag `v1.0.0` e a Release publicada no GitHub.
- Commits no padrão Conventional Commits.
