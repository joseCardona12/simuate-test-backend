# Project Backend Simulate Test

## Endpoints

Para interactuar con los endpoinst desplegados,
se requiere utilizar para las pruebas **POSTMAN**

### Entidad users

La servicio **users** tiene los métodos para:

**Obtener los users:**

#### Método GET

- Cabecera

```
https://simuate-test-backend-1.onrender.com/api/users
```

- Respuesta

```
{
    "message": "users found",
    "users": [
        {
            "id": 3,
            "name": "jose",
            "email": "jose@gmail.com",
            "password": "dasd"
        }
    ]
}
```

**Obtener user por id:**

#### Método GET

- Cabecera

```
https://simuate-test-backend-1.onrender.com/api/users/1

```

**Nota:** El {1} es la variable que debes pasar por la cabecera, de tipo number

- Respuesta

```
{
    "messae": "User found",
    "user": {
        "id": 10,
        "name": "samuel",
        "email": "samuel@gmail.com",
        "password": "$2b$10$o0dh5XkjbUO26IY98/AU5uN9XTFmymWVD5DP.zcr/jm5oV0yFtsT6"
    }
}
```

- Respuesta Incorrecta

```
{
    "messae": "User found",
    "user": null
}
```

**Crear user:**

#### Método POST

- Cabecera

```
https://simuate-test-backend-1.onrender.com/api/users/
```

- Body de la solicitud

```
{
    "name": "example",
    "email": "example@gmail.com",
    "password": "password"
}
```

- Respuesta

```
{
    "message": "Created user correctly",
    "user": {
        "id": 134,
        "name": "test",
        "email": "test deploy2das",
        "password": "test"
    }
}
```

**Actualizar user:**

#### Método PUT

- Cabecera

```
https://simuate-test-backend-1.onrender.com/api/users/1
```

**Nota:** El {1} es la variable que debes pasar por la cabecera, de tipo number

- Body de la solicitud

```
{
    "name": "example Update",
    "email": "example@gmail.com",
    "password": "password"
}
```

- Respuesta

```
{
    "message": "Updated user correctly"
}
```

**Eliminar user:**

#### Método DELETE

- Cabecera

```
https://simuate-test-backend-1.onrender.com/api/users/1
```

**Nota:** El {1} es la variable que debes pasar por la cabecera, de tipo number

- Respuesta

```
{
    "message": "Deleted user correctly"
}
```

### Entidad Posts

**Obtener los posts:**

#### Método GET

- Cabecera

```
https://simuate-test-backend-1.onrender.com/api/posts
```

- Respuesta

```
{
    "message": "Posts found",
    "posts": [
        {
            "id": 195,
            "title": "riwi",
            "description": "sin palabras",
            "user_id": 16
        }
    ]
}
```

**Obtener post por id:**

#### Método GET

- Cabecera

```
https://simuate-test-backend-1.onrender.com/api/posts/1

```

**Nota:** El {1} es la variable que debes pasar por la cabecera, de tipo number

- Respuesta

```
{
    "message": "Post found",
    "post": {
        "id": 195,
        "title": "riwi",
        "description": "sin palabras",
        "user_id": 16
    }
}
```

- Respuesta Incorrecta

```
{
    "message": "Post found",
    "post": null
}
```

**Crear post:**

#### Método POST

- Cabecera

```
https://simuate-test-backend-1.onrender.com/api/posts/
```

- Body de la solicitud

```
{
    "title": "title",
    "description": "description",
    "user_id": 1
}
```

- Respuesta

```
{
    "message": "Created post correctly",
    "post": {
        "id": 204,
        "title": "title",
        "description": "description",
        "user_id": 3
    }
}
```

- Respuesta caso Error

```
{
    "message": "Error to create post",
    "error": {
        "name": "SequelizeForeignKeyConstraintError",
        "parent": {
            "code": "ER_NO_REFERENCED_ROW_2",
            "errno": 1452,
            "sqlState": "23000",}
    }
}
```

**Actualizar posts:**

#### Método PUT

- Cabecera

```
https://simuate-test-backend-1.onrender.com/api/posts/1
```

**Nota:** El {1} es la variable que debes pasar por la cabecera, de tipo number

- Body de la solicitud

```
{
    "title": "title update",
    "description": "description update",
    "user_id": 1
}
```

- Respuesta

```
{
    "message": "Updated post correctly"
}
```

**Eliminar post:**

#### Método DELETE

- Cabecera

```
https://simuate-test-backend-1.onrender.com/api/posts/1
```

**Nota:** El {1} es la variable que debes pasar por la cabecera, de tipo number

- Respuesta

```
{
    "message": "Deleted post correctly"
}
```

### Entidad likes

**Obtener los likes:**

#### Método GET

- Cabecera

```
https://simuate-test-backend-1.onrender.com/api/likes
```

- Respuesta

```
{
    "message": "Likes found",
    "likes": []
}
```

**Obtener like por id:**

#### Método GET

- Cabecera

```
https://simuate-test-backend-1.onrender.com/api/likes/1

```

**Nota:** El {1} es la variable que debes pasar por la cabecera, de tipo number

- Respuesta

```
{
    "message": "Like found",
    "like": {
        "id": 538,
        "quantity": 1,
        "post_id": 195
    }
}
```

- Respuesta Incorrecta

```
{
    "message": "Like not found"
}
```

**Crear likes:**

#### Método POST

- Cabecera

```
https://simuate-test-backend-1.onrender.com/api/likes/
```

- Body de la solicitud

```
{
    "quantity": 1,
    "post_id": 195
}
```

- Respuesta

```
{
    "message": "Created like correctly",
    "createdLike": {
        "id": 538,
        "quantity": 1,
        "post_id": 195
    }
}
```

- Respuesta caso Error

```
{
    "message": "Is necesary all params quantity, post_id"
}
```

**Actualizar likes:**

#### Método PUT

- Cabecera

```
https://simuate-test-backend-1.onrender.com/api/likes/1
```

**Nota:** El {1} es la variable que debes pasar por la cabecera, de tipo number

- Body de la solicitud

```
    "likes": [
        {
            "id": 538,
            "quantity": 1,
            "post_id": 195
        }
    ]
```

- Respuesta

```
{
    "message": "Updated like correctly"
}
```

**Eliminar like:**

#### Método DELETE

- Cabecera

```
https://simuate-test-backend-1.onrender.com/api/likes/1
```

**Nota:** El {1} es la variable que debes pasar por la cabecera, de tipo number

- Respuesta

```
{
    "message": "Deleted like correctly"
}
```

**Registrar api/auth/register**

#### Método POST

- Cabecera

```
https://simuate-test-backend-1.onrender.com/api/auth/register

```

- Body de la solicitud

```
{
    "name": "create",
    "email": "emilCreate,
    "password": solicitud
}
```

{
"name": "create",
"email": "emilCreate
}

- Respuesta caso Error

```
{
"message": "Is necesary all params quantity, post_id"
}
```

**Login api/auth/login**

#### Método POST

- Cabecera

```
https://simuate-test-backend-1.onrender.com/api/auth/login

```

- Body de la solicitud

```
{
    "email": "emilCreate,
    "password": solicitud
}
```

## Pasos

1. Instalar Postman
2. Crear pruebas con los diferentes métodos
3. El enpoint se coloca en la mitad

## Proyecto ----

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
