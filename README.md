# Trabajo Final PWA

### Se desarrolla una aplicación WEB completa

## BACK-END

### Librerías y Frameworks utilizados

- EXPRESS
- BCRYPT
- JSONWEBTOKEN
- MYSQL2
- UUID
- CORS
- DOTENV

### En el Backend se desarrollan las rutas con Express.

- Se crea una carpeta "test" para probar la conexión.
- Se crea la carpeta "helpers", donde se coloca el archivo de validación.
- Se crea una carpeta "errors", donde se ubica el modelo de errores custom que se utilizará en toda la aplicación.
- Se crea una carpeta "config", donde se coloca el archivo de configuración para la conexión con la Base de Datos MySQL.
- Se utiliza la librería misql2.
- Se utiliza un patron de repositorio para organizar el proyecto, este patrón nos permite mantener aislada nuestra fuente de _DATOS_ de la aplicación. Este patrón facilita la migración de la DB en caso de ser necesario, tambien nos permite tener multiples fuentes de datos.

#### Rutas

##### Autentificación

- En esta ruta, se registran las personas.
- Antes de generar el nuevo registro, se verifica en la DB que, tanto el email y el username no hayan sido registrados por otro usuario.
- Para generar el registro se genera un _UUID_, el cual vincula a cada persona con un usuario unequivocamente. Dicho _UUID_ se guarda en una DB independiente para asegurar la no repetición del mismo, para este proceso, antes de insertar el nuevo usuario, se verifica que no exista otro _UUID_ identico.
- Se verifican las credenciales para que los usuarios puedan ingresar al sitio.
- Se realiza el proceso de _Login_.
- Se realizan todas la tareas y consultas relacionadas con los Usuarios (Personas).

- Para realizar el _Login_ de un usuario, se debe verificar la existencia del _email_ y del _username_, tambien se verifica que el _password_ se el correcto.
- Una vez verificadas las credenciales, se devuelve un _*TOKEN*_ el cual contiene encriptado el _email_, _username_ y el _rol_, este último se pensó para realizar todas las operaciones de carga, actualización de productos y todos los temas relacionados con la administración del sitio.

#### Productos

- En esta ruta se realizan todas las tareas relacionadas con los productos, ingreso de nuevos productos, actualización de los productos existentes.
- Los parametros que se pensaron para actualización son _precio_, _stock_, _imagen_, _estado_(activo, inactivo) y se pretende incorporar la actualización de la _descripción_.
- También se incorporó la posibilidad de crear categorías y buscar productos por categorias.

#### Carrito

- En esta ruta se realiza toda la gestión de los carritos.

## FRONT-END

### Librerías y Frameworks utilizados

- react
- react-dom
- react-icons
- react-router-dom

- Se pretende utilizar la librería de _"FORMIK"_ para el manejo controlado de los formularios.

Se pretende incorporar la utilización de Cookies para el manejo del _token_, tambien se podría realizar un control de tiempo de inactividad para desautorizar al usuario si pasa mucho tiempo sin actividad en la página.

En esta etapa se crean y despliegan las vistas (screens) de _home_, _register_ y _login_.

Se crean y prueban con POSTMAN varias funcionalidades, las que por falta de tiempos no se logran completar.
Se continuará trabajando en el proyecto para poder completar la mayor cantidad de funciones posibles.

Se crean componentes como botones personalizados, inpus y labels personalizados, los cuales se utilizan en los diferentes formularios.

Para poder registrar un producto con imagen, se utiliza la URL de imagenes de POKEAPI, la cual se ejecuta junto a un contador para generar el cambi de imagen en cada producto cargado.

Se crean los componentes de formularios para _register_, _login_, _insertar productos_, _crear categorias_, _actualizar producto_.

Se crean los componentes para listar todos los productos y se crea el componente vinculado para mostrar el producto selecionado. En este caso falta realizar la función de carrito.
