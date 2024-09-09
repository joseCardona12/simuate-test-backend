# Project Backend Simulate Test

Este proyecto se centra en la creación del backend para preparar a los coders para las pruebas, conectando el backend con el frontend.

El proyecto está desarrollado en JavaScript utilizando Node.js y Express.

## Dependencias

A continuación, se detallan las dependencias utilizadas en el proyecto:

- **TypeScript**: Añade tipado al lenguaje JavaScript.
- **SuperTest**: Utilizado para realizar pruebas en aplicaciones web.
- **Express**: Framework de backend para Node.js, utilizado para crear aplicaciones web y APIs de manera sencilla.
- **Bcrypt**: Módulo utilizado para encriptar contraseñas.
- **JsonWebToken (JWT)**: Módulo para la creación de tokens de acceso, utilizado en la autenticación de usuarios.
- **CORS**: Herramienta que indica al navegador qué dominios pueden interactuar con el servidor.
- **Sequelize**: ORM (Object-Relational Mapping) que permite interactuar con la base de datos a través de objetos.
- **Tsyringe**: Módulo para la inyección de dependencias, apoyando el principio SOLID (Inversión de Dependencias).
- **Nodemon**: Herramienta que monitorea los cambios en tiempo real y reinicia automáticamente el servidor.
- **Dotenv**: Permite gestionar variables de entorno.
- **MySQL2**: Módulo para implementar Sequelize con MySQL como base de datos.

## Punto de Entrada

El proyecto inicia en el archivo `./src/index.ts`.

## `index.ts`

Este archivo ejecuta toda la lógica del backend.

### Middleware

Un middleware es un intermediario entre las solicitudes y las respuestas. Se utiliza para gestionar validaciones y proteger endpoints.

- **`express.json`**: Middleware que permite la transferencia de datos en formato JSON.
- **Routes**: Middleware de enrutamiento que actúa como el "frontend" del backend, facilitando la construcción de endpoints.

### Programación Orientada a Objetos (POO)

El proyecto utiliza el paradigma de Programación Orientada a Objetos (POO), que se basa en crear clases, propiedades y métodos.

#### Clases

Son plantillas reutilizables que encapsulan el código para crear objetos.

#### Propiedades

Características de un objeto, como `color`, `height`, `size`, etc.

#### Métodos

Funciones que representan las acciones que un objeto puede realizar.

## Arquitectura

El proyecto está estructurado en capas siguiendo el modelo **RCSRM** (Router, Controller, Service, Repository, Model) para delegar responsabilidades de manera clara.

### Routes

Maneja los endpoints del proyecto:

```javascript
app.use("/api", routes);
routes.use("/auth", authRouter);
authRouter.post("/login", AuthController.loginUser);
```

### Controllers

Gestiona la lógica para delegar las responsabilidades y maneja las propiedades de los endpoints antes de enviarlas al servicio.

### Services

Contiene la lógica del negocio y las operaciones específicas de cada modelo.

### Repositories

Capa de acceso a datos. Es la única capa que interactúa directamente con los modelos.

### Models

Copia o abstración de la entidad en la base de datos.
Este modelo se migra a la base de datos como entidad

## Config

La carpeta config contiene la lógica para conectar con la base de datos y la configuración del contenedor de dependencias.

### Container

Este archivo registra cada dependencia como un servicio único.

## Utils

Carpeta que contiene métodos auxiliares utilizados a lo largo del proyecto.
