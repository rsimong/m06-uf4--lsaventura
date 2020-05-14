# M06-UF4-PR01
## Guía para el alumno

El alumno debe de entregar la práctica enunciada en este documento antes del cierre programado en el calendario.

Los entregables son:

- Carpeta de la práctica
> M06-UF4-PR01-“username”<br/>
> “username” = nombre de usuario del alumno en la plataforma<br/>
> Ejemplo: M06-UF4-PR01-garciafloresraul<br/>

- La carpeta delejercicio contendrá los ficheros necesarios del ejercicio correspondiente.

Se debe realizar la práctica por parejas.Cada pareja tendrá asignada unas tareas, por lo tanto, cada pareja tendrá una nota individual, y aparte, también habrátareas comunes.

Sino se obtiene un mínimo de un 4 sobre 10 en esta entrega, no se podrá hacer media con el examen y se deberá recuperar la práctica en extraordinaria.

_Es necesario superar una entrevista de práctica mostrando el correcto funcionamiento de la aplicación, para poder tener una nota._

## Ejercicio #1 LSAventura

La empresa LSAventura (empresa especializada en deportes de aventura) necesita una aplicación para guardar las actividades planificadas.

Nos pide realizar una web donde se podrá realizar un CRUD de las actividades siempre que el usuario esté logueado.

Al momento de mostrar, crear y actualizar una actividad, se deberá ver la previsión meteorológica de ese día. Cada vez que se modifique la fecha en el formulario de creación o actualización, se debe mostrar la predicción meteorológica de ese día seleccionado (este campo del formulario debe ser tipo “date”).

Cada actividad tendrá los campos: nombre, fecha, predicción.

_Cuando hablamos de CRUD, recordad que se definen las acciones: crear, actualizar, eliminar, obtener una lista de elementos (en este caso no hace falta realizar una vista para mostrar un solo elemento)._

### Requisitos técnicos de Angular:
- Para dividir la aplicación se debe separar en 2 módulos: uno para el CRUD de actividades y otro para el login.
- Crear los modelos de actividad y usuario.
- Crear un guard CanActivate para comprobar que el usuario está logueado.
- Crear un guard CanDeactivate para comprobar que se han hecho cambios en la actualización de una actividad.
- Definir una redirección para la ruta raíz y una ruta 404.
- Definir una ruta hija para acceder al formulario de creación de una actividad, de la ruta del listado de actividades.
- Definir el botón de eliminación de una actividad con un componente hijo del componente que muestre la lista de actividades (por lo tanto, definir la comunicación padre->hijo para enviar el id de la actividad a eliminar).
- Solo la petición del listado de actividades debería devolver un observable, las demás peticiones se deben tratar como promesas en los componentes.

### Predicción meteorológica
Se obtendrá la predicción meteorológica usando el servicio externo que ofrece esta API: https://www.metaweather.com/api/

Al usar este servicio ten en cuenta que:

- Solo obtiene valores futuros de 5 o 10 días.
- Usa el “``Woeid``” de Barcelona que es: 753692.
- Al guardar la predicción en la base de datos, simplemente guarda el campo “``weather_state_name``”.
- Al momento de mostrar la predicción, se debe mostrar en formato de imagen.
- En una petición obtendrás muchas predicciones, usa siempre la primera predicción obtenida, ya que es la más actual.

### Base de datos
Para realizar el CRUD de actividades se usará la BBDD Firestore de la herramienta Firebase. Aquí tienes un enlace para ver como realizar el CRUD: https://medium.com/angular-chile/angular-6-y-firestore-b7f270adcc96

### Login
Para realizar el login, se puede escoger realizarlo con Firebase o simularlo con la API https://reqres.in/

### Puntuación
La puntuación se dividirá de la siguiente forma:

- Puntuación compartida:
  - (``1p``) Implementación de la BBDD Firestore en la aplicación.
  - (``0,5p``) \*Uso de Git.
  - (``0,5p``) \*Estilos bien definidos.
  - (``0,5p``) \*Login con Firebase.
  - (``0,5p``) \*Subir la aplicación al hosting de Firebase.
- Puntuación del desarrollador 1:
  - (``2,5p``) Creación y listado de actividades.
  - (``1p``) Login, más el guard CanActivate, el módulo de login y sus rutas.
  - (``1p``) Ruta raíz, modelo de usuario.
  - (``1,5p``) Seguimiento semanal (``0,5`` cada seguimiento días:21 o 23, 28 o 30, y 5 o 7).
  - (``1p``) \*Calidad del código y separación de código en servicios, componentes, etc.
- Puntuación del desarrollador 2:
  - (``2,5p``)Actualización (más el guard CanDeactivate) y eliminación de actividades.
  - (``1p``) Creación del módulo de actividades y sus rutas (incluida la ruta del formulario de creación).
  - (``1p``) Ruta 404, modelo de actividad.
  - (``1,5p``) Seguimiento semanal (``0,5`` cada seguimiento días: 21 o 23, 28 o 30, y 5 o 7).
  - (``1p``) \*Calidad del código y separación de código en servicios, componentes, etc.
  
Los apartados marcados con un \* no se contarán a menos que se obtenga un mínimo de 5 en los demás puntos.

---

### Inspiracionales
- https://dribbble.com/shots/7128143-Booking-platform-for-scuba-diving-industry
- https://dribbble.com/shots/6098905-Trippy-Travel-App/attachments
- https://dribbble.com/shots/9759776-Traveling-App

---

### TODO List

- Puntuación compartida:
  - ~~(``1p``) Implementación de la BBDD Firestore en la aplicación.~~
  - ~~(``0,5p``) \*Uso de Git.~~
  - (``0,5p``) \*Estilos bien definidos.
  - ~~(``0,5p``) \*Login con Firebase.~~
  - ~~(``0,5p``) \*Subir la aplicación al hosting de Firebase.~~
- Puntuación del desarrollador 1:
  - ~~(``2,5p``) Creación y listado de actividades.~~
  - ~~(``1p``) Login, más el guard CanActivate, el módulo de login y sus rutas.~~
  - ~~(``1p``) Ruta raíz, modelo de usuario.~~
  - ~~(``1,5p``) Seguimiento semanal (``0,5`` cada seguimiento días: 21 o 23, 28 o 30, y 5 o 7).~~
  - ~~(``1p``) \*Calidad del código y separación de código en servicios, componentes, etc.~~
- Puntuación del desarrollador 2:
  - ~~(``2,5p``)Actualización (más el guard CanDeactivate) y eliminación de actividades.~~
  - ~~(``1p``) Creación del módulo de actividades y sus rutas (incluida la ruta del formulario de creación).~~
  - ~~(``1p``) Ruta 404, modelo de actividad.~~
  - ~~(``1,5p``) Seguimiento semanal (``0,5`` cada seguimiento días: 21 o 23, 28 o 30, y 5 o 7).~~
  - ~~(``1p``) \*Calidad del código y separación de código en servicios, componentes, etc.~~