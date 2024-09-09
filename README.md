## PROJECT BACKEND SIMULATE TEST

Este proyecto se enfoca en el backend para preparar a los coders para las pruebas siguiente conectando el back y front.

El proyecto fue creado en js asociado al back con node.js y express.

## DEPENDENCIAS

Las depencias utilizadas son
**typescript:** SuperTest para agregar tipado al lenguaje js
**Express:** Es un framework backend para node js.
Se utiliza para crear aplicaciones web y APIS de forma sencilla.
**Bcrypt:** Modulo para encriptar la password
**JsonWebToken:** Modulo para la creación de tokens de
acceso para manejar el auth en las páginas.
**cors:** Herramientas que interactua con el navegador para indicarle que dominio diferente al nuestro puede atacar y/o solicitar.
**Sequelize:** ORM para interactuar con la base de datos
por medio de objetos
**Tsyringe:** Modulo para manejar la inyección de dependencias y enfocarnos en el principio SOLID (INVERSIÓN DE DEPENDENCIAS).
**Nodemon:** Herramienta enfocada en escucahr los cambos a tiempo real y recargar automaticamente.
**Dotenv:** Dependencia para permitir utilizar las variables de entorno
**Mysql2:** Modulo para implmentar el sequelize e indicarle el dialecto con la base de datos.

## Entry

El proyecto ingresar por la carpeta ./src/index.ts

## Index.ts

Este archivo ejecuta toda la lógica del backend.

### Middleware

Receptor entre la solicitud y la respuesta.
Es un intermedario para manejar validaciones y continuar. Se utiliza para crear los endpoints protegidos.

### express.json

Middleware para permitir utilizar la transferencia de datos en formato json

### Routes

Middleaware de enrutamiento. Este sería el frontend del
backend. Con este middlware condtruimos los endpoints.

### POO

Se utilizó el paradigma orientando objeto. Enfocado en crear clases, propiedades y métodos

#### Clases

Elemento de este paradigma para englobar el código y crear una plantilla reutilizable. (Crear objetos a partir del padre).

#### Propiedades

Elementos de la clase, indica las características que
va a obtener el objeto (color, height, size, etc)

#### Métodos

Funciones dentro de una clase. Son las acciones que
va ocupar el objeto.

## Arquitectura
