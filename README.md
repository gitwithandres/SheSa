# 🌸 SheSa · Landing Page

Landing page profesional para **Elvia Martínez** y su emprendimiento **SheSa** — comunidad de mamás que generan ingresos desde casa.

---

## 🚀 Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🛠️ Stack

| Tecnología     | Uso                          |
|----------------|------------------------------|
| Vite 5         | Bundler y dev server         |
| React 18       | UI                           |
| TypeScript 5   | Tipado estático              |
| Tailwind CSS 3 | Estilos utility-first        |
| Framer Motion  | Animaciones                  |
| Supabase       | Backend (preparado, inactivo)|

---

## 📁 Estructura

```
src/
  components/
    layout/
      Navbar.tsx       # Navegación responsive con scroll detection
      Footer.tsx       # Pie de página
    sections/
      Hero.tsx         # Sección principal con animación fade-in
      Emprender.tsx    # 3 cards de beneficios
      WhatsAppCTA.tsx  # CTA destacada hacia WhatsApp
      Manualidades.tsx # Grid de productos con tipos TS
      Farmasi.tsx      # Sección Farmasi con 3 opciones
    ui/
      Button.tsx       # Componente botón reutilizable (4 variantes)
      Card.tsx         # Card con animación hover
  lib/
    supabase.ts        # Configuración placeholder + tipos
  App.tsx
  main.tsx
  index.css
```

---

## 🎨 Paleta de colores

| Token              | Hex       |
|--------------------|-----------|
| `primary-lilac`    | `#C4A0BC` |
| `primary-pink`     | `#E1B9DA` |
| `primary-blush`    | `#E4C6CE` |
| `primary-lavender` | `#E6C2E0` |
| `primary-peach`    | `#E2B4A6` |

---

## ✏️ Personalización rápida

### 1. Número de WhatsApp
Busca `TUNUMERO` en todo el proyecto y reemplázalo con tu número en formato internacional (ej: `521XXXXXXXXXX`).

### 2. Links de Farmasi
En `src/components/sections/Farmasi.tsx`, busca `TUENLACE` y reemplázalo con tu URL real de Farmasi.

### 3. Foto de Elvia
En `Hero.tsx`, reemplaza el placeholder div por una etiqueta `<img>`:
```tsx
<img src="/elvia.webp" alt="Elvia Martínez - Fundadora de SheSa"
     className="w-full h-full object-cover" />
```

### 4. Productos de Manualidades
Edita el array `products` en `Manualidades.tsx`. Cada producto tiene:
```ts
{ id, name, price, image, category, description, whatsapp_message }
```

---

## 🗄️ Activar Supabase

1. Crea un proyecto en [supabase.com](https://supabase.com)
2. Copia `.env.example` → `.env.local` y rellena tus credenciales
3. Descomenta el cliente en `src/lib/supabase.ts`
4. Migra el array de productos a una tabla `products` en Supabase

---

## 🏗️ Build para producción

```bash
npm run build
npm run preview
```

Los archivos estáticos se generan en `dist/`.

---

## 📄 Licencia

Uso privado · SheSa · Elvia Martínez
