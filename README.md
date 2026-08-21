# Curso de Métodos Numéricos

> Plataforma web interactiva para aprender métodos numéricos de forma visual, práctica y aplicada.

---

## Descripción

Este proyecto es una página web educativa desarrollada con HTML, CSS y JavaScript, enfocada en la enseñanza de **métodos numéricos** para estudiantes de ingeniería, matemáticas y áreas afines.

El objetivo es transformar el aprendizaje tradicional en una experiencia más **visual e interactiva**, facilitando la comprensión de algoritmos y técnicas numéricas.

---

## 📂 Estructura del Proyecto

```bash
.
├── index.html          # Página principal (única página procesada por Vite)
├── vite.config.js       # Config de Vite + vite-plugin-pwa
├── src/                 # Botón de instalación PWA (installPrompt.js, InstallAppButton.js)
├── public/              # Servido tal cual, sin procesar (Vite lo copia a dist/ verbatim)
│   ├── capitulo1..5/     # Contenido de cada capítulo (HTML autocontenido)
│   ├── python/           # Introducción a Python
│   ├── Parcial/          # Material evaluativo
│   ├── css/              # Estilos globales del sitio
│   ├── img/               # Imágenes y recursos gráficos
│   └── *.pdf, *.doc       # Programa del curso, cronograma
└── README.md
```

---

## Contenido

El curso incluye temas fundamentales como:

* Raíces
* Métodos iterativos
* Interpolación
* Mínimos cuadrados
* Spline (lineal y cúbico)
* Integración (Newton cotes cerrado y abierto, cuadraturas Gaussianas)
* Problema de valores iniciales (PVIs y sistemas)
* Ploblemas devalores en la frontera
* Ecuaciones diferenciales parciales

Cada capítulo contiene:

* Explicaciones teóricas
* Ejemplos paso a paso
* Implementaciones prácticas

---

##  Características

* 📊 Enfoque visual para entender algoritmos
* 💻 Integración con programación
* 📚 Estructura por capítulos (tipo curso)
* ⚡ Navegación simple y rápida
* 🌐 Compatible con navegador (no requiere instalación)

---

##  Tecnologías

* HTML5
* CSS3
* JavaScript (opcional según implementación)

---

## Uso

El sitio es una PWA instalable construida con [Vite](https://vitejs.dev). Las páginas de
capítulo (`capitulo1/`…`capitulo5/`, `python/`, `Parcial/`) son HTML autocontenido servido tal
cual desde `public/`; `index.html` es la única página que pasa por el build de Vite.

1. Clona el repositorio y entra a la carpeta:

```bash
git clone https://github.com/WilmarAGM/Curso_Metodos_Numericos.git
cd Curso_Metodos_Numericos
```

2. Instala dependencias:

```bash
npm install
```

3. Desarrollo local (recarga en caliente):

```bash
npm run dev
```

4. Build de producción + preview (necesario para probar el Service Worker/PWA):

```bash
npm run build && npm run preview
```

> Nota: como `index.html` referencia `/css/global.css` con ruta absoluta, abrirlo directamente
> con doble clic (`file://`) ya no carga los estilos — usa `npm run dev` o `npm run preview`.

---

## Vista previa
<img width="1339" height="594" alt="image" src="https://github.com/user-attachments/assets/c64010b3-2845-40ea-a35e-ac9cd8c780b7" />

---

## Sobre el autor

Proyecto desarrollado por un docente de métodos numéricos con enfoque en:

* Aplicación práctica
* Visualización de algoritmos
* Integración con programación

---

## Futuras mejoras

* 🔥 Visualizaciones interactivas (gráficas dinámicas)
* 🌙 Modo oscuro
* 📈 Seguimiento de progreso del usuario
* 🧪 Ejercicios interactivos

---

## Contribuciones

Las contribuciones son bienvenidas.

Si deseas mejorar el proyecto:

1. Haz un fork
2. Crea una rama (`feature/nueva-funcionalidad`)
3. Haz commit de tus cambios
4. Abre un Pull Request

---

## Licencia

Este proyecto está bajo la licencia MIT.

---

## Nota

Si este proyecto te resulta útil, considera darle una estrella ⭐ en GitHub.
