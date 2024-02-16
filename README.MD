# API REST CON MYSQL

> en este proyecto vamos a esperimentar la consulta de datos a una bd en MySQL , utilizando el lenguaje JavaScript y Node.js para crear un servidor Express que realice peticiones asincronas al gestor

## Instalación de dependencias

> para este proyecto se utilizo `dotenv` para el manejo de datos sencible, `promise-mysql` para la conexion a la base de datos y consulta con la misma, `express` para el tema de las rutas y peticiones http

## Instalacion de dependencias de desarrollo

> se utilizo `babel` para la trasnpilacion del codigo js, `morgan` como middleware de log y `nodemon` para el monitorado de cambios en los archivos, en especial de babel se utilizo este comando que en su totalidad serian 4 dependencias

@babel/cli @babel/core @babel/node @babel/preset-env

## configuraciones

> se crea un archivo .babelrc en la raiz del proyecto, este se encargara de la compilacion de js

{
    "presets": ["@babel/preset-env"]
}

esto es para que babel pueda compilar mi codigo moderno a una verion que entienda todos los navegadores, posterior se crea el comando en el packageJson para que se ejecute la compilacion.

"nombre-x" : "babel-node --presets=@babel/preset-env"

luego se debe de especificar la ruta donde se desea compilar el codigo, asi que con otro comando le indicamos

"dev" : "nodemon --exec npm run babel-node ./src/index.js" 
"dev": "npm run babel-node src/index.js" 
------------------------

> se crea igualmente en la raiz el archivo .env para las credenciales a la bd y datos sensibles


> se para la configuracion de dotenv se crean los datos necesarios en .env y en el archivo de config.js o como lo haya llamado se pone la siguiente informacion.

import { config } from "dotenv";

config();

> se importa y llamada al modulo dotenv para cargar los valores de variables de entorno y posteriormente se llama a la función config(), luego se exporta un objecto que tendra los valores ocultos. 

export default {
    host : process.env.HOST || "127.0.0.1",
    database : process.env.DATABASE,
    user : process.env.USERNAME,
    password : process.env.PASSWORD || "",
    port : process.env.PORT || 4000
}


