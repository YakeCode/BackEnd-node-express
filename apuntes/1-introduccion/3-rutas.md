# Crear rutas en Express

Para crear rutas con express debemos tener en cuenta el **servidor**, el **método** que tendremos para esta ruta, la **ruta** que le daremos, y la **respuesta** para cuando haga el request

```Javascript
const app = express(); // SERVIDOR

app.get/*método*/

const rutaSobreNosotros = '/sobre-nosotros'

const callback = (request, response)=>{
  response.send('hola enviado desde el server en express') // respuesta
})

app.get(rutaSobreNosotros, callback)
```
