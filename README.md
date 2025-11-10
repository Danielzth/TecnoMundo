TecnoMundo: La Landing Page del Futuro

## 🌟 Descripción del Proyecto

TecnoMundo es una **Landing Page (página de una sola vista)** con temática tecnológica, enfocada en la presentación dinámica y optimizada de noticias y avances. El diseño se basa en un esquema de color **Dark Mode** moderno, con énfasis en animaciones suaves y una experiencia de usuario fluida.

Este proyecto fue desarrollado como una demostración de dominio de tecnologías web esenciales.

## 🔗 Ver Proyecto en Vivo

Puedes acceder a la versión desplegada en GitHub Pages aquí:

[**Acceder a TecnoMundo en Vivo**](https://danielzth.github.io/TecnoMundo/) 
*(¡No olvides pegar tu enlace aquí!)*

## ✨ Características Destacadas

Hemos implementado diversas técnicas modernas para garantizar el mejor rendimiento y diseño:

* **Diseño Interactivo y Estético:**
    * Navegación **Sticky** con efecto de **vidrio esmerilado** (`backdrop-filter`).
    * Efectos de **resplandor/brillo** en tarjetas al pasar el ratón (`:hover::before`).
    * Títulos y logo con efecto de **texto degradado** (`background-clip: text`).

* **Experiencia de Usuario (UX):**
    * Animaciones de entrada en cascada al hacer scroll, implementadas con **`IntersectionObserver`**.
    * Desplazamiento interno **suave** (`scrollIntoView({ behavior: 'smooth' })`).
    * Formulario de contacto con *simulación* de envío (feedback visual con `setTimeout`).

* **Optimización y Rendimiento (Perf):**
    * Uso de **variables CSS** para facilitar el manejo del tema.
    * Optimización de imágenes con el formato **WebP** y *fallbacks* para compatibilidad.
    * **Fallback de Video** inteligente: el video de fondo se pausa y se reemplaza por una imagen en dispositivos móviles o cuando se detecta el modo de Ahorro de Datos (`navigator.connection.saveData`).
    * Diseño **100% Responsive** (`@media queries`) para adaptarse a cualquier pantalla.

## 🛠️ Tecnologías Utilizadas

* **HTML5** (Estructura Semántica)
* **CSS3** (Grid, Flexbox, Variables, Efectos de Transición)
* **JavaScript** (Vanilla JS, sin librerías externas)
    * `IntersectionObserver`
    * Manejo del DOM
