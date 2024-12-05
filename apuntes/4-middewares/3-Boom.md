# Boom Build Status

Es un middleware muy utilizado para el manejo de errores para respetar la respuesta de **status code**

para utilizarlo debemos seguir los siguientes pasos

- 1 Instalarlo

```Bash
npm install @hapi/boom
```

- 2 Importarlo en los servicios

```Javascript
const boom = require('@hapi/boom')
```

- 3 Crear función para validar si es error por statusBoom

```Javascript
const boomErrorHandler = (error, request, response, next)=>{
  if (error.isBoom) { //Valida si el el error es tipo Boom
    const { output} = error
    response.status(output.statusCode).json(output.payload)
    /*Para leer el status code se utiliza el .statusCode*/
    /*La info que va en el json viene de la librería en .payload */
  }else{
    next(error)
  }
}
```

- 4 La incorporamos al servidor

```Javascript
const { boomErrorHandler } = require ('./middlewares/error.handler.js')
app.use(boomErrorHandler)

```

- 5 lo incorporamos al codigo

```Javascript
async update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) throw boom.notFound('Product not found');
    /*entre los paréntesis de boom podemos incorporar el error que retorna*/
}

```
