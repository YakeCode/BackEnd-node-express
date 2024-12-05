# HTTP Errors

Este middleware es muy util para los errores, es un **Middleware Global** lo que quiere decir que funcionara en toda la aplicación capturando errores.

# Crear

- 1 creamos una carpeta llamada middlewares en donde irán cada uno de los que vamos a utilizar para este fin

- 2 creamos el archivo correspondiente y dentro de este crearemos una función que capturara los errores

```javascript
const middlewareHttpError = (error, request, response, next) => {
  console.error(error);
  next(error); /*pasa el error al siguiente middleware*/
};
```

- 3 Creamos una función que responderá a el cliente el error que se genero

```Javascript
const errorHandler = (error, request, response, next)=>{
    response.status(500).json({
      message:error.message,
      stack: error.stack /* Para saber donde sucedió el error y nos ayudara a depurar el código mas fácilmente*/
    })
}
```

- 4 Cuando terminemos definir los middlewares que vamos a utilizar los demos exportar de la siguiente manera

```Javascript
module.exports = { middlewareHttpError, errorHandler }
```

# Implementación

#### Los middlewares de tipo error se deben usar después de definir el routing

- 1 En el servidor los traemos

```Javascript
const { middlewareHttpError, errorHandler } = require ('./middlewares/error.handler.js')
```

- 2 Los incorporamos a el servidor **Después del routing** en el ,orden de ejecución que deberían ir.

```Javascript
routerApi (app)// routing
/* MIDDLEWARES */
/* middleware debe ir después del routing */

app.use( middlewareHttpError ) //1
app.use( errorHandler) //2
```

- 3 Dentro del routing deberíamos modificarlo para poder acceder al los middlewares

  **Código Original**

```Javascript

```

```Javascript

```

```Javascript

```
