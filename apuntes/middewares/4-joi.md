# Joi Validar Datos

Se utiliza para validar los datos que me están enviando desde el cliente es decir que me estén enviando la información correcta en e formato correcto. Para utilizar este middleware se debe seguir los siguientes pasos.

### Crear su estructura

- 1 Instalar la librería

```Bash
npm install joi
```

- 2 Creamos una carpeta en donde van a ir los validadores de datos y en el vamos a tener los diferentes esquemas y validaciones que necesita nuestro servidor

```Javascript
const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().alphanum().min(3).max(15)
const price = Joi.number().integer().min(10)

const createProductSchema = Joi.object({
  name : name.require(),
  price : price.required()
})

const updateProductSchema = Joi.object({
  name : name,
  price : price
})

const getProductSchema = Joi.object({
  id : id.required()
})
```

- 3 exportamos el modulo para poderlo utilizar

```Javascript
module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  deleteProductSchema
}
```

- 4 Después de esto, en la carpeta de middlewares crearemos un archivo llamado validator, y en este crearemos una función dinámica la cual nos ayudara validar todos los tipos de métodos solicitados por el cliente

```Javascript
const boom = require('@hapi/boom')

const validatorHandler = (schema, property)=>{
  return (request, response, next) =>{
    const data = request[property]
    const {error} = schema.validate(data, {abortEarly: false})
    if (error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler
```

**[property] :** Dice donde se encuentra la información

**(data, {abortEarly: false}) :** Le estamos indicando que me muestre todos los errores desde un inicio ya que si no, me mostraría uno y apenas corrigiera ese me mostraría el otro

---

### Utilizar este validador

En nuestra ruta, incorporamos nuestro validador y nuestros esquemas.

```Javascript
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  deleteProductSchema
} = require('../schema/product.schema.js')

const validatorHandler = require ('../middlewares/validador.handler.js')
```

---

### Incorporar a los métodos

Dentro del método los métodos tendríamos **RUTA**, **VALIDADOR** que esta construido con joi y el **CALLBACK**

**Validador :** recibe 2 parámetros, el esquema correspondiente creado para este método y lo que le envía el cliente en el request **Params** o **Body**

```Javascript

const productId = '/:id' /* Los 2 puntos significa que es un parámetro*/
const CallbackProductId = async (request, response, next) => {
  try {
    const {id} = request.params;
    const product = await service.findOne(id)
    response.json(product)
  } catch (error) {
    next(error)
  }
}

router.get(
  productId,
  validatorHandler(getProductSchema, 'params'),
  CallbackProductId
)

```
