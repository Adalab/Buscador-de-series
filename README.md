# Buscador de series

Desarrollo de una aplicación web de búsqueda de series de TV, que nos permite des/marcarlas como favoritas y guardarlas en el **LocalStorage**.

La web contiene también una parte de maquetación HTML y Sass y cumple los siguientes puntos:

- Uso de código **JavaScript** con la sintaxis correcta y bien estructurado, utilizando variables y constantes, condicionales, arrays y objetos, funciones, eventos y DOM avanzado.
- Peticiones **AJAX y APIs**: crear peticiones con fetch y promesas, usar el localStorage y manejar el formato .json.
-  Uso de partials y estructuración correcta de ficheros y carpetas en el proyecto.
-  Maquetación libre con HTML y Sass.

El desarrollo del ejercicio se ha llevado a cabo utilizando el Adalab Starter Kit, creado en node y gulp. Este Kit incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local; además de otras herramientas, como por ejemplo Gulp para la automatización de tareas o motor de plantillas.

 ¡Gestiona tus series!foto

## Composición del código según indicaciones:

Sobre una estructura básica compuesta por un input de texto y un botón de buscar, hacer que el botón de búsqueda se conecte al API abierto de TVMaze para la búsqueda de series.

Un apartado de resultados, donde se renderiza un array que acumula las series de la búsqueda. El renderizado ha de hacerse en tarjetas, incluyendo el título y fotografía de cada una de las series mostradas.

Para realizar este renderizado se ha utilizado DOM avanzado.

Un apartado de favoritos, donde se renderiza un segundo array que acumula las series guardadas en favoritos. El renderizado ha de hacerse en tarjetas, incluyendo el título y fotografía de cada una de las series guardadas en favoritos.

Las series favoritas deben distinguirse del resto por un cambio en el color de fondo y de fuente. Debe variar tanto en el apartado de favoritos como en los propios resultados.

Las series favoritas deben mostrarse permanentemente en pantalla, incluso aunque la usuaria realice otra búsqueda.

El array de series favoritas debe almacenarse en el LocalStorage a vistas de que estén disponibles aunque se recargue la página.

### Otras características para la sección de favoritos:

- Al hacer click en cualquier serie de favoritos, en el icono reservado para ello, la serie debe borrarse del listado renderizado y del localStorage.
- Es posible marcar/desmarcar favoritos desde el apartado de resultados.
- Si se realiza una búsqueda de una serie que ya está en favoritos, debe mostrarse con el estilo adecuado ya en el renderizado de resultados.
- Botón en el apartado de favoritos para borrarlos todos a la vez.

Para maquetar este ejercicio se ha utilizado un diseño acorde a la finalidad de la página, creando con Sass una TV en el contenedor de la búsqueda. Se ha reservado un apartado a la izquierda para el listado de favoritos, que como indicado se encuentra siempre visible pero que cuenta con un botón para cerrar el apartado si fuera necesario. Además, la TV diseñada cuenta con dos botones: uno que reabre el apartado de favoritos en caso de que éste se encuentre cerrado, y otro que cambia la paleta de colores utilizada en la página a una de alto contraste para mejorar la accesibilidad. Además, se ha utilizado JavaScript para funciones con motivos de navegación y decorativos:

Botón de cierre de favoritos.
Botones de la TV: apertura de favoritos y cambio de paleta de la página.
El apartado de resultados se encuentra oculto hasta que realizamos una búsqueda, si después de realizarla clickamos en el input para realizar una nueva búsqueda se vuelve a ocultar.
Botón de "Mostrar más" y "Mostrar menos" en la sección de favoritos para hacer la página más agradable al usuario en caso de que existan muchos elementos marcados como fav.
 - ¡Gestiona tus series! - foto

## Composición del código:

- HTML: Dividido en tres partials base: main y aside.
- CSS: Dividido en partials:
- Core: Conotiene los partials referentes a la hoja de Reset y variables de valores con carácter repetitivo en el diseño.
- Layout: Contiene los partials referentes a las particiones HTML, conteniendo los estilos de cada una de ellas.

## Arranque del proyecto:

npm install: Para instalar las dependencias
install

npm start: Para arrancar el proyecto y probarlo en desarrollo a través de la URL '//localhost:3000/#/'
start

npm run docs: Para publicar el proyecto a producción
docs

Hecho por @marinadelgado
