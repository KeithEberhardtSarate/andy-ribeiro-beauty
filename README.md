# Andy Ribeiro — Site (Next.js + React + TypeScript)

Export componentizado da **Homepage v2**, do **Design System** e do **Logo H1**, pronto para
evoluir como aplicação Next.js (App Router).

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
```

Requer Node 18.17+.

## Rotas

| Rota              | Arquivo                          | O que é                                  |
| ----------------- | -------------------------------- | ---------------------------------------- |
| `/`               | `app/page.tsx`                   | Homepage v2 (composição das seções)      |
| `/design-system`  | `app/design-system/page.tsx`     | Referência viva: tokens + componentes    |
| `/logo`           | `app/logo/page.tsx`              | A marca (Direção H1) e suas aplicações   |

## Estrutura

```
app/
  layout.tsx              Carrega as fontes (next/font) + importa os CSS globais
  page.tsx                Homepage v2
  design-system/page.tsx  Design System
  logo/page.tsx           Aplicações do logo

components/
  Logo.tsx                ⭐ A marca H1 — variantes de cor, tamanho e lockup
  ui/                     Primitivos do design system
    Button.tsx            Botão/link em pílula (solid | ghost, onDark)
    Eyebrow.tsx           Micro-rótulo mono magenta
    MetaRow.tsx           Cabeçalho editorial de seção (régua + 2 rótulos)
    Badge.tsx             Etiqueta contornada
    Arrow.tsx             Seta de botão/link (CSS puro)
    ImageSlot.tsx         Moldura de imagem (next/image ou placeholder)
  home/                   Seções da Homepage v2
    Nav.tsx  Hero.tsx  Services.tsx  About.tsx
    Digital.tsx  BlogPreview.tsx  FinalCta.tsx  Footer.tsx

lib/
  content.ts              Conteúdo editorial (serviços, ofertas, posts, links)

styles/                   CSS global, importado em app/layout.tsx (na ordem)
  tokens.css              ⭐ Design tokens (cores oklch + fontes)
  base.css                Reset + utilitários
  components.css          Nav, botão, meta-row, badge, portrait, footer
  home.css                Seções da homepage v2
  logo.css                Estilos do componente Logo
  design-system.css       Páginas /design-system e /logo

public/photos/            Fotos (substitua pelas finais com mesmo nome)
```

## Logo — o componente da marca

```tsx
import Logo from "@/components/Logo";

<Logo />                                  // lg, tema claro (padrão)
<Logo size="nav" href="/" />              // marca clicável da barra de navegação
<Logo size="md" theme="dark" />           // rodapé sobre fundo escuro
<Logo theme="pink" />                     // sobre o rosa da marca (reverso branco)
<Logo theme="mono" />                     // uma cor só (carimbo / gravação)
<Logo layout="stacked" />                 // lockup empilhado p/ avatar / selo
```

- **size**: `"nav" | "sm" | "md" | "lg"`
- **theme**: `"light" | "dark" | "pink" | "mono"`
- **layout**: `"lockup" | "stacked"`
- **href**: se passado, envolve a marca num `<Link>`

## Tokens & temas

Toda a paleta e as fontes vivem em **`styles/tokens.css`** como CSS custom properties
(em `oklch`). Os componentes só consomem `var(--token)` — alterar um token propaga para
o site inteiro. As fontes (Playfair Display, Manrope, JetBrains Mono, Pinyon Script) são
carregadas via `next/font/google` em `app/layout.tsx` e expostas como `--font-*`,
referenciadas por `--serif / --sans / --mono / --sig`.

## Imagens

As seções usam `next/image`. As fotos finais devem substituir os arquivos em
`public/photos/` mantendo os mesmos nomes (`andy-hero-new.jpg`, `andy-b.jpg`). As capas
do blog usam `<ImageSlot>` com placeholder — passe `cover` em `lib/content.ts` (ex.:
`cover: "/photos/post-1.jpg"`) para exibir a foto real.

## Observações de arquitetura

- **App Router** + Server Components por padrão (sem `"use client"` necessário — tudo é
  estático/declarativo).
- CSS global com classes semânticas (não CSS Modules) para máxima fidelidade ao design
  original e fácil leitura. Migrar para CSS Modules ou Tailwind depois é direto.
- Conteúdo separado da apresentação em `lib/content.ts` — pronto para virar CMS/MDX.
