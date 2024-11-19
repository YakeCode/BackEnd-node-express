// corriendo primer servidor

const express = require ('express')

const app = express(); // Crear APP

const port = 3000; // puerto en el cual va a correr la app

app.get('/'/*ruta */, (request, response)=>{/*Callback */
  response.send('hola enviado desde el server en express')
})

/* Ruta Products */

const rutaProducts= '/products'
const productId = '/products/:id' /* Los 2 puntos significa que es un parámetro*/

const CallbackProducts = (request, response)=>{
  response.json([
    {
      name:"DRON",
      price:900
    },
    {
      name: 'Camera',
      price: 2000
    }
  ]
  )
}

const CallbackProductId = (request, response) => {
  const {id} = request.params;
  response.json({
    id,
    name: 'Camera',
    price: 2000
  })
}

app.get(rutaProducts, CallbackProducts)

app.get( productId, CallbackProductId)

app.listen(port, ()=>{
  console.log('Mi puerto ', port)
})
