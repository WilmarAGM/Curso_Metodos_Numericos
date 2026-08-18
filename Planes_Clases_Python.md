# Planes de clases de Python

Plan de contenido para cada clase de Python del curso (una página web tipo `capitulo1/Biseccion.html` por clase). Este documento define qué va en cada pestaña antes de construir el HTML, siguiendo la misma estructura de secciones/tabs, cards y `tip-profe` que ya usa el sitio.

Ubicación en el cronograma: Semana 1, Clase 1 (27/08/2026) - "Presentación del curso. Entorno de trabajo en Python". Este plan cubre la parte de Python de esa clase.

Ruta sugerida del archivo: `capitulo0/Introduccion_Python.html` (o `python/01_Introduccion.html`, si se prefiere una carpeta aparte para las clases de Python en vez de mezclarlas en los capítulos numéricos).

---

## Clase 1: Introducción a Python

**Decisión de ubicación (confirmada):** no es una sección más del capítulo 1 de métodos numéricos. Es una card aparte en el hub (`index.html`), en la sección "SEMESTRE 2026-2S", justo al lado de la card "Día a día" (que hoy abre el PDF del cronograma). Enlaza a una subpágina nueva, `python/Introduccion_Python.html`, con el mismo patrón de pestañas que `capitulo1/Biseccion.html`.

**Fuente del contenido (confirmada):** Capítulo 1 completo de *Python Programming and Numerical Methods* (Berkeley), "Python Basics": 1.1 Getting Started with Python, 1.2 Python as a Calculator, 1.3 Managing Packages, 1.4 Introduction to Jupyter Notebook, 1.5 Logical Expressions and Operators, 1.6 Summary and Problems. (`pythonnumericalmethods.studentorg.berkeley.edu/notebooks/chapter01.00-Python-Basics.html`). Esto reemplaza el esquema anterior: `for`, `if` y funciones NO van en esta clase (son capítulos 3-5 del mismo libro); quedan para la clase de Python de la semana 3 ("funciones, control de flujo, graficación con matplotlib" según el cronograma).

**Estilo de las cards de Python (confirmado):** un color levemente distinto al resto del sitio para que se identifiquen de un vistazo. `global.css` ya tiene definidos y sin usar los tokens `--teal` (`#2a6b6e`) y `--teal-lt` (`#d6eced`); se reutilizan para esto en vez de inventar un color nuevo:
- En el hub: variante `.site-home .card.python` con borde/acento teal en vez del celeste (`--home-accent`) que usan las demás cards.
- En la subpágina: variante `.card.python` (borde izquierdo teal, label en teal), siguiendo el mismo patrón que ya usan `.card.definition` (verde), `.card.theorem` (gris azulado) y `.card.example-card` (naranja) en Bisección.

**Objetivo de la clase:** que el estudiante sepa por qué el curso usa Python, entienda cómo ejecutar código (Colab/Jupyter), use Python como calculadora (aritmética, `math`, tipos de datos), sepa instalar/importar paquetes (con NumPy/SciPy/Matplotlib como ejemplo concreto del curso), y maneje operadores lógicos y de comparación.

**Estructura en pestañas (6 secciones, contenido de las subsecciones 1.1-1.6 del libro):**

### Pestaña 1 - Primeros pasos (1.1 Getting Started with Python)

- ¿Por qué Python? Lenguaje más usado en cómputo científico hoy, sintaxis legible, gratuito, con librerías maduras (NumPy/SciPy/Matplotlib) que se usan en toda la industria y la academia.
- Formas de correr Python que menciona el libro (shell, IPython, script `.py`) y la que usa el curso: **Google Colab**, un cuaderno de Jupyter en la nube, sin instalar nada, con las librerías científicas ya preinstaladas y guardado automático en Drive.
- Tour corto de Colab: crear "Nuevo cuaderno" en `colab.research.google.com`, celdas de código vs. texto, ejecutar con `Shift+Enter`, por qué importa el orden de ejecución (los números `In [ ]` entre corchetes).
- `card.definition`: Python en este curso es una herramienta para *verificar e implementar* los métodos que se ven en el tablero, no el objetivo del curso.
- `tip-profe`: "No necesitas ser programador. Necesitas la sintaxis mínima que vamos a ver en esta clase, y la iremos repitiendo en cada capítulo."

### Pestaña 2 - Python como calculadora (1.2 Python as a Calculator)

- Operadores aritméticos `+ - * / **`, orden de operaciones (igual que en álgebra: potencias antes que multiplicación/división, antes que suma/resta), paréntesis para forzar orden.
- El símbolo `_` en Jupyter/IPython para reutilizar el último resultado (ejemplo del libro: `3/4` → `_*2` → `_**3`).
- Módulo `math`: `import math`, funciones `math.sqrt`, `math.sin`, `math.log` (natural) vs `math.log10`, constante `math.pi`. TAB para autocompletar, `funcion?` para ver ayuda.
- Casos especiales: `1/0` lanza `ZeroDivisionError`; `math.inf`, `math.nan`; números complejos con `j` (`2 + 5j`) o `complex(2,5)`; notación científica (`1e6`, `1e-3`).
- Tipos de datos numéricos: `int`, `float`, `complex`, verificables con `type(x)`.
- `card.example-card` con la secuencia de ejemplos del libro (`math.sqrt(4)`, `math.sin(math.pi/2)`, `math.exp(math.log(10))`) tal como aparecerían en una celda de Colab.

### Pestaña 3 - Manejo de paquetes (1.3 Managing Packages)

- Qué es un paquete/librería: código ya escrito por la comunidad que se reutiliza en vez de reprogramar desde cero.
- `pip`: instalar (`pip install paquete`), actualizar (`pip install --upgrade paquete` / `pip install -U paquete`), desinstalar (`pip uninstall paquete`), listar instalados (`pip list`), info de un paquete (`pip show paquete`). En Colab casi todo esto ya viene preinstalado.
- Aplicación concreta del curso, con `omega-grid` de 3 (o 3 cards seguidas), una por librería:
  ```python
  import numpy as np
  import scipy
  from scipy import linalg
  import matplotlib.pyplot as plt
  ```
  - **NumPy**: arreglos y operaciones vectoriales/matriciales. Ejemplo: `np.array([1,2,3])`, `np.linalg.norm(v)`.
  - **SciPy**: métodos numéricos ya implementados, para comparar contra lo programado a mano. Ejemplo: `scipy.optimize.bisect`, `scipy.linalg.solve`.
  - **Matplotlib**: gráficas de funciones y convergencia. Ejemplo: `plt.plot(x, y); plt.show()`.
- `tip-profe`: "En los talleres van a programar el método a mano *y* lo van a comparar con la versión de SciPy, para verificar que su implementación esté bien."

### Pestaña 4 - Jupyter Notebook / Colab a fondo (1.4 Introduction to Jupyter Notebook)

- Estructura de un notebook: celdas de código y celdas Markdown, ejecución celda por celda (no todo el archivo de una vez, a diferencia de un script).
- Por qué el orden de ejecución importa: si se corre una celda que usa una variable antes de correr la celda que la define, da error, aunque esa celda esté "más abajo" en el notebook.
- Atajos útiles: `Shift+Enter` (ejecutar y avanzar), `Ctrl/Cmd+Enter` (ejecutar y quedarse).
- Cómo compartir el notebook desde Colab (mismo mecanismo que compartir un Google Doc) para entregar talleres.
- `card.example-card` con una captura o mockup de la interfaz de Colab señalando: celda activa, botón ejecutar, número `In [ ]`, panel de archivos.

### Pestaña 5 - Expresiones lógicas y operadores (1.5 Logical Expressions and Operators)

- Expresión lógica: puede ser verdadera o falsa (ej. `a < b`), distinto de una expresión matemática. En Python, `True`/`False` son el tipo `bool`.
- Operadores de comparación: `>`, `>=`, `<`, `<=`, `!=`, `==`. Tabla con `a = 4, b = 2` (igual que la tabla del libro).
- Operadores lógicos: `and`, `or`, `not`, con su tabla de verdad.
- Orden de operaciones: aritmética, luego comparación, luego lógicos. Recomendación del libro: usar paréntesis igual aunque no sean obligatorios, para que la intención quede clara.
- Advertencia del libro (buena para un `tip-profe` o recuadro de alerta): en Python, cualquier número distinto de 0 se evalúa como verdadero en un operador lógico, pero no hay que apoyarse en eso: siempre usar `True`/`1` explícito.
- `card.example-card` con el ejemplo del libro: ¿hay más de 100.000 segundos en una quincena? → `(14*24*60*60) > 100000`.

### Pestaña 6 - Resumen y actividades (1.6 Summary and Problems)

- Quiz corto (6 preguntas de opción múltiple, mismo patrón que Bisección):
  1. ¿Qué imprime `(3*4)/(2**2 + 4/2)`? (orden de operaciones)
  2. ¿Qué módulo hay que importar para usar `sqrt`, `sin`, `pi`? (`math`)
  3. ¿Cuál es el comando para actualizar un paquete instalado con pip?
  4. Dadas `a = 4`, `b = 2`, ¿qué devuelve `a != b`?
  5. ¿Qué devuelve `(1 and not 0) or (1 and 0)`?
  6. ¿Qué pasa si se ejecuta una celda que usa una variable definida en una celda de más abajo que aún no se ha corrido?
- Resumen (`card` con `steps`): Colab como entorno del curso, Python como calculadora con el módulo `math`, `pip`/`import` para manejar paquetes (NumPy/SciPy/Matplotlib en particular), y operadores de comparación/lógicos como base de los `if` que se ven en la próxima clase de Python.
- Recomendaciones de lectura (`card`, con enlaces):
  - Capítulo 1 completo del libro fuente: *Python Programming and Numerical Methods* (Berkeley) - Getting Started, Calculator, Packages, Jupyter, Logical Expressions (enlace de arriba).
  - *Python for Everybody* - Charles Severance (gratuito, py4e.com). Introducción muy suave, ideal para quien nunca ha programado.
  - Documentación oficial de NumPy - "NumPy quickstart" (numpy.org/doc/stable/user/quickstart.html).
  - Documentación oficial de Matplotlib - "Pyplot tutorial" (matplotlib.org/stable/tutorials/pyplot.html).
- `tip-profe` final: la próxima clase de Python (semana 3, según el cronograma) retoma justo donde queda esta: funciones, `if`/`for` y graficación con Matplotlib.

---

## Siguientes clases de Python (pendientes de planear)

Según el cronograma (`claseAclase_2026-2S.xlsx`), las próximas sesiones con contenido de Python son:

- Semana 3: *Python: funciones, control de flujo, graficación con matplotlib*
- Semana 5: *Python: numpy arrays, numpy.linalg, scipy.linalg*
- (pendiente revisar las clases de Python de los capítulos 3 a 6 en el cronograma)

Cuando quieras seguimos con el plan de la siguiente clase.
