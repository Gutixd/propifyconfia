# PropifyConfia — Sitio Web Oficial

> "Tu propiedad, en manos seguras." · Corredora de propiedades digital · Santiago de Chile

## Stack: Next.js 16 · Tailwind CSS v4 · Framer Motion v12 · TypeScript

## Instalación rápida

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Estructura de componentes

```
src/components/
├── Navbar.tsx                # Navbar sticky con scroll effect
├── Hero.tsx                  # Hero con buscador rápido
├── Propiedades.tsx           # Grid con filtros
├── Nosotros.tsx              # Equipo (Diego, Valentina, Amaro) + valores
├── Servicios.tsx             # Tarjetas de servicios
├── SimuladorHipotecario.tsx  # Calculadora crédito hipotecario chileno
├── Testimonios.tsx           # Carrusel de reseñas
├── Contacto.tsx              # Formulario + mapa
└── Footer.tsx                # Pie de página
```

## Dónde reemplazar contenido

**Fotos reales** → `/public/images/prop1-6.jpg`, `diego.jpg`, `valentina.jpg`, `amaro.jpg`

**Video hero** → descomenta en `Hero.tsx` y agrega `/public/videos/hero.mp4`

**WhatsApp** → reemplaza `56912345678` con el número real

**Google Maps** → descomenta el `<iframe>` en `Contacto.tsx`

**Supabase (formulario)** → en `Contacto.tsx`, descomenta la lógica de Supabase y agrega variables de entorno

## Variables de entorno (.env.local)

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Deploy

```bash
vercel --prod
```

---

*Anteriormente:*

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
