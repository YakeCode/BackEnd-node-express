# Middlewares

Un middleware es una función que se ejecuta entre que llega una solicitud al servidor **Request** y antes de que el servidor dé una respuesta **Response**. Sirve para procesar esa solicitud o hacer algo con los datos (por ejemplo, verificar permisos, validar datos, o agregar información). sin embargo estos también lo podemos utilizar de forma global. por ejemplo capturando todos lo errores de nuestra app o de forma única para cada endpoint

```Javascript
function checkName(request, response, next) {
  if (!request.body.name) {
    return response.status(400).json({ message: 'Name is required' }); /* response  detiene en este caso el middleware*/
  }
  next(); // Deja que siga al siguiente paso
}
```

Al tener la propiedad **next()** estos permiten ser ejecutados o conectados uno tras otro para validar información, la salida de uno puede ser la entrada de información de otro.

# Middlewares mas populares

## CORS

Middleware para habilitar CORS (Cross-origin resource sharing) en nuestras rutas o aplicación. http://expressjs.com/en/resources/middleware/cors.html

## Morgan

Un logger de solicitudes HTTP para Node.js. http://expressjs.com/en/resources/middleware/morgan.html

## Helmet

Helmet nos ayuda a proteger nuestras aplicaciones Express configurando varios encabezados HTTP. ¡No es a prueba de balas de plata, pero puede ayudar! https://github.com/helmetjs/helmet

## Express Debug

Nos permite hacer debugging de nuestras aplicaciones en Express mediante el uso de un toolbar en la pagina cuando las estamos desarrollando. https://github.com/devoidfury/express-debug

## Express Slash

Este middleware nos permite evitar preocuparnos por escribir las rutas con o sin slash al final de ellas. https://github.com/ericf/express-slash

## Passport

Passport es un middleware que nos permite establecer diferentes estrategias de autenticación a nuestras aplicaciones. https://github.com/jaredhanson/passport

Puedes encontrar más middlewares populares en el siguiente enlace: http://expressjs.com/en/resources/middleware.html
