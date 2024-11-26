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
