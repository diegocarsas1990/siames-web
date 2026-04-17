# Siames - Tienda Analógica

Bienvenido al repositorio oficial de **Siames**.
Este sitio web es completamente estático, rápido y optimizado para buscadores (SEO). Está construido con Next.js y Tailwind CSS.

## ¿Cómo añadir nuevos artículos a "Usos" o "Encuentros"?

El sitio utiliza archivos **Markdown** para gestionar el contenido del blog y la galería de usos. Todo lo que necesitas hacer es crear un archivo `.md` en la carpeta correcta dentro del repositorio.

1. Navega a la carpeta `content/usos` o `content/encuentros`.
2. Crea un nuevo archivo con extensión `.md` (ej. `mi-nuevo-evento.md`). El nombre del archivo formará el enlace final (`/encuentros/mi-nuevo-evento`).
3. En la parte superior del archivo, añade los **Metadatos** entre guiones:
    ```md
    ---
    title: 'Título de mi evento'
    date: '2023-12-01'
    image: 'https://images.unsplash.com/... (link de tu foto)'
    excerpt: 'Un pequeño resumen de qué trata el artículo.'
    ---
    ```
4. Después de los metadatos, escribe libremente tu contenido. Puedes usar negritas, listas y subtítulos.
5. Guarda y haz un `commit` (o súbelo directamente desde GitHub). Una vez actualizado en GitHub (o Vercel si está configurado), la magia se hará sola y se publicará el nuevo post.

## Desarrollo Local

Si eres un desarrollador trabajando en el proyecto:

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor local
npm run dev

# 3. Generar el build estático de producción
npm run build
```

## Estructura del diseño

Basados en la estética premium y minimalista, este código utiliza la fuente `Playfair Display` para títulos y `Inter` para cuerpos de texto, configuradas directamente dentro de `layout.tsx` a través del sistema de Next Font. Tailwind CSS está modificado con variables inyectadas en `@theme` para texturas similares a papel color crema (`#fdfbf7`) y tipografía en tonos carbón (`#2d2b2a`).
