# RetoMiAguila

El objetivo del proyecto fue replicar la vista general con funciones específicas de Mi Águila.
se puede visualizar el deploy en la siguiente liga https://reto-mi-aguila.web.app/

## Crear un JSON con un viaje de prueba

Fue utilizado HttpClient para llamar los archivos json en assets y obtener la ruta principal, también se añadieron los favoritos a un json adicional.

## Permite seleccionar diferentes direcciones en favoritos

Cuando se selecciona un favorito cargado del json este obtiene sus coordenadas por el domicilio para después mostrarlo en el mapa como punto A para la primera etapa, aplica lo mismo para el punto B. También se puede buscar un domicilio en el campo de texto.

## Navegación

Hay una navegación entre origen y destino (paso 1 y 2) en el cual se envia por la ruta el punto de partida seleccionado. para crear una ruta con el punto de destino.

## Responsivo

Se generarion modificaciones contemplando la vista movil, vista para tablets y la vista de escritorio en donde se oculta el menú y se aplica el botón para reactivarlo.

## Escalabilidad

El proyecto se encuentra dividido en el estandar que se propone por angular, contemplando escalabilidad optima al separar servicios, componentes, estructura, interfaces y módulos.


