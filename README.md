# Entre Algoritmos e Sonhos

Plataforma educacional em português para ajudar estudantes a explorar interesses, áreas do conhecimento, cursos e possibilidades profissionais. A experiência inclui um questionário de 24 afirmações inspirado no modelo RIASEC, resultados explicáveis, seleção de matérias favoritas e recomendações de cursos.

## Tecnologias

- TanStack Start e TanStack Router
- React 19 e TypeScript
- Tailwind CSS 4 como base de processamento, com sistema visual próprio em CSS
- Lucide React para ícones
- Netlify para build, hospedagem e suporte ao aplicativo web instalável

## Desenvolvimento local

Requer Node.js 22 e pnpm.

```bash
pnpm install
pnpm dev
```

O servidor de desenvolvimento padrão abre em `http://localhost:3000`. Em um ambiente Netlify, use `netlify dev --port 8889` para reproduzir a configuração da plataforma.

## Estrutura principal

- `src/routes/index.tsx`: página, navegação e toda a experiência interativa
- `src/data/career.ts`: perguntas, perfis, matérias e catálogo de cursos
- `src/styles.css`: sistema visual responsivo
- `public/manifest.webmanifest`: metadados de instalação
- `public/sw.js`: cache básico para experiência PWA

O questionário é educacional e não representa teste psicológico, diagnóstico ou orientação profissional individualizada.
