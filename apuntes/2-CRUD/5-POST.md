# POST

Este método lo utilizamos para crear algo en especifico y para utilizarlo con express necesitamos generar ciertos pasos

- Importar el **middleware** para que nos deje acceder al **request y el response**

```Javascript
Servidor.use(express.json()) // este nos deja interactuar con json
```

- Luego de esto creamos la ruta del **POST** a la cual le vamos a generar la solicitud de crear

```Javascript
const routePostProduct = '/'
```

- Creamos la función de callback en la cual podemos encontrar lo siguiente
  **Request.body :** Este argumento, trae el cuerpo de lo que se eta intentando crear
  **response.json :** Este devuelve como respuesta el mensaje de exito en creacion y devuelve el body de lo que se creo

```Javascript
const CallbackPostProduct = (request, response)=>{
  const body = request.body
  response.json({
    message: 'Created',
    data : body
  })
}
```

- Por ultimo creamos el metodo post yle mandamos su respectiva ruta y callback

```Javascript
    router.post(routePostProduct, CallbackPostProduct)
```
