# Principio de responsabilidades

El **Single Responsibility Principe** se refiere a que cada pieza de código debería manejar una única responsabilidad, esto se podría aplicar para **clases, archivos, métodos**.

Separar responsabilidades hace que el código sea más fácil de entender, modificar y mantener.

Para ayudarnos a hacer esto en NODE tenemos la herramienta **Express.Router**

# Express Router

### Cada Ruta

Creamos un archivo personal para cada tipo de ruta que vamos a crear.

```Bash
    touch products-router.js
```

Dentro de este archivo debemos definir la función y herramienta Express.router().

```Javascript
    const router = express.Router(); /*Se genera un router para los productos*/
```

Utilizamos el router con el método que se esta llamando y dentro de este la ruta debe llevar lo que va despues de la rurta base

en este caso ya la ruta no seria

```Javascript
    const productFilter = '/products/filter'
```

Si no que la ruta seria.

```Javascript
const productFilter = '/filter'

const CallbackFilter = (request, response) => {
  response.send('soy filter')
}

router.get(productFilter,CallbackFilter)
```

Apenas hayamos terminado la definición de rutas que vamos a tener para esta ruta base debemos exportar el modulo

```Javascript
    module.exports = router /*Que hace referencia a la función que esta importando express.Router()*/
```

---

### Enrrutador

Este se va a encargar de recibir todos los módulos de los archivos con las diferentes rutas y las ejecuta dependiendo de cual se este usando

Se crea el archivo Router.js

Dentro de este Vamos a importar cada una de las rutas que creamos anteriormente

- Declaramos el nombre de la ruta y con ella require con la ruta local del archivo

```Javascript
const productsRouter = require ('./products-router')
const usersRouter = require ('./users')
```

- Creamos una función la cual recibirá como parámetro el servidor y tendrá el método **Use** del router a el cual se le enviara la ruta base y los módulos anteriores que ya se habían declarado antes que son sus subRutas

```Javascript

const routerApi = (app)=>{
    /*servidor.use(rutaPadre, modulo-con-subRutas)*/
  app.use('/products', productsRouter)
  app.use('/users', usersRouter)
}
```

- Por ultimo exportamos este archivo que sera erutador y en la declaración de la exportación se recomienda uie lleve el nombre de la función que genera estas rutas

module.exports = routerApi;

## Incorporación del enrutador en el servidor

Después de tener nuestro sistema de rutas, vamos a incorporarlo a servidor

- En el archivo del servidor vamos a importar el archivo que hace la gestión de erutar

```Javascript
    /*Nombre que le vamos a dar, y en donde se encuentra este archivo que va a generar las rutas*/
    const routerApi = require ('./routes/router.js')
```

- Por ultimo como en este archivo creamos la función de erutar le vamos a mandar el parámetro que era el servidor

```Javascript
const app = express();

routerApi (app)
```

Y LISTO tendremos nuestro sistema mucho mas fácil de entender y gestionar 😁
