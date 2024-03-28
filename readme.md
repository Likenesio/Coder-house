# Clínica Dental Dentomac: Proyecto de Desarrollo Web

## Descripción Proyecto

Clínica Dental Dentomac es un proyecto diseñado y desarrollado como parte del programa de aprendizaje en la plataforma Coder House. Este proyecto ha sido concebido para explorar y aplicar una amplia gama de tecnologías web modernas, desde los fundamentos básicos hasta las prácticas más avanzadas en el desarrollo web contemporáneo.

### Tecnologías Utilizadas:
* **HTML5:** La estructura base del sitio web se ha construido utilizando HTML5, garantizando una marcación semántica y accesible.
* **CSS:** Se ha empleado CSS para estilizar y diseñar el aspecto visual del sitio web, asegurando una experiencia de usuario atractiva y coherente.
* **Bootstrap:** Para agilizar el desarrollo y garantizar la responsividad del diseño, se ha integrado Bootstrap, un marco de trabajo frontend ampliamente utilizado y altamente personalizable.
* **SASS:** La potencia de Sass se ha aprovechado para una gestión eficiente de estilos, permitiendo una escritura más limpia y modular mediante características como variables, mixins y anidamiento.
* **JavaScript:**  La interactividad y dinamismo del sitio web se han logrado con JavaScript, añadiendo funcionalidades como validación de formularios, animaciones y manipulación del DOM.
* **Figma:** El diseño de la interfaz para diferentes dispositivos se realizó con esta herramienta.
### Instalación de tecnologías utilizadas:
1. **NodeJs y npm:** `<link>` : <https://nodejs.org/en> descargar última versión estable e instalar (comprobar en consola `npm --version` luego de la instalación).

2. **Bootstrap:** En la carpeta raíz del proyecto poner en consola `npm init -y`
luego  `npm install bootstrap` ó copiar y pegar las siguientes etiquetas link y script como se muestra en el siguiente código:

```html
<!DOCTYPE html>
<html>
    <head>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
</html>
```

3. **SASS:** 
    * Iniciar con `npm init -y` en nuestra carpeta raíz del proyecto.
    * Crear una carpeta **sass** en la carpeta raíz con un archivo **style.scss** en su    interior.
	* Luego ejecutar el siguiente comando `npm install -D node-sass nodemon`.
	* En el archivo package.json línea 7 poner lo siguiente:
	`"build-css": "node-sass --include-path scss ./sass/style.scss ./css/style.css"`
	* Por último en la línea 8 poner `"watch-css":nodemon -e scss -x /"npm run build-css/""`
	* Para ejecutar luego sass utilizar el comando `npm run watch-css`

### Metodología de Desarrollo:
El proyecto de Clínica Dental Dentomac se ha desarrollado siguiendo una metodología incremental, abordando cada parte del sitio web desde lo más básico hasta lo más complejo. Se han empleado prácticas actuales de desarrollo web, como la modularización del código, la optimización de recursos y el uso de estándares de la industria para garantizar un código limpio, mantenible y escalable.

### Objetivos y Aprendizajes:

##### A lo largo de este proyecto, se han perseguido varios objetivos clave:

* Adquirir una comprensión profunda de las tecnologías fundamentales para el desarrollo web.
* Practicar el diseño y la implementación de interfaces de usuario atractivas y funcionales.
* Familiarizarse con el flujo de trabajo y las mejores prácticas de desarrollo web en un entorno de proyecto real.
* Desarrollar habilidades de resolución de problemas y depuración a través de desafíos prácticos y proyectos reales.