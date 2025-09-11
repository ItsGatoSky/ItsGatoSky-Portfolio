# Portafolio de Músico Programador

Este es el código fuente de un portafolio web personal, diseñado con una estética "vintage" y "aesthetic" para un perfil creativo que combina la música y la programación. El sitio es completamente estático, construido con HTML5, CSS3 y Bootstrap 5, lo que lo hace ligero, rápido y fácil de desplegar.

![Captura de pantalla de la galería](https://placehold.co/800x400/4E4332/F5EFE6?text=Portfolio+Screenshot)
*(Puedes reemplazar esta imagen con una captura de pantalla real de tu portafolio)*

## Características

- **Diseño Responsivo:** Totalmente adaptable a dispositivos móviles, tabletas y computadoras de escritorio gracias a Bootstrap 5.
- **Estética Vintage:** Una paleta de colores cálidos (pergamino, sepia, dorado), tipografías elegantes y un diseño que evoca una sensación clásica.
- **Animaciones Sutiles:**
    - Título con efecto de "máquina de escribir" en la página de inicio.
    - Notas musicales flotantes en el fondo de la sección principal.
    - Efectos de hover en botones e imágenes de la galería.
- **Galería Interactiva:** Una galería de imágenes con una ventana modal que muestra detalles como título, descripción, fecha y enlaces externos por cada obra.
- **Fácil de Personalizar:** Estructurado para que puedas cambiar fácilmente el contenido, las imágenes y los enlaces.

## Cómo Empezar

No se requiere instalación ni dependencias. Simplemente clona este repositorio y abre el archivo `index.html` en tu navegador web.

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
# Abre index.html en tu navegador
```

## Personalización

### 1. Contenido de las Páginas

Edita directamente los archivos `.html` (`index.html`, `acerca.html`, `contacto.html`) para cambiar los textos. El contenido está en español y estructurado con etiquetas HTML semánticas.

### 2. Barra de Navegación y Pie de Página

El `navbar` y el `footer` son consistentes en todos los archivos HTML. Para cambiar los enlaces de tus redes sociales, busca y modifica la sección `<div class="social-icons">` en el `footer` de cada archivo.

### 3. Galería

La galería se encuentra en `galeria.html`. Cada elemento es un enlace `<a>` con una imagen `<img>` dentro. Para cambiar una imagen y su información, modifica los siguientes atributos `data-*` en la etiqueta `<a>`:

- `data-modal-title`: El título que aparecerá en la ventana.
- `data-modal-image`: La URL de la imagen en alta resolución para la ventana.
- `data-modal-date`: La fecha de la obra.
- `data-modal-description`: El texto descriptivo.
- `data-modal-link`: El enlace externo (ej. a GitHub, Spotify).
- `data-modal-link-text`: El texto del botón para el enlace externo.

**Importante:** También debes cambiar la URL en la etiqueta `<img>` interna, que corresponde a la miniatura que se ve en la cuadrícula. Para tus propias imágenes, colócalas en la carpeta `assets/images/` y enlaza a ellas (ej. `assets/images/mi-foto.jpg`).

## Despliegue en GitHub Pages

Este proyecto es ideal para ser alojado de forma gratuita con GitHub Pages.

1.  **Sube el repositorio a tu cuenta de GitHub.**
2.  Ve a la pestaña **"Settings"** de tu repositorio.
3.  En el menú de la izquierda, selecciona **"Pages"**.
4.  En la sección "Build and deployment", bajo "Source", selecciona **"Deploy from a branch"**.
5.  Elige la rama `main` (o `master`) y la carpeta `/(root)`.
6.  Haz clic en **"Save"**.

Después de unos minutos, tu sitio estará disponible en `https://tu-usuario.github.io/tu-repositorio/`.

---
*Creado con la ayuda de Gemini.*