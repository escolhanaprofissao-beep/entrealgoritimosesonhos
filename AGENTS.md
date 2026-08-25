# AGENTS.md

## Visão geral

Este projeto é uma experiência educacional de página única chamada “Entre Algoritmos e Sonhos”. Ele apresenta conteúdo editorial e um questionário inspirado no modelo RIASEC para ajudar estudantes a explorar áreas, cursos e profissões sem tratar o resultado como diagnóstico.

## Arquitetura

- `src/routes/__root.tsx` define o documento HTML, metadados, fontes e manifesto.
- `src/routes/index.tsx` contém a rota principal, os componentes locais e o estado do questionário.
- `src/data/career.ts` centraliza perguntas, códigos RIASEC, matérias e cursos.
- `src/styles.css` contém tokens, layouts, estados interativos e responsividade.
- `public/manifest.webmanifest`, `public/icon.svg` e `public/sw.js` formam a camada PWA.
- `netlify.toml` configura o build do TanStack Start no Netlify.

## Convenções

- Use TypeScript estrito e imports com o alias `@/`.
- Use componentes React em PascalCase e funções auxiliares em camelCase.
- Mantenha conteúdo educacional e dados de carreira em `src/data/career.ts`.
- Preserve os avisos de uso responsável e a linguagem sem estereótipos.
- Use ícones Lucide em vez de emojis na interface.
- Prefira CSS Grid, variáveis de design e estados `focus-visible` acessíveis.
- Respeite `prefers-reduced-motion` e mantenha controles com tamanho adequado para toque.

## Decisões importantes

- As respostas ficam somente no estado do navegador; não há persistência ou coleta de dados pessoais.
- A compatibilidade soma pontuações positivas dos perfis associados e adiciona peso às matérias selecionadas.
- Percentuais são indicadores relativos para exploração, não probabilidades científicas.
- A instalação como aplicativo usa um service worker simples com estratégia network-first e fallback em cache.

## Comandos

- `pnpm dev`: desenvolvimento local
- `pnpm build`: build de produção, executado pela pipeline
