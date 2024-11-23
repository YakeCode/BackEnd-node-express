# Códigos de estado HTTP

https://http.cat/

Para incorporar la respuesta de códigos de estado de solicitud **HTTP** esto lo podemos hacer desde el callback del método en la sección response con la palabra reservada "status(**numero de estado**)".

### Ejemplo :

```Javascript
/* POST */
const routePostProduct = '/'
const CallbackPostProduct = (request, response)=>{
  const body = request.body
  response.status(201).json({ /*pongo la palabra reservada en el response con el codigo que quiero que me devuelve en caso de ser positiva la respuesta*/
    message: 'Created',
    data : body
  })
}

router.post(routePostProduct, CallbackPostProduct)

```
