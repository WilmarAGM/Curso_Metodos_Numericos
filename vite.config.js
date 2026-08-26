import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  // Las ~20 páginas de capítulo viven en public/ (HTML autocontenido con LaTeX/MathJax
  // crudo que el parser estricto de Vite/rollup no puede procesar) y se copian tal cual.
  // Solo index.html pasa por el pipeline real de Vite.
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Métodos Numéricos — UNAL Medellín',
        short_name: 'Métodos Numéricos',
        description:
          'Métodos Numéricos — material interactivo: raíces, métodos iterativos y ejercicios. Universidad Nacional de Colombia, Sede Medellín.',
        theme_color: '#1a1412',
        background_color: '#f5f0e8',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        lang: 'es',
        icons: [
          {
            src: 'pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Las páginas de capítulo son navegaciones reales de un sitio multi-página, no rutas
        // de un SPA: el fallback de index.html NUNCA debe interceptar una URL con extensión de
        // archivo (pdf, doc, png, html de capítulo, etc.).
        navigateFallbackDenylist: [/\.[a-zA-Z0-9]+$/],
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,woff2,pdf}'],
        // metodos.png (2.4 MB) no está referenciado por ninguna página; no vale precachearlo.
        globIgnores: ['**/img/metodos.png'],
        runtimeCaching: [
          {
            // El programa del curso y el cronograma cambian durante el semestre:
            // nunca deben quedar servidos desde una versión vieja del caché indefinidamente.
            urlPattern: /\.(?:pdf|doc)$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'documentos-curso',
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 7 },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'imagenes',
              expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
});
